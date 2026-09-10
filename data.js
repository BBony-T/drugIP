/* GAME_DATA.md에서 변환. 수정 후 node tools/build-data.cjs 실행. */
// 화면에 없는 효과는 null이며, 표시하지 않는다. 원본 PNG는 출처 식별용이다.
window.PLAY_DATA = {
  "A": {
    "code": "A",
    "number": 1,
    "title": "머리가 지끈거리고 어지럽다",
    "text": "아침에 일어나서부터 머리가 지끈거리고 어지럽다.\n학교에 와서도 나아지지 않고 점점 심해지는 느낌이다.\n어제는 잠을 충분히 잤지만 시험 기간이라 커피를 여러 잔 마셨다.\n토할 것 같지는 않지만 빛이 조금 부담스럽다.",
    "medicineOptions": [
      "머리 아프니깐 해열진통제",
      "어지러우니깐 멀미약"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.A.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_2.A.png",
        "heart": 1,
        "coin": null,
        "effectText": "하트 ♥ +1"
      }
    ],
    "hospitalResult": {
      "text": "일반적인 두통으로 보이며 특별한 이상은 발견되지 않았다.\n생활습관 조절과 필요 시 약물 사용으로\n충분히 조절 가능한 상태다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "일반적인 두통으로 보이며 특별한 이상은 발견되지 않았다.",
        "생활습관 조절과 필요 시 약물 사용으로",
        "충분히 조절 가능한 상태다."
      ]
    },
    "waitResult": {
      "text": "증상이 쉽게 나아지지 않았고,\n집중력이 더 떨어지는 느낌이 들었다.",
      "heart": -1,
      "coin": null,
      "effects": [
        "♥ 하트 -1"
      ],
      "lines": [
        "증상이 쉽게 나아지지 않았고,",
        "집중력이 더 떨어지는 느낌이 들었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.A.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=A&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=1"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=A&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.A.png",
        "guidance": null,
        "result": "신경학적 이상 징후는 보이지 않아요.\n구토, 의식 변화, 시야 이상은 없고\n최근 수면과 카페인 섭취가 영향을 준 것 같아요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.A.png",
        "guidance": null,
        "result": "어제 머리가 아파서\n아빠 치과에서 준 약이 있어서 먹었더니\n괜찮아지던데?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.A.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "머리 아프니깐 해열진통제",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=A&p=7"
          },
          {
            "label": "어지러우니깐 멀미약",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=A&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.A.png",
        "guidance": null,
        "result": "일반적인 두통으로 보이며 특별한 이상은 발견되지 않았다.\n생활습관 조절과 필요 시 약물 사용으로\n충분히 조절 가능한 상태다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "일반적인 두통으로 보이며 특별한 이상은 발견되지 않았다.",
          "생활습관 조절과 필요 시 약물 사용으로",
          "충분히 조절 가능한 상태다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.A.png",
        "guidance": null,
        "result": "증상이 쉽게 나아지지 않았고,\n집중력이 더 떨어지는 느낌이 들었다.",
        "heart": -1,
        "coin": null,
        "effects": [
          "♥ 하트 -1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "증상이 쉽게 나아지지 않았고,",
          "집중력이 더 떨어지는 느낌이 들었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_1.A.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ +1",
        "source": "medicine_2.A.png",
        "guidance": null,
        "result": null,
        "heart": 1,
        "coin": null,
        "effects": [
          "하트 ♥ +1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "B": {
    "code": "B",
    "number": 2,
    "title": "갑자기 어지럽고 눈앞이 핑 돈다",
    "text": "자리에서 일어설 때 갑자기 눈앞이 핑 돌며 어지럽다.\n잠깐 앉아 있으면 괜찮아진다.\n아침을 거르고 등교했고, 물을 거의 마시지 않았다.\n머리가 아프지는 않다.",
    "medicineOptions": [
      "어지러운 것도 두통? 해열진통제",
      "어지러우니깐 멀미약"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.B..png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_2.B..png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "검사 결과 심각한 이상은 없었다.\n일시적인 혈압 변화나 피로로도\n이런 증상이 나타날 수 있다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "검사 결과 심각한 이상은 없었다.",
        "일시적인 혈압 변화나 피로로도",
        "이런 증상이 나타날 수 있다."
      ]
    },
    "waitResult": {
      "text": "잠시 앉아 쉬자 증상이 서서히 가라앉았다.\n충분한 휴식이 도움이 되었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "잠시 앉아 쉬자 증상이 서서히 가라앉았다.",
        "충분한 휴식이 도움이 되었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.B.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=B&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=2"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=B&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.B.png",
        "guidance": null,
        "result": "갑작스러운 체위 변화나 공복 상태에서 일시적으로 나타날 수 있어요. 잠시 앉아서 쉬어보고 경과를 지켜봅시다.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.B.png",
        "guidance": null,
        "result": "그거 유전이야. 우리 엄마도 그랬대.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.B.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "어지러운 것도 두통? 해열진통제",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=B&p=7"
          },
          {
            "label": "어지러우니깐 멀미약",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=B&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.B.png",
        "guidance": null,
        "result": "검사 결과 심각한 이상은 없었다.\n일시적인 혈압 변화나 피로로도\n이런 증상이 나타날 수 있다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "검사 결과 심각한 이상은 없었다.",
          "일시적인 혈압 변화나 피로로도",
          "이런 증상이 나타날 수 있다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.B.png",
        "guidance": null,
        "result": "잠시 앉아 쉬자 증상이 서서히 가라앉았다.\n충분한 휴식이 도움이 되었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "잠시 앉아 쉬자 증상이 서서히 가라앉았다.",
          "충분한 휴식이 도움이 되었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_1.B..png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.B..png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "C": {
    "code": "C",
    "number": 3,
    "title": "배가 쓰리고 울렁거린다",
    "text": "아침부터 속이 쓰리고 울렁거린다.\n밥은 거의 못 먹고 등교했고, 빈속에 에너지음료를 마셨다.\n배를 누르면 아프고 신물이 올라오는 느낌이 있다.\n열은 없고 설사는 하지 않는다.",
    "medicineOptions": [
      "알마겔, 겔포스 (제산제)",
      "아세트아미노펜(진통제: 타이X놀)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.C..png",
        "heart": 1,
        "coin": null,
        "effectText": "하트 ♥ +1"
      },
      {
        "source": "medicine_2.C..png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "위 자극과 관련된 증상으로 보이며,\n식습관과 자극 요인 조절이 중요하다는 설명을 들었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "위 자극과 관련된 증상으로 보이며,",
        "식습관과 자극 요인 조절이 중요하다는 설명을 들었다."
      ]
    },
    "waitResult": {
      "text": "공복과 자극 요인으로 증상이 쉽게 가라앉지 않았다.\n불편감이 계속 느껴졌다.",
      "heart": -1,
      "coin": null,
      "effects": [
        "♥ 하트 -1"
      ],
      "lines": [
        "공복과 자극 요인으로 증상이 쉽게 가라앉지 않았다.",
        "불편감이 계속 느껴졌다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.C.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=C&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=3"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=C&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.C.png",
        "guidance": null,
        "result": "속쓰림과 메스꺼움은 위산 과다나 자극성 음식과 관련이 많아요. 진통제는 위를 더 자극할 수 있고 통증을 가려 염증이나 악화 신호를 늦게 알아차릴 수 있어요. 증상의 원인을 먼저 생각해볼 필요가 있어요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.C.png",
        "guidance": null,
        "result": "나는 시험기간 때 배가 아프더라.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.C.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "알마겔, 겔포스 (제산제)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=C&p=7"
          },
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=C&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.C.png",
        "guidance": null,
        "result": "위 자극과 관련된 증상으로 보이며,\n식습관과 자극 요인 조절이 중요하다는 설명을 들었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "위 자극과 관련된 증상으로 보이며,",
          "식습관과 자극 요인 조절이 중요하다는 설명을 들었다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.C.png",
        "guidance": null,
        "result": "공복과 자극 요인으로 증상이 쉽게 가라앉지 않았다.\n불편감이 계속 느껴졌다.",
        "heart": -1,
        "coin": null,
        "effects": [
          "♥ 하트 -1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "공복과 자극 요인으로 증상이 쉽게 가라앉지 않았다.",
          "불편감이 계속 느껴졌다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ +1",
        "source": "medicine_1.C..png",
        "guidance": null,
        "result": null,
        "heart": 1,
        "coin": null,
        "effects": [
          "하트 ♥ +1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.C..png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "D": {
    "code": "D",
    "number": 4,
    "title": "설사를 하고 배가 아프다",
    "text": "아침부터 배가 아프고 설사를 여러 번 했다.\n화장실을 다녀오면 잠깐 괜찮아졌다가 다시 아프다.\n속이 더부룩하고 힘이 빠지는 느낌이 든다.\n어제 늦게 길거리 음식을 먹었다.",
    "medicineOptions": [
      "아세트아미노펜(진통제: 타이X놀)",
      "포타겔, 스타빅, 스멕타(지사제)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.D..png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_2.D..png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "감염 여부와 탈수 상태를 확인했다.\n증상이 심해질 경우 추가 치료가 필요할 수 있다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "감염 여부와 탈수 상태를 확인했다.",
        "증상이 심해질 경우 추가 치료가 필요할 수 있다."
      ]
    },
    "waitResult": {
      "text": "장운동이 서서히 안정되며 증상이 완화되었다.\n무리한 대처는 하지 않았다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "장운동이 서서히 안정되며 증상이 완화되었다.",
        "무리한 대처는 하지 않았다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.D.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=D&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=4"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=D&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.D.png",
        "guidance": null,
        "result": "급성 설사는 몸이 원인 물질을 배출하는 과정일 수 있어요. 세균 감염이 의심되는 경우, 지사제를 사용하면 배출이 억제되어 오히려 증상이 악화될 수 있어요. 이럴 때는 수분 섭취와 휴식이 더 중요해요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.D.png",
        "guidance": null,
        "result": "야, 무조건 밖으로 내보내야해\n너 어제 굴 먹었지?\n나도 저번에 그래서\n이틀동안 토랑 설사만 해서 학교를 못나갔다니깐.\n계속 화장실에 있어서 ㅋㅋ",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.D.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=D&p=7"
          },
          {
            "label": "포타겔, 스타빅, 스멕타(지사제)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=D&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.D.png",
        "guidance": null,
        "result": "감염 여부와 탈수 상태를 확인했다.\n증상이 심해질 경우 추가 치료가 필요할 수 있다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "감염 여부와 탈수 상태를 확인했다.",
          "증상이 심해질 경우 추가 치료가 필요할 수 있다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.D.png",
        "guidance": null,
        "result": "장운동이 서서히 안정되며 증상이 완화되었다.\n무리한 대처는 하지 않았다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "장운동이 서서히 안정되며 증상이 완화되었다.",
          "무리한 대처는 하지 않았다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_1.D..png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.D..png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "E": {
    "code": "E",
    "number": 5,
    "title": "아랫배가 아프고 불편하다",
    "text": "아랫배가 콕콕 쑤시는 느낌이 계속된다.\n쉬면 조금 나아지는 것 같다가도 움직이면 다시 아프다.\n비슷한 증상을 예전에도 겪은 적이 있다.\n수업에는 참여할 수는 있지만 집중이 잘 안 된다.",
    "medicineOptions": [
      "위장관기능조절제",
      "이부프로펜(소염진통제)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.E.png",
        "heart": 1,
        "coin": null,
        "effectText": "하트 ♥ +1"
      },
      {
        "source": "medicine_2.E.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "큰 이상은 없었으나,\n증상이 지속되면 다시 내원하라는 안내를 받았다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "큰 이상은 없었으나,",
        "증상이 지속되면 다시 내원하라는 안내를 받았다."
      ]
    },
    "waitResult": {
      "text": "시간이 지나며 증상이 조금 완화되었다.\n상태를 더 지켜보기로 했다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "시간이 지나며 증상이 조금 완화되었다.",
        "상태를 더 지켜보기로 했다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.E.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=E&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=5"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=E&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.E.png",
        "guidance": null,
        "result": "경미한 복통은 장운동이나 긴장으로도 생길 수 있어요. 통증 양상과 지속 여부를 조금 더 관찰해요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.E.png",
        "guidance": null,
        "result": "똥은 쌌냐?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.E.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "위장관기능조절제",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=E&p=7"
          },
          {
            "label": "이부프로펜(소염진통제)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=E&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.E.png",
        "guidance": null,
        "result": "큰 이상은 없었으나,\n증상이 지속되면 다시 내원하라는 안내를 받았다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "큰 이상은 없었으나,",
          "증상이 지속되면 다시 내원하라는 안내를 받았다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.E.png",
        "guidance": null,
        "result": "시간이 지나며 증상이 조금 완화되었다.\n상태를 더 지켜보기로 했다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "시간이 지나며 증상이 조금 완화되었다.",
          "상태를 더 지켜보기로 했다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ +1",
        "source": "medicine_1.E.png",
        "guidance": null,
        "result": null,
        "heart": 1,
        "coin": null,
        "effects": [
          "하트 ♥ +1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.E.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "F": {
    "code": "F",
    "number": 6,
    "title": "손목 관절이 계속 아프다",
    "text": "몇 주 전부터 손목이 계속 아프다.\n최근 무거운 물건을 자주 들었고, 스마트폰 사용 시간이 길었다.\n붓거나 열감은 없지만 특정 동작을 하면 더 아프다.\n휴식을 취해도 크게 나아지지 않는다.",
    "medicineOptions": [
      "바르는 파스(멘소래담)",
      "이부프로펜(소염진통제)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.F.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      },
      {
        "source": "medicine_2.F.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "반복 사용으로 인한 염증 가능성이 설명되었다.\n적절한 휴식과 치료가 필요하다는 소견을 들었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "반복 사용으로 인한 염증 가능성이 설명되었다.",
        "적절한 휴식과 치료가 필요하다는 소견을 들었다."
      ]
    },
    "waitResult": {
      "text": "통증이 반복되며 점점 불편해졌다.\n사용을 줄이지 않아 회복이 더뎠다.",
      "heart": -2,
      "coin": null,
      "effects": [
        "♥ 하트 -2"
      ],
      "lines": [
        "통증이 반복되며 점점 불편해졌다.",
        "사용을 줄이지 않아 회복이 더뎠다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.F.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=F&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=6"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=F&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.F.png",
        "guidance": null,
        "result": "통증이 몇 주 이상 지속된다면 단순 근육통보다는 구조적 문제를 확인할 필요가 있어요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.F.png",
        "guidance": null,
        "result": "어제 무거운 거 들었어?\n시간이 약이야",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.F.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "바르는 파스(멘소래담)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=F&p=7"
          },
          {
            "label": "이부프로펜(소염진통제)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=F&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.F.png",
        "guidance": null,
        "result": "반복 사용으로 인한 염증 가능성이 설명되었다.\n적절한 휴식과 치료가 필요하다는 소견을 들었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "반복 사용으로 인한 염증 가능성이 설명되었다.",
          "적절한 휴식과 치료가 필요하다는 소견을 들었다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.F.png",
        "guidance": null,
        "result": "통증이 반복되며 점점 불편해졌다.\n사용을 줄이지 않아 회복이 더뎠다.",
        "heart": -2,
        "coin": null,
        "effects": [
          "♥ 하트 -2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "통증이 반복되며 점점 불편해졌다.",
          "사용을 줄이지 않아 회복이 더뎠다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_1.F.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.F.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "G": {
    "code": "G",
    "number": 7,
    "title": "발목을 삐끗한 뒤 계속 아프다",
    "text": "계단에서 발목을 삐끗한 뒤부터 걷기 불편하다.\n붓기는 약간 있고 누르면 아프다.\n움직일 수는 있지만 뛰기는 어렵다.\n다친 뒤 시간이 조금 지났다.",
    "medicineOptions": [
      "아세트아미노펜(진통제: 타이X놀)",
      "바르는 파스(멘소래담)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.G.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      },
      {
        "source": "medicine_2.G.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      }
    ],
    "hospitalResult": {
      "text": "염좌로 진단되었고,\n안정과 휴식이 회복에 중요하다는 설명을 들었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "염좌로 진단되었고,",
        "안정과 휴식이 회복에 중요하다는 설명을 들었다."
      ]
    },
    "waitResult": {
      "text": "움직임을 줄이자 통증이 조금씩 가라앉았다.\n충분한 휴식이 도움이 되었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "움직임을 줄이자 통증이 조금씩 가라앉았다.",
        "충분한 휴식이 도움이 되었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.G.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=G&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=7"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=G&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.G.png",
        "guidance": null,
        "result": "붓기와 통증이 줄어들고 있다면 휴식과 보호만으로도 회복될 수 있어요. 무리한 사용은 피하세요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.G.png",
        "guidance": null,
        "result": "나 발목 보호대 있는데.\n빌려줄까?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.G.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=G&p=7"
          },
          {
            "label": "바르는 파스(멘소래담)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=G&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.G.png",
        "guidance": null,
        "result": "염좌로 진단되었고,\n안정과 휴식이 회복에 중요하다는 설명을 들었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "염좌로 진단되었고,",
          "안정과 휴식이 회복에 중요하다는 설명을 들었다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.G.png",
        "guidance": null,
        "result": "움직임을 줄이자 통증이 조금씩 가라앉았다.\n충분한 휴식이 도움이 되었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "움직임을 줄이자 통증이 조금씩 가라앉았다.",
          "충분한 휴식이 도움이 되었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_1.G.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_2.G.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "H": {
    "code": "H",
    "number": 8,
    "title": "열이 나고 몸살 기운이 있다",
    "text": "몸이 으슬으슬하고 열이 나는 것 같다.\n어제 해열제를 한 번 먹고 잠들었는데 오늘도 몸이 무겁다.\n목도 약간 아프고 온몸이 쑤신다.\n체온은 정확히 재보지 않았다.",
    "medicineOptions": [
      "아세트아미노펜(진통제: 타이X놀)",
      "종합감기약"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.H.png",
        "heart": 1,
        "coin": null,
        "effectText": "하트 ♥ +1"
      },
      {
        "source": "medicine_2.H.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "감염 여부를 확인하고,\n해열과 휴식을 병행하라는 안내를 받았다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "감염 여부를 확인하고,",
        "해열과 휴식을 병행하라는 안내를 받았다."
      ]
    },
    "waitResult": {
      "text": "열과 몸살이 더 심해지는 느낌이 들었다.\n휴식만으로는 부족했다.",
      "heart": -2,
      "coin": null,
      "effects": [
        "♥ 하트 -2"
      ],
      "lines": [
        "열과 몸살이 더 심해지는 느낌이 들었다.",
        "휴식만으로는 부족했다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.H.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=H&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=8"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=H&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.H.png",
        "guidance": null,
        "result": "발열은 몸이 싸우고 있다는 신호예요.\n증상 완화를 위한 약물 사용이 도움이 될 수 있어요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.H.png",
        "guidance": null,
        "result": "오늘 학교 수업 들을 수 없겠는데?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.H.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=H&p=7"
          },
          {
            "label": "종합감기약",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=H&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.H.png",
        "guidance": null,
        "result": "감염 여부를 확인하고,\n해열과 휴식을 병행하라는 안내를 받았다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "감염 여부를 확인하고,",
          "해열과 휴식을 병행하라는 안내를 받았다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.H.png",
        "guidance": null,
        "result": "열과 몸살이 더 심해지는 느낌이 들었다.\n휴식만으로는 부족했다.",
        "heart": -2,
        "coin": null,
        "effects": [
          "♥ 하트 -2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "열과 몸살이 더 심해지는 느낌이 들었다.",
          "휴식만으로는 부족했다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ +1",
        "source": "medicine_1.H.png",
        "guidance": null,
        "result": null,
        "heart": 1,
        "coin": null,
        "effects": [
          "하트 ♥ +1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.H.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "I": {
    "code": "I",
    "number": 9,
    "title": "목이 아프고 기침이 계속 난다",
    "text": "며칠 전부터 목이 따끔거리고 기침이 계속 나온다.\n열은 거의 없고 콧물도 심하지 않다.\n말을 많이 하면 목이 더 아프다.\n주변에 감기 증상이 있는 사람이 있다.",
    "medicineOptions": [
      "종합감기약",
      "아세트아미노펜(진통제:타이X놀)",
      "목감기약"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.I.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_2.I.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_3.I.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      }
    ],
    "hospitalResult": {
      "text": "상기도 감염 가능성이 설명되었다.\n증상 경과를 지켜보며 관리가 필요하다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "상기도 감염 가능성이 설명되었다.",
        "증상 경과를 지켜보며 관리가 필요하다."
      ]
    },
    "waitResult": {
      "text": "충분히 쉬자 증상이 점차 완화되었다.\n심해지지는 않았다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "충분히 쉬자 증상이 점차 완화되었다.",
        "심해지지는 않았다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.I.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=I&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=9"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=I&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.I.png",
        "guidance": null,
        "result": "대부분 바이러스성 증상은 시간이 지나면 호전돼요.\n증상 완화와 휴식이 중요해요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.I.png",
        "guidance": null,
        "result": "제발 좀 마스크...\n나한테 가까이 오지마",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.I.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "종합감기약",
            "ordinal": "선택 1",
            "x": 20,
            "y": 41.2,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=I&p=7"
          },
          {
            "label": "아세트아미노펜(진통제:타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 50,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=I&p=8"
          },
          {
            "label": "목감기약",
            "ordinal": "선택 3",
            "x": 20,
            "y": 58.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=I&p=9"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.I.png",
        "guidance": null,
        "result": "상기도 감염 가능성이 설명되었다.\n증상 경과를 지켜보며 관리가 필요하다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "상기도 감염 가능성이 설명되었다.",
          "증상 경과를 지켜보며 관리가 필요하다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.I.png",
        "guidance": null,
        "result": "충분히 쉬자 증상이 점차 완화되었다.\n심해지지는 않았다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "충분히 쉬자 증상이 점차 완화되었다.",
          "심해지지는 않았다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_1.I.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.I.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "9": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_3.I.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "J": {
    "code": "J",
    "number": 10,
    "title": "피부가 가렵고 두드러기가 났다",
    "text": "팔과 다리에 빨갛게 두드러기가 올라오고 가렵다.\n긁으면 더 심해지는 느낌이 든다.\n어제 처음 먹어본 음식을 먹었다.\n숨이 차거나 어지럽지는 않다.",
    "medicineOptions": [
      "항히스타민제(지르텍, 알러텍)",
      "아세트아미노펜(진통제: 타이X놀)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.J.png",
        "heart": 1,
        "coin": null,
        "effectText": "하트 ♥ +1"
      },
      {
        "source": "medicine_2.J.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "알레르기 반응으로 보이며,\n원인 물질 회피와 증상 조절이 중요하다는 설명을 들었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "알레르기 반응으로 보이며,",
        "원인 물질 회피와 증상 조절이 중요하다는 설명을 들었다."
      ]
    },
    "waitResult": {
      "text": "가려움이 점점 심해졌다.\n불편감이 계속 느껴졌다.",
      "heart": -2,
      "coin": null,
      "effects": [
        "♥ 하트 -2"
      ],
      "lines": [
        "가려움이 점점 심해졌다.",
        "불편감이 계속 느껴졌다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.J.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=J&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=10"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=J&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.J.png",
        "guidance": null,
        "result": "알레르기 반응은 원인 제거와 증상 조절이 중요해요.\n방치하면 더 심해질 수 있어요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.J.png",
        "guidance": null,
        "result": "그렇게 계속 긁으면 안될 것 같은데?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.J.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "항히스타민제(지르텍, 알러텍)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=J&p=7"
          },
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=J&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.J.png",
        "guidance": null,
        "result": "알레르기 반응으로 보이며,\n원인 물질 회피와 증상 조절이 중요하다는 설명을 들었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "알레르기 반응으로 보이며,",
          "원인 물질 회피와 증상 조절이 중요하다는 설명을 들었다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.J.png",
        "guidance": null,
        "result": "가려움이 점점 심해졌다.\n불편감이 계속 느껴졌다.",
        "heart": -2,
        "coin": null,
        "effects": [
          "♥ 하트 -2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "가려움이 점점 심해졌다.",
          "불편감이 계속 느껴졌다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ +1",
        "source": "medicine_1.J.png",
        "guidance": null,
        "result": null,
        "heart": 1,
        "coin": null,
        "effects": [
          "하트 ♥ +1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.J.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "K": {
    "code": "K",
    "number": 11,
    "title": "두드러기와 함께 입술이 붓는다",
    "text": "갑자기 입술이 붓고 얼굴이 간질간질하다.\n두드러기도 함께 나타났다.\n말하기가 약간 불편하고 불안한 느낌이 든다.\n이런 증상은 처음이다.",
    "medicineOptions": [
      "항히스타민제(지르텍, 알러텍)",
      "아세트아미노펜(진통제: 타이X놀)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.K.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      },
      {
        "source": "medicine_2.K.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "위험한 알레르기 반응으로 판단되었다.\n빠른 대응으로 증상이 안정되었다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "위험한 알레르기 반응으로 판단되었다.",
        "빠른 대응으로 증상이 안정되었다."
      ]
    },
    "waitResult": {
      "text": "증상이 빠르게 악화되었다.\n위험한 상황으로 이어질 수 있었다.",
      "heart": -3,
      "coin": null,
      "effects": [
        "♥ 하트 -3"
      ],
      "lines": [
        "증상이 빠르게 악화되었다.",
        "위험한 상황으로 이어질 수 있었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.K.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=K&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=11"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=K&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.K.png",
        "guidance": null,
        "result": "입술이나 얼굴이 붓는 증상은 호흡기 문제로 이어질 수 있어요. 즉시 전문 진료가 필요해요.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.K.png",
        "guidance": null,
        "result": "너 얼굴이 점점 붓는데?\n눈도 부어가는 것 같은데? 괜찮아?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.K.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "항히스타민제(지르텍, 알러텍)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=K&p=7"
          },
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=K&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.K.png",
        "guidance": null,
        "result": "위험한 알레르기 반응으로 판단되었다.\n빠른 대응으로 증상이 안정되었다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "위험한 알레르기 반응으로 판단되었다.",
          "빠른 대응으로 증상이 안정되었다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.K.png",
        "guidance": null,
        "result": "증상이 빠르게 악화되었다.\n위험한 상황으로 이어질 수 있었다.",
        "heart": -3,
        "coin": null,
        "effects": [
          "♥ 하트 -3"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "증상이 빠르게 악화되었다.",
          "위험한 상황으로 이어질 수 있었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_1.K.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.K.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "L": {
    "code": "L",
    "number": 12,
    "title": "숨이 차고 가슴이 답답하다",
    "text": "가만히 있어도 숨이 답답하고 깊게 쉬기 힘들다.\n가슴이 꽉 막힌 느낌이 들고 불안하다.\n조금만 움직여도 숨이 찬다.\n이런 증상은 처음이다.",
    "medicineOptions": [
      "종합감기",
      "아세트아미노펜(진통제: 타이X놀)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.L.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      },
      {
        "source": "medicine_2.L.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "심각한 원인을 배제하기 위한 검사가 필요했다.\n빠른 판단이 중요했던 상황이다.",
      "heart": 2,
      "coin": null,
      "effects": [
        "♥ 하트 +2"
      ],
      "lines": [
        "심각한 원인을 배제하기 위한 검사가 필요했다.",
        "빠른 판단이 중요했던 상황이다."
      ]
    },
    "waitResult": {
      "text": "숨쉬기가 점점 더 힘들어졌다.\n매우 위험한 선택이었다.",
      "heart": -3,
      "coin": null,
      "effects": [
        "♥ 하트 -3"
      ],
      "lines": [
        "숨쉬기가 점점 더 힘들어졌다.",
        "매우 위험한 선택이었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.L.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=L&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=12"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=L&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.L.png",
        "guidance": null,
        "result": "호흡곤란이나 흉부 불편감은 심각한 문제의 신호일 수 있어요. 보건실에서 해결할 수 있는 범위를 넘어섭니다.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.L.png",
        "guidance": null,
        "result": "괜찮아? 보건쌤 불러올까?",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.L.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "종합감기",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=L&p=7"
          },
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=L&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.L.png",
        "guidance": null,
        "result": "심각한 원인을 배제하기 위한 검사가 필요했다.\n빠른 판단이 중요했던 상황이다.",
        "heart": 2,
        "coin": null,
        "effects": [
          "♥ 하트 +2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "심각한 원인을 배제하기 위한 검사가 필요했다.",
          "빠른 판단이 중요했던 상황이다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.L.png",
        "guidance": null,
        "result": "숨쉬기가 점점 더 힘들어졌다.\n매우 위험한 선택이었다.",
        "heart": -3,
        "coin": null,
        "effects": [
          "♥ 하트 -3"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "숨쉬기가 점점 더 힘들어졌다.",
          "매우 위험한 선택이었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_1.L.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.L.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "M": {
    "code": "M",
    "number": 13,
    "title": "갑작스럽고 매우 심한 두통",
    "text": "갑자기 머리가 매우 심하게 아프다.\n지금까지 겪어본 두통과는 느낌이 다르다.\n움직이기 힘들 정도로 통증이 강하다.\n메스꺼움이 있고 평소와 달리 불안한 느낌이 든다.",
    "medicineOptions": [
      "나프록센(편두통약)",
      "아세트아미노펜(진통제: 타이X놀)"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.M.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      },
      {
        "source": "medicine_2.M.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      }
    ],
    "hospitalResult": {
      "text": "일반적인 두통과 다른 양상으로 판단되었다.\n정밀 검사를 통해 위험한 원인을 확인했다.",
      "heart": 2,
      "coin": null,
      "effects": [
        "♥ 하트 +2"
      ],
      "lines": [
        "일반적인 두통과 다른 양상으로 판단되었다.",
        "정밀 검사를 통해 위험한 원인을 확인했다."
      ]
    },
    "waitResult": {
      "text": "통증이 줄지 않았고 불안감이 커졌다.\n위험 신호를 놓칠 수 있는 상황이었다.",
      "heart": -3,
      "coin": null,
      "effects": [
        "♥ 하트 -3"
      ],
      "lines": [
        "통증이 줄지 않았고 불안감이 커졌다.",
        "위험 신호를 놓칠 수 있는 상황이었다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.M.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=M&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=13"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=M&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.M.png",
        "guidance": null,
        "result": "평소와 다른 양상의 갑작스러운 두통은 반드시 원인을 확인해야 해요. 진통제로 넘기면 안됩니다.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.M.png",
        "guidance": null,
        "result": "나 저번에 머리가 계속 아파서\n병원에 가서 MRI 찍었는데 이상 없다고 하더라.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.M.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "나프록센(편두통약)",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=M&p=7"
          },
          {
            "label": "아세트아미노펜(진통제: 타이X놀)",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=M&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.M.png",
        "guidance": null,
        "result": "일반적인 두통과 다른 양상으로 판단되었다.\n정밀 검사를 통해 위험한 원인을 확인했다.",
        "heart": 2,
        "coin": null,
        "effects": [
          "♥ 하트 +2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "일반적인 두통과 다른 양상으로 판단되었다.",
          "정밀 검사를 통해 위험한 원인을 확인했다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.M.png",
        "guidance": null,
        "result": "통증이 줄지 않았고 불안감이 커졌다.\n위험 신호를 놓칠 수 있는 상황이었다.",
        "heart": -3,
        "coin": null,
        "effects": [
          "♥ 하트 -3"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "통증이 줄지 않았고 불안감이 커졌다.",
          "위험 신호를 놓칠 수 있는 상황이었다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_1.M.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_2.M.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      }
    }
  },
  "N": {
    "code": "N",
    "number": 14,
    "title": "눈에 이물질이 들어간 것 같다",
    "text": "갑자기 한쪽 눈이 따갑고 이물감이 느껴진다.\n눈물이 나고 깜빡일 때 불편하다.\n시야가 심하게 흐려지지는 않았다.\n통증은 있지만 참을 수는 있는 정도다.",
    "medicineOptions": [
      "일단 촉촉하게 인공눈물",
      "충혈됐으니 알러지성 결막염 안약"
    ],
    "medicineResults": [
      {
        "source": "medicine_1.N.png",
        "heart": 0,
        "coin": null,
        "effectText": "하트 ♥ 유지"
      },
      {
        "source": "medicine_2.N.png",
        "heart": -1,
        "coin": null,
        "effectText": "하트 ♥ -1"
      }
    ],
    "hospitalResult": {
      "text": "눈에 들어간 이물질은 겉으로 보이지 않아도 남아 있을 수 있다. 병원에서는 전문 장비로 이물 여부와 각막 손상을 확인했다. 눈은 매우 예민한 부위이기 때문에 정확한 확인이 안전하다.",
      "heart": 1,
      "coin": null,
      "effects": [
        "♥ 하트 +1"
      ],
      "lines": [
        "눈에 들어간 이물질은 겉으로 보이지 않아도 남아 있을 수",
        "있다. 병원에서는 전문 장비로 이물 여부와 각막 손상을 확",
        "인했다. 눈은 매우 예민한 부위이기 때문에 정확한 확인이",
        "안전하다."
      ]
    },
    "waitResult": {
      "text": "시간이 지나도 이물감이 계속 느껴졌다.\n이물이 남아 있을 경우 각막에 상처를 남길 수 있다.\n불편함과 걱정이 점점 커졌다.",
      "heart": -2,
      "coin": null,
      "effects": [
        "♥ 하트 -2"
      ],
      "lines": [
        "시간이 지나도 이물감이 계속 느껴졌다.",
        "이물이 남아 있을 경우 각막에 상처를 남길 수 있다.",
        "불편함과 걱정이 점점 커졌다."
      ]
    },
    "scenes": {
      "1": {
        "type": "choice",
        "title": "정보를 수집하자",
        "source": "info_choice.N.png",
        "guidance": "셋 중 하나만 선택해 정보를 확인하세요.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "보건실",
            "caption": "보건선생님의\n설명을 듣는다",
            "coin": -2,
            "x": 11.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=N&p=2"
          },
          {
            "label": "인터넷 검색",
            "caption": "정보의 바다\n직접 검색해보자",
            "coin": -1,
            "x": 38,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "search.html?s=14"
          },
          {
            "label": "단짝친구",
            "caption": "믿거나 말거나\n친구의 경험담",
            "coin": 0,
            "x": 64.5,
            "y": 41,
            "width": 24,
            "height": 24,
            "href": "play.html?c=N&p=3"
          }
        ]
      },
      "2": {
        "type": "healthroom",
        "title": "보건실을 방문했다.",
        "source": "healthroom.N.png",
        "guidance": null,
        "result": "눈에 들어간 이물질은 각막 표면에 미세한 상처를 남길 수 있어요. 눈을 비비거나 임의로 제거를 시도하면 각막 손상이 악화될 수 있어요. 이물 여부는 겉으로 보이지 않아도 남아 있을 수 있습니다. 눈은 예민한 기관이므로 전문 장비로 확인하는 것이 안전합니다.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/healthroom-v3.png",
        "hotspots": []
      },
      "3": {
        "type": "friend",
        "title": "믿거나 말거나 친구 조언",
        "source": "friend.N.png",
        "guidance": null,
        "result": "나 미술시간에 종이조각이 눈에 들어가서\n빼는데 엄청 고생했잖아 ㅋㅋ\n빼도 계속 아파서 안약 한동안 넣었어.",
        "heart": null,
        "coin": null,
        "effects": [],
        "image": "assets/scenes/friend-v2.png",
        "hotspots": []
      },
      "4": {
        "type": "medicine-choice",
        "title": "약을 사용해보기로 했다.",
        "source": "medicine_choice.N.png",
        "guidance": "이 증상에 사용할 수 있는 약을 선택하세요.\n선택지에 따라 결과가 달라질 수 있습니다.",
        "result": null,
        "heart": null,
        "coin": null,
        "effects": [],
        "image": null,
        "hotspots": [
          {
            "label": "일단 촉촉하게 인공눈물",
            "ordinal": "선택 1",
            "x": 20,
            "y": 45.1,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=N&p=7"
          },
          {
            "label": "충혈됐으니 알러지성 결막염 안약",
            "ordinal": "선택 2",
            "x": 20,
            "y": 57.4,
            "width": 60,
            "height": 5.1,
            "href": "play.html?c=N&p=8"
          }
        ]
      },
      "5": {
        "type": "hospital",
        "title": "병원에서 진료를 받았다.",
        "source": "hospital.N.png",
        "guidance": null,
        "result": "눈에 들어간 이물질은 겉으로 보이지 않아도 남아 있을 수 있다. 병원에서는 전문 장비로 이물 여부와 각막 손상을 확인했다. 눈은 매우 예민한 부위이기 때문에 정확한 확인이 안전하다.",
        "heart": 1,
        "coin": null,
        "effects": [
          "♥ 하트 +1"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "눈에 들어간 이물질은 겉으로 보이지 않아도 남아 있을 수",
          "있다. 병원에서는 전문 장비로 이물 여부와 각막 손상을 확",
          "인했다. 눈은 매우 예민한 부위이기 때문에 정확한 확인이",
          "안전하다."
        ]
      },
      "6": {
        "type": "wait",
        "title": "그냥 지켜보았다.",
        "source": "wait.N.png",
        "guidance": null,
        "result": "시간이 지나도 이물감이 계속 느껴졌다.\n이물이 남아 있을 경우 각막에 상처를 남길 수 있다.\n불편함과 걱정이 점점 커졌다.",
        "heart": -2,
        "coin": null,
        "effects": [
          "♥ 하트 -2"
        ],
        "image": null,
        "hotspots": [],
        "lines": [
          "시간이 지나도 이물감이 계속 느껴졌다.",
          "이물이 남아 있을 경우 각막에 상처를 남길 수 있다.",
          "불편함과 걱정이 점점 커졌다."
        ]
      },
      "7": {
        "type": "medicine-result",
        "title": "하트 ♥ 유지",
        "source": "medicine_1.N.png",
        "guidance": null,
        "result": null,
        "heart": 0,
        "coin": null,
        "effects": [
          "하트 ♥ 유지"
        ],
        "image": null,
        "hotspots": []
      },
      "8": {
        "type": "medicine-result",
        "title": "하트 ♥ -1",
        "source": "medicine_2.N.png",
        "guidance": null,
        "result": null,
        "heart": -1,
        "coin": null,
        "effects": [
          "하트 ♥ -1"
        ],
        "image": null,
        "hotspots": []
      }
    }
  }
};
