import { useEffect } from "react";

const CheckPage = (props) => {
  const locations = [
    {
      title: "침수",
      content:
        "1.지하공간 바닥에 물이 조금이라도 차오르거나 하수구에서 역류시 즉시 대피하세요.\n주차장으로 빗물이 들어오면 차량을 밖으로 이동하지 말고 몸만 탈출하세요.(차량확인 등을 위한 지하주차장 진입은 절대 금지해 주세요.)\n지하계단은 정강이 높이 정도로만 물이 유입되어도 성인이 올라가기 어렵기 때문에 조금이라도 흘러들어오면 즉시 대피하세요.",
    },
    {
      title: "낙뢰",
      content:
        "051-801-4070	부산광역시 부산진구 동성로 144 대한적십자사 부산관역시지사 구호복지팀",
    },
    {
      title: "대설",
      content:
        "053-550-7117	대구광역시 중구 태평로 7 대한적십자사 대구광역시지사 구호복지팀",
    },
    {
      title: "황사",
      content:
        "02-2181-3107	032-810-1341	인천광역시 연수구 연수동 함박뫼로 220 대한적십자사 인천광역시지사 구호복지팀",
    },
    {
      title: "지진해일",
      content:
        "062-570-7725	광주광역시 북구 매곡로 117 대한적십자사 광주·전남지사 구호복지팀",
    },
    {
      title: "홍수",
      content:
        "042-220-0133	대전광역시 중구 선화서로 19 대한적십자사 대전·세종지사 재난안전센터",
    },
    {
      title: "자연우주물체추락",
      content:
        "052-210-9521	울산광역시 중구 성안8길 71 대한적십자사 울산광역시지사 구호봉사팀",
    },
    {
      title: "세종",
      content: "044-862-0141	세종특별자치시 한솔동로 26",
    },
    {
      title: "태풍",
      content:
        "031-230-1624	경기도 수원시 권선구 권광로 129 대한적십자사 경기도지사 재난안전센터",
    },
    {
      title: "강풍",
      content:
        "033-253-1295	강원특별자치도 춘천시 중앙로 17 대한적십자사 강원특별자치도지사 RCY본부",
    },
    {
      title: "한파",
      content:
        "043-262-7114	충청북도 청주시 흥덕구 가로수로 1000 대한적십자사 충청북도지사 구호복지팀",
    },
    {
      title: "지진",
      content:
        "02-2181-3107	충청남도 홍성군 홍북면 충남대로 118 대한적십자사 충남지사 구호복지팀",
    },
    {
      title: "화산폭팔",
      content:
        "02-2181-3107	전라북도 전주시 덕진구 혁신로 463 대한적십자사 전라북도지사 구호복지팀",
    },
    {
      title: "해수면상승",
      content:
        "02-2181-3107	광주광역시 북구 매곡로 117 대한적십자사 광주·전남지사 구호복지팀",
    },
    {
      title: "우주전파재난",
      content:
        "054-830-0746	경상북도 안동시 풍천면 도청대로 489 대한적십자사 경상북도지사 구호봉사팀",
    },
    {
      title: "호우",
      content:
        "055-278-2725	경상남도 창원시 의창구 용지로 226 대한적십자사 경상남도지사 구호복지팀",
    },
    {
      title: "풍랑",
      content:
        "064-758-3506	제주특별자치도 제주시 전농로 7 대한적십자사 제주특별자치도지사 재난안전팀",
    },
    {
      title: "폭염",
      content:
        "02-2181-3107	광주광역시 북구 매곡로 117 대한적십자사 광주·전남지사 구호복지팀",
    },
    {
      title: "해일",
      content:
        "054-830-0746	경상북도 안동시 풍천면 도청대로 489 대한적십자사 경상북도지사 구호봉사팀",
    },
    {
      title: "가뭄",
      content:
        "055-278-2725	경상남도 창원시 의창구 용지로 226 대한적십자사 경상남도지사 구호복지팀",
    },
    {
      title: "산사태",
      content:
        "064-758-3506	제주특별자치도 제주시 전농로 7 대한적십자사 제주특별자치도지사 재난안전팀",
    },
    {
      title: "조류대발생(녹조)",
      content:
        "064-758-3506	제주특별자치도 제주시 전농로 7 대한적십자사 제주특별자치도지사 재난안전팀",
    },
  ];
  let x;
  locations.map(props.selection);
  useEffect(() => {
    console.log(props.selection);
  }, [props]);

  for (let i = 0; i < locations.length; i++) {
    if (locations[i].title === props.selection) {
      x = locations[i].content;
      break;
    }
  }

  return (
    <>
      <h1>{x}</h1>
    </>
  );
};

export default CheckPage;