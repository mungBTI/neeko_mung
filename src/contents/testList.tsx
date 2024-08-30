import test from "node:test";

export const testList = [
  {
    liked: 2,
    key: "insiderTest",
    title: "강아지 인싸력 테스트",
    img: "insiderDog@2x.png",
    desc: "나의 강아지는 인싸? 아싸?",
    path: "/test/?title=insiderTest",
    footerTitle: "가장 많은 강아지 유형",
    questionContent: [
      {
        img: "",
        questionId: "IOFIE1",
        title: "다른 강아지를 만나면?",
        questionList: [
          {
            type: "in",
            text: "너의 냄새를 맡고 싶어 킁킁킁킁",
            desc: "친구들이 재밌어! 궁금하기도 하고..",
          },
          {
            type: "out",
            text: "별로 너가 궁금하지 않아..",
            desc: "인생은 혼자다. 혼자가 최고야!",
          },
        ],
      },
      {
        img: "",
        questionId: "IOFIE2",
        title: "강아지 무리에서 모습은?",
        questionList: [
          {
            type: "out",
            text: "다른 강아지가 날 피해ㅠㅠ",
            desc: "난 같이 놀고 싶은데.. 왜 도망가지?",
          },
          {
            type: "in",
            text: "자꾸 막 나한테 다가와!",
            desc: "다가가지 않아도 저절로 친구가 다가오는 나야말로 인싸인가",
          },
        ],
      },
      {
        img: "",
        questionId: "IOFIE3",
        title: "우리 강아지의 단짝은?",
        questionList: [
          {
            type: "in",
            text: "나만의 단짝 친구가 있어!",
            desc: "하지만 단짝이 없으면 살 수 없어..",
          },
          {
            type: "out",
            text: "모든 강아지가 나의 단짝이야",
            desc: "단짝이 필요하지 않아. 모두 내 아래인걸?",
          },
        ],
      },
      {
        img: "",
        questionId: "IOFIE4",
        title: "맛있는거 주면 나눠 먹는 타입인가?",
        questionList: [
          {
            type: "out",
            text: "다 내꺼! 건들지마!",
            desc: "맛있는거.. 내꺼... 마이프레셔스..",
          },
          {
            type: "in",
            text: "먹고싶어? 양보해줄게~",
            desc: "같이 먹어야 맛있지~ 난 배려심이 좋은 편이야ㅎㅎ",
          },
        ],
      },
    ],
  },
  {
    liked: 2,
    key: "nickname",
    title: "내 강아지에게 어울리는 이름은?",
    img: "dogname@2x.png",
    desc: "춘식이? 춘삼이?",
    path: "/test/?title=nickname",
    footerTitle: "Best 이름",
    questionContent: [
      {
        img: "",
        questionId: "IOFIE1",
        title: "사람을 좋아하나요?",
        questionList: [
          { type: "I", text: "나란 강아지 사람을 잘 따르지 않지" },
          { type: "E", text: "오직 사람만이 나의 밥줄 사랑해" },
        ],
      },
      {
        img: "",
        questionId: "IOFIE2",
        title: "활발한가요?",
        questionList: [
          { type: "I", text: "활발 하면 나지 누구도 따라올 수 없다." },
          { type: "E", text: "활발이 뭐죠..? 정적입니다만" },
        ],
      },
      {
        img: "",
        questionId: "IOFIE3",
        title: "밥을 좋아하나요?",
        questionList: [
          { type: "I", text: "나는야 고귀한 강아지 밥에게 굴복하지 않아." },
          { type: "E", text: "다 먹고살려고 하는거죠 밥 최고" },
        ],
      },
      // 여기까지 관계성향 -> 독립지향 / 관계지향 (I/E)
      {
        img: "",
        questionId: "IOFIE4",
        title: "겁이 많나요?",
        questionList: [
          { type: "S", text: "겁이 뭐죠? 그런거 안키워요." },
          { type: "N", text: "오래 살려면 겁이 많아야해요." },
        ],
      },
      {
        img: "",
        questionId: "IOFIE5",
        title: "친구를 좋아하나요?",
        questionList: [
          { type: "S", text: "저는 핵인싸에요. 친구 완전 많아요." },
          { type: "N", text: "인생은 혼자에요. 혼자가 최고죠." },
        ],
      },
    ],
  },
  {
    liked: 3,
    key: "footprintTest",
    title: "발바닥으로 보는 성격 테스트",
    img: "footprint/dogfootprint.jpeg",
    desc: "발바닥으로 봤을 때 너의 성격은?",
    path: "/test/?title=footprintTest",
    footerTitle: "가장 많은 강아지 유형",
    questionContent: [
      {
        img: "footprint/footcollection.png",
        questionId: "IOFIE1",
        title: "우리집 강아지 발바닥 모양을 찾아라!",
        questionList: [
          {
            type: "foot1",
            text: "몽실몽실 구름모양",
          },
          {
            type: "foot2",
            text: "행운의 네잎클로버 모양",
          },
          {
            type: "foot3",
            text: "꼬물꼬물 지점토 모양",
          },
          {
            type: "foot4",
            text: "이리오너라~ 갓 모양",
          },
          {
            type: "foot5",
            text: "단단한 바위 모양",
          },
          {
            type: "foot6",
            text: "로켓 슝~ 우주선 모양",
          },
        ],
      },
    ],
  },
  {
    liked: 4,
    key: "mungbti",
    title: "멍bti 테스트",
    img: "mungbti.png",
    desc: "우리집 강아지의 멍bti는?",
    path: "/test/?title=mungbti",
    footerTitle: "가장 많은 강아지 유형",
    questionContent: [
      {
        img: "mungbti/mungbti_dogfriend.jpg",
        questionId: "IOFIE1",
        title: "다른 강아지를 마추지면 나는..",
        questionList: [
          { type: "I", text: "어색해..나 혼자 있고 싶어.." },
          { type: "E", text: "너가 너무 궁금한걸? 냄새맡고 싶어!" },
        ],
      },
      {
        img: "mungbti/mungbti_home.jpg",
        questionId: "IOFIE2",
        title: "아늑한 집에서 쉬고 있을 때",
        questionList: [
          { type: "I", text: "나도 혼자만의 시간이 필요해" },
          {
            type: "E",
            text: "혼자만의 시간 같은거 필요 없어. 나랑 같이 있자~",
          },
        ],
      },
      {
        img: "mungbti/mungbti_human.jpg",
        questionId: "IOFIE3",
        title: "다른 사람이 다가온다..!",
        questionList: [
          { type: "I", text: "누구세요? 누구신데 아는척을.." },
          {
            type: "E",
            text: "오늘부터 당신은 내 주인이야 나는 주인이 999명 쯤 있어",
          },
        ],
      },
      // 여기까지 관계성향 -> 독립지향 / 관계지향 (I/E)
      {
        img: "mungbti/mungbti_wallk.webp",
        questionId: "IOFIE4",
        title: "행복한 산책 중에 나는...",
        questionList: [
          { type: "S", text: "그렇게 급하면 어제 나오지 그랬어~ 천천히 가자" },
          { type: "N", text: "산책할 시간이 부족해!!! 빨리 달려 주인!" },
        ],
      },
      {
        img: "mungbti/mungbti_toy.jpg",
        questionId: "IOFIE5",
        title: "삑삑삑 새로운 장남감을 얻었다!",
        questionList: [
          { type: "S", text: "이건 무슨 기괴한 것이지.. 치워줘.." },
          { type: "N", text: "움직여봐!! 나랑 놀잔말이다!!" },
        ],
      },
      {
        img: "mungbti/mungbti_quiet.jpg",
        questionId: "IOFIE6",
        title: "짹짹.. 주변이 조용할 때는..",
        questionList: [
          { type: "S", text: "피로가 풀린다.. 편안해.." },
          { type: "N", text: "발발발 내 세상은 항상 바빠! 이것도.. 저것도.." },
        ],
      },
      // 여기까지 활동성향 -> 동적 성향 / 정적성향 (N/S)
      {
        img: "mungbti/mungbti_trash.jpg",
        questionId: "IOFIE7",
        title: "헉 사고쳐버렸다. 어떡해야하지?",
        questionList: [
          { type: "F", text: "어떡하지 어떡하지.. (눈치)" },
          { type: "T", text: "모르는 척 하면 나인 줄 모를거야" },
        ],
      },
      {
        img: "mungbti/mungbti_comfort.jpg",
        questionId: "IOFIE8",
        title: "주인의 기분이 너무 안좋아보여..",
        questionList: [
          { type: "F", text: "내가 옆에 있으면 기분이 좋아질거야 분명해" },
          {
            type: "T",
            text: "특별히 너의 기분이 안좋으니 내가 가장 아끼는 걸 줄게!",
          },
        ],
      },
      {
        img: "mungbti/mungbti_want.jpg",
        questionId: "IOFIE9",
        title: "밥도 먹고 싶고.. 산책도 가고싶은데..",
        questionList: [
          { type: "F", text: "주인! 알잘딱깔센하게 눈치 채줄거지?" },
          { type: "T", text: "밥도 내가 꺼내먹고 산책도 혼자 다녀올테야!" },
        ],
      },
      // 여기까지 순종 -> 충직함 / 영민함 (F/T)
      {
        img: "mungbti/mungbti_surprised.jpg",
        questionId: "IOFIE10",
        title: "!!깜짝이야! 놀랐잖아!",
        questionList: [
          { type: "J", text: "무슨 소리야! 큰일난거야? 놀랐어!" },
          { type: "P", text: "이건 또 무슨 신기한 소리지? 뭐지?" },
        ],
      },
      {
        img: "mungbti/mungbti_new.jpg",
        questionId: "IOFIE11",
        title: "여긴 어디지? 처음 온 것 같은데?",
        questionList: [
          { type: "J", text: "이불 밖은 위험해.. 조심 조심" },
          {
            type: "P",
            text: "이건 무슨 냄새? 저건? 새로운 것 뿐이잖아! 행복해",
          },
        ],
      },
      {
        img: "mungbti/mungbti_bark.jpg",
        questionId: "IOFIE12",
        title: "개소리 좀 안나게 해라~ 누가 짖는거야!",
        questionList: [
          { type: "J", text: "내 목청이 더 커! 나를 뛰어넘을 수 없어!" },
          { type: "P", text: "왜 개소리를 내고 그런담..알아서 멈추겠지.." },
        ],
      },

      // 여기까지 적응 성향 -> 능동형 / 신중형 (P/J)
    ],
    // footerRank: [
    //   {
    //     rank: 1,
    //     img: "mountainDog.png",
    //     title: "버니즈 마운틴 독",
    //     desc: "INFP",
    //   },
    //   {
    //     rank: 2,
    //     img: "pom.png",
    //     title: "포메라니안",
    //     desc: "ENFP",
    //   },
    // ],
  },
];

