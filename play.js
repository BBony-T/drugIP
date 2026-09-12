/* 공통 장면 렌더러. 게임 상태나 토큰을 저장하지 않는다. */
(() => {
  "use strict";
  const stage = document.getElementById("stage");
  const params = new URLSearchParams(location.search);
  const code = params.get("c");
  const step = params.get("p");
  const data = window.PLAY_DATA || {};
  const sample = Object.hasOwn(data, code) ? data[code] : null;
  const hasScene = sample?.scenes && Object.hasOwn(sample.scenes, step);
  const scene = hasScene ? sample.scenes[step] : null;
  const pendingImages = [];

  function revealStage() {
    stage.classList.add("is-ready");
  }

  function prepareImage(node, src, onLoad) {
    pendingImages.push(new Promise(resolve => {
      node.addEventListener("load", async () => {
        try {
          await node.decode();
        } catch (_) {
          // load가 끝난 이미지는 decode 지원 여부와 관계없이 표시할 수 있다.
        }
        if (onLoad) onLoad();
        resolve();
      }, { once: true });
      node.addEventListener("error", () => {
        node.remove();
        resolve();
      }, { once: true });
      node.src = src;
    }));
  }

  function element(tag, className, text) {
    const node = document.createElement(tag);
    node.className = className;
    if (text !== undefined) node.textContent = text;
    return node;
  }
  function heading(text) {
    const node = element("h1", "scene-title", text);
    node.id = "scene-title";
    stage.append(node);
  }
  function position(node, box) {
    Object.assign(node.style, { left: `${box.x}%`, top: `${box.y}%`, width: `${box.width}%`, height: `${box.height}%` });
  }
  function medicineDecoration() {
    const decoration = element("div", "medicine-decoration");
    decoration.setAttribute("aria-hidden", "true");
    for (const name of ["capsule", "tablet top-tablet", "tablet bottom-tablet", "bottom-pill", "open-pill", "pill-dot dot-one", "pill-dot dot-two", "pill-dot dot-three"]) decoration.append(element("span", name));
    stage.append(decoration);
  }
  function dataError(fields) {
    stage.classList.add("error-scene");
    stage.classList.add("data-error");
    stage.setAttribute("role", "alert");
    heading("데이터 누락 오류");
    // 요청 주소의 원문이나 잘못된 데이터 값은 화면에 재출력하지 않는다.
    const address = /^[A-N]$/.test(code) && /^[1-9]$/.test(step) ? `${code} / ${step}` : "";
    stage.append(element("p", "error-copy", `${address}\n필수 항목: ${fields.join(", ")}\nGAME_DATA.md와 data.js를 확인하세요.`));
    console.error("[PLAY_DATA_MISSING]", { code, step, fields });
  }
  if (!window.PLAY_DATA) {
    dataError(["장면 데이터 파일"]);
    revealStage();
    return;
  }
  if (!hasScene) {
    stage.classList.add("error-scene");
    heading("화면을 찾을 수 없어요");
    stage.append(element("p", "error-copy", "QR 주소를 다시 확인해 주세요."));
    revealStage();
    return;
  }
  if (!scene || typeof scene !== "object") {
    dataError(["장면 데이터"]);
    revealStage();
    return;
  }
  // CSS 대체 화면이 있으므로 image는 선택 항목이다.
  // 정보수집 장면은 토큰 결과가 없으므로 heart/coin은 필수 항목이 아니다.
  // 선택 카드의 비용과 보건실·친구의 고정 결과 문구는 필수다.
  const forbidden = /TODO|\bnull\b|\bundefined\b|아직\s*준비\s*중|준비\s*중인\s*정보입니다|1차\s*샘플|종이\s*보드게임\s*QR\s*보조\s*화면/i;
  const validText = value => typeof value === "string" && value.trim().length > 0 && !forbidden.test(value);
  const missing = [];
  if (!validText(scene.title)) missing.push("장면 제목");
  if (!Array.isArray(scene.effects) || !scene.effects.every(validText)) missing.push("효과 문구");
  if (["choice", "medicine-choice"].includes(scene.type)) {
    if (!validText(scene.guidance)) missing.push("선택 안내");
    if (!Array.isArray(scene.hotspots) || !(scene.type === "choice" ? scene.hotspots.length === 3 : [2, 3].includes(scene.hotspots.length))) missing.push("선택지");
    else scene.hotspots.forEach((spot, index) => {
      const prefix = `선택지 ${index + 1}`;
      if (!spot || !validText(spot.label) || (scene.type === "choice" && !validText(spot.caption))) missing.push(`${prefix} 문구`);
      if (scene.type === "choice" && (!spot || !Number.isFinite(spot.coin))) missing.push(`${prefix} 비용`);
      if (!spot || !validText(spot.href) || !/^(play\.html\?c=[A-N]&p=[1-9]|search\.html\?s=([1-9]|1[0-4]))$/.test(spot.href)) missing.push(`${prefix} 연결`);
      if (!spot || ![spot.x, spot.y, spot.width, spot.height].every(Number.isFinite) || spot.x < 0 || spot.y < 0 || spot.width <= 0 || spot.height <= 0 || spot.x + spot.width > 100 || spot.y + spot.height > 100) missing.push(`${prefix} 영역`);
    });
  } else if (["healthroom", "friend", "hospital", "wait"].includes(scene.type)) {
    if (!validText(scene.result)) missing.push("고정 결과 문구");
    if (["hospital", "wait"].includes(scene.type) && (!Array.isArray(scene.lines) || !scene.lines.length || !scene.lines.every(validText))) missing.push("본문 줄바꿈");
  } else if (scene.type === "medicine-result") {
    if (!scene.effects?.length) missing.push("약물 결과 효과");
  } else missing.push("장면 종류");
  if (missing.length) {
    dataError(missing);
    revealStage();
    return;
  }
  stage.classList.add(`scene-${scene.type}`);
  document.body.classList.add(`page-scene-${scene.type}`);
  if (scene.result?.length > 110) stage.classList.add("long-copy");
  // 장면 이미지를 넣어도 텍스트와 hotspot 좌표는 동일한 정사각형 stage를 기준으로 한다.
  // 이미지에는 글자/선택지 이름을 넣지 않고, 아래 HTML 오버레이를 유지한다.
  if (scene.image && /^assets\/scenes\/[\w/.-]+\.(png|jpe?g|webp|svg)$/i.test(scene.image) && !scene.image.includes("..")) {
    const background = element("img", "scene-image");
    background.alt = "";
    prepareImage(background, scene.image, () => stage.classList.add("has-image"));
    stage.append(background);
  }
  if (["choice", "medicine-choice"].includes(scene.type)) {
    stage.append(element("div", "central-panel"));
    heading(scene.title);
    if (scene.type === "medicine-choice") {
      medicineDecoration();
    }
    for (const spot of scene.hotspots) {
      const card = element("div", scene.type === "choice" ? "choice-card" : "medicine-card");
      position(card, spot);
      card.setAttribute("aria-hidden", "true");
      if (scene.type === "medicine-choice") card.append(element("span", "card-ordinal", spot.ordinal));
      card.append(element("span", "card-label", spot.label));
      if (scene.type === "choice") {
      const cost = element("span", "card-cost");
      cost.append(element("span", "coin-icon", "C"), element("span", "coin-value", String(spot.coin)));
      card.append(cost);
      card.append(element("span", "card-caption", spot.caption));
      }
      stage.append(card);
      const hotspot = element("a", "hotspot");
      position(hotspot, spot);
      hotspot.href = spot.href;
      hotspot.setAttribute("aria-label", scene.type === "choice" ? `${spot.label}, 코인 ${spot.coin}` : spot.label);
      stage.append(hotspot);
    }
    stage.append(element("p", "scene-guidance", scene.guidance));
  } else if (scene.type === "medicine-result") {
    document.body.classList.add("medicine-result-page");
    heading(scene.title);
  } else if (["hospital", "wait"].includes(scene.type)) {
    stage.append(element("div", "central-panel"));
    const illustration = element("img", "hospital-illustration");
    illustration.alt = "";
    prepareImage(illustration, scene.type === "hospital" ? "assets/scenes/hospital-care-v1.png" : "assets/scenes/wait-v1.png");
    stage.append(illustration);
    heading(scene.title);
    const effects = element("p", "hospital-effects");
    for (const effect of scene.effects) {
      const row = element("span", "hospital-effect");
      row.setAttribute("aria-label", effect);
      if (effect.startsWith("♥")) {
        const heart = element("span", "heart-icon", "♥");
        heart.setAttribute("aria-hidden", "true");
        const label = element("span", "effect-label", effect.slice(1).trim());
        label.setAttribute("aria-hidden", "true");
        row.append(heart, label);
      } else row.textContent = effect;
      effects.append(row);
    }
    const copy = element("p", "hospital-copy");
    if (["hospital", "wait"].includes(scene.type)) {
      copy.setAttribute("aria-label", scene.result);
      for (const line of scene.lines) {
        const row = element("span", "hospital-line", line);
        row.setAttribute("aria-hidden", "true");
        copy.append(row);
      }
    } else copy.textContent = scene.result;
    stage.append(effects, copy);
  } else {
    if (["healthroom", "friend"].includes(scene.type)) {
    const art = element("div", "result-art");
    art.setAttribute("aria-hidden", "true");
    art.append(element("span", "figure figure-one"), element("span", "figure figure-two"));
    stage.append(art);
    }
    heading(scene.title);
    const panel = element("div", "speech-panel");
    // 원문이 로컬 데이터에 없으면 임의의 안내·조언 문구를 대신 출력하지 않는다.
    if (scene.result !== null) panel.append(element("p", "result-copy", scene.result));
    // 원본에서 확인한 효과 문구만 표시한다. 없는 효과를 숫자로 보충하지 않는다.
    if (scene.effects.length) panel.append(element("p", "token-copy", scene.effects.join("\n")));
    stage.append(panel);
  }

  const fontsReady = document.fonts?.ready || Promise.resolve();
  Promise.all([...pendingImages, fontsReady]).then(revealStage);
})();
