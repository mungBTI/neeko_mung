import test from "node:test";

export const testList = [
  {
    liked: 2,
    key: "insiderTest",
    title: "강아지 인싸력 테스트",
    img: "dogfootprint.jpeg",
    desc: "나의 강아지는 인싸? 아싸?",
    path: "/test/?title=insiderTest",
    footerTitle: "가장 많은 강아지 유형",
    questionContent: [
      {
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
    img: "dogname.jpeg",
    desc: "춘식이? 춘삼이?",
    path: "/test/?title=nickname",
    footerTitle: "Best 이름",
    questionCount: 12,
    questionContent: [
      {
        questionId: "IOFIE1",
        title: "사람을 좋아하나요?",
        questionList: [
          { type: "I", text: "나란 강아지 사람을 잘 따르지 않지" },
          { type: "E", text: "오직 사람만이 나의 밥줄 사랑해" },
        ],
      },
      {
        questionId: "IOFIE2",
        title: "활발한가요?",
        questionList: [
          { type: "I", text: "활발 하면 나지 누구도 따라올 수 없다." },
          { type: "E", text: "활발이 뭐죠..? 정적입니다만" },
        ],
      },
      {
        questionId: "IOFIE3",
        title: "밥을 좋아하나요?",
        questionList: [
          { type: "I", text: "나는야 고귀한 강아지 밥에게 굴복하지 않아." },
          { type: "E", text: "다 먹고살려고 하는거죠 밥 최고" },
        ],
      },
      // 여기까지 관계성향 -> 독립지향 / 관계지향 (I/E)
      {
        questionId: "IOFIE4",
        title: "겁이 많나요?",
        questionList: [
          { type: "S", text: "겁이 뭐죠? 그런거 안키워요." },
          { type: "N", text: "오래 살려면 겁이 많아야해요." },
        ],
      },
      {
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
    img: "maltize.jpg",
    desc: "발바닥으로 봤을 때 너의 성격은?",
    path: "/test/?title=footprintTest",
    footerTitle: "가장 많은 강아지 유형",
    questionContent: [
      {
        questionId: "IOFIE1",
        title: "우리집 강아지 발바닥 모양을 찾아라!",
        img: "",
        questionList: [
          { type: "foot1", text: "몽실몽실 구름모양" },
          { type: "foot2", text: "행운의 네잎클로버 모양" },
          { type: "foot3", text: "꼬물꼬물 지점토 모양" },
          { type: "foot4", text: "이리오너라~ 갓 모양" },
          { type: "foot5", text: "단단한 바위 모양" },
          { type: "foot6", text: "로켓 슝~ 우주선 모양" },
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
        questionId: "IOFIE1",
        title: "다른 강아지를 만났을 때",
        questionList: [
          { type: "I", text: "어색해..나 혼자 있고 싶어.." },
          { type: "E", text: "너 누구야? 너무 궁금해! (킁카 킁카)" },
        ],
      },
      {
        questionId: "IOFIE2",
        title: "집에서 쉴 때",
        questionList: [
          { type: "I", text: "내 공간에서 쉬는게 최고야" },
          { type: "E", text: "주인님 옆이 너무 좋아" },
        ],
      },
      {
        questionId: "IOFIE3",
        title: "다른 사람이 아는 척 할 때",
        questionList: [
          { type: "I", text: "(무시) 나는 내 세계에 빠져있어" },
          { type: "E", text: "안녕하세요! 인사해줘서 고마워요!(살랑 살랑)" },
        ],
      },
      // 여기까지 관계성향 -> 독립지향 / 관계지향 (I/E)
      {
        questionId: "IOFIE4",
        title: "산책할 때",
        questionList: [
          { type: "S", text: "천천히 여유를 즐기며 걷는게 최고야" },
          { type: "N", text: "빨리 빨리! 주인! 달리자!!" },
        ],
      },
      {
        questionId: "IOFIE5",
        title: "새로운 장난감을 받으면",
        questionList: [
          { type: "S", text: "이게 뭐지..? 이상한게 있어.." },
          { type: "N", text: "(툭툭) 나랑 놀자!! 움직여봐!!" },
        ],
      },
      {
        questionId: "IOFIE6",
        title: "주변이 조용할 때",
        questionList: [
          { type: "S", text: "차분해 편안하다.." },
          { type: "N", text: "발발발...(무언가 바쁘다)" },
        ],
      },
      // 여기까지 활동성향 -> 동적 성향 / 정적성향 (N/S)
      {
        questionId: "IOFIE7",
        title: "잘못을 저질렀을 때",
        questionList: [
          { type: "F", text: "(주인의 기분을 살피며) 나 잘못했나..?" },
          { type: "T", text: "ㅎㅎㅎㅎ왜그래용?" },
        ],
      },
      {
        questionId: "IOFIE8",
        title: "주인님 기분이 안좋을 때",
        questionList: [
          { type: "F", text: "내가 옆에 있어줘야 겠다." },
          { type: "T", text: "내가 해결해줄게!(무언가 가져다 줌)" },
        ],
      },
      {
        questionId: "IOFIE9",
        title: "원하는게 있을 때",
        questionList: [
          { type: "F", text: "주인님이 내 신호를 받아줄꺼야!" },
          { type: "T", text: "내가 직접 하겠어!" },
        ],
      },
      // 여기까지 순종 -> 충직함 / 영민함 (F/T)
      {
        questionId: "IOFIE10",
        title: "큰 소리가 들렸을 때",
        questionList: [
          { type: "J", text: "왕! 무슨 소리야! 큰일났어?!" },
          { type: "P", text: "갸우뚱 갸우뚱 무슨 소리지?" },
        ],
      },
      {
        questionId: "IOFIE11",
        title: "새로운 환경을 마주했을 때",
        questionList: [
          { type: "J", text: "깜짝 깜짝 여기 어디야..?" },
          { type: "P", text: "너무 재밌어! 이건 뭐야? 저건 뭐야?" },
        ],
      },
      {
        questionId: "IOFIE12",
        title: "다른 강아지가 짖을 때",
        questionList: [
          { type: "J", text: "왕왕! 나도 같이 짖을거야!" },
          { type: "P", text: "왜 짖는거야..? (무시)" },
        ],
      },

      // 여기까지 적응 성향 -> 능동형 / 신중형 (P/J)
    ],
    footerRank: [
      {
        rank: 1,
        img: "mountainDog.png",
        title: "버니즈 마운틴 독",
        desc: "INFP",
      },
      {
        rank: 2,
        img: "pom.png",
        title: "포메라니안",
        desc: "ENFP",
      },
    ],
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
        img: "",
        title: "몽실몽실 구름모양",
        desc: "",
      },
      {
        id: 1,
        key: "foot2",
        img: "",
        title: "행운의 네잎클로버 모양",
        desc: "",
      },
      {
        id: 2,
        key: "foot3",
        img: "",
        title: "꼬물꼬물 지점토 모양",
        desc: "",
      },
      {
        id: 3,
        key: "foot4",
        img: "",
        title: "이리오너라~ 갓 모양",
        desc: "",
      },
      {
        id: 4,
        key: "foot5",
        img: "",
        title: "단단한 바위 모양",
        desc: "",
      },
      {
        id: 5,
        key: "foot6",
        img: "",
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
      },
      {
        id: 1,
        key: "out",
        img: "",
        title: "인디",
      },
    ],
  },
  {
    testid: 2,
    testKey: "insiderTest",
    result: [],
  },
  {
    testid: 3,
    testKey: "mungbti",
    result: [],
  },
];