export const testResult = [
  {
    testid: 0,
    testKey: "footprintTest",
    result: [
      {
        id: 0,
        key: "foot1",
        img: "footprint/cloudfoot.png",
        title: "몽실몽실 구름모양",
        desc: "",
      },
      {
        id: 1,
        key: "foot2",
        img: "footprint/cloudfoot.png",
        title: "행운의 네잎클로버 모양",
        desc: "",
      },
      {
        id: 2,
        key: "foot3",
        img: "footprint/cloudfoot.png",
        title: "꼬물꼬물 지점토 모양",
        desc: "",
      },
      {
        id: 3,
        key: "foot4",
        img: "footprint/cloudfoot.png",
        title: "이리오너라~ 갓 모양",
        desc: "",
      },
      {
        id: 4,
        key: "foot5",
        img: "footprint/cloudfoot.png",
        title: "단단한 바위 모양",
        desc: "",
      },
      {
        id: 5,
        key: "foot6",
        img: "footprint/cloudfoot.png",
        title: "로켓 슝~ 우주선 모양",
        desc: "",
      },
    ],
  },
  {
    testid: 1,
    testKey: "nickname",
    result: [
      {
        id: 0,
        key: "in",
        img: "",
        title: "인싸견",
        desc: "",
      },
      {
        id: 1,
        key: "out",
        img: "",
        title: "인디",
        desc: "",
      },
    ],
  },
  {
    testid: 2,
    testKey: "insiderTest",
    result: [
      {
        id: 0,
        key: "in",
        img: "",
        title: "인싸견",
        desc: "",
      },
      {
        id: 1,
        key: "out",
        img: "",
        title: "인디",
        desc: "",
      },
    ],
  },
  {
    testid: 3,
    testKey: "mungbti",
    result: [
      {
        id: 0,
        key: "in",
        img: "",
        title: "인싸견",
        desc: "",
      },
      {
        id: 1,
        key: "out",
        img: "",
        title: "인디",
        desc: "",
      },
    ],
  },
];
