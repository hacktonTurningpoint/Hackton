import React, { useState } from "react";
// import { ReactDOM } from "react";
import NavBar from "../NavBar/navbar";
import "../../style/Find.css";
import Map from "../Map/map";

const Find = () => {
  const [select, setSelect] = useState("서울");
  // const [selectcontent, setSelectcontent] = useState(
  //   "02-2181-3107	서울특별시 양천구 중앙로 345 대한적십자사 서울특별지사"
  // );
  const SelectContent = [
    {
      title: "서울",
      content:
        "02-2181-3107	서울특별시 양천구 중앙로 345 대한적십자사 서울특별지사",
    },
    {
      title: "부산",
      content:
        "051-801-4070	부산광역시 부산진구 동성로 144 대한적십자사 부산관역시지사 구호복지팀",
    },
    {
      title: "대구",
      content:
        "053-550-7117	대구광역시 중구 태평로 7 대한적십자사 대구광역시지사 구호복지팀",
    },
    {
      title: "인천",
      content:
        "02-2181-3107	032-810-1341	인천광역시 연수구 연수동 함박뫼로 220 대한적십자사 인천광역시지사 구호복지팀",
    },
    {
      title: "광주",
      content:
        "062-570-7725	광주광역시 북구 매곡로 117 대한적십자사 광주·전남지사 구호복지팀",
    },
    {
      title: "대전",
      content:
        "042-220-0133	대전광역시 중구 선화서로 19 대한적십자사 대전·세종지사 재난안전센터",
    },
    {
      title: "울산",
      content:
        "052-210-9521	울산광역시 중구 성안8길 71 대한적십자사 울산광역시지사 구호봉사팀",
    },
    { title: "세종", content: "044-862-0141	세종특별자치시 한솔동로 26" },
    {
      title: "경기",
      content:
        "031-230-1624	경기도 수원시 권선구 권광로 129 대한적십자사 경기도지사 재난안전센터",
    },
    {
      title: "강원",
      content:
        "033-253-1295	강원특별자치도 춘천시 중앙로 17 대한적십자사 강원특별자치도지사 RCY본부",
    },
    {
      title: "충북",
      content:
        "043-262-7114	충청북도 청주시 흥덕구 가로수로 1000 대한적십자사 충청북도지사 구호복지팀",
    },
    {
      title: "충남",
      content:
        "02-2181-3107	충청남도 홍성군 홍북면 충남대로 118 대한적십자사 충남지사 구호복지팀",
    },
    {
      title: "전북",
      content:
        "02-2181-3107	전라북도 전주시 덕진구 혁신로 463 대한적십자사 전라북도지사 구호복지팀",
    },
    {
      title: "전남",
      content:
        "02-2181-3107	광주광역시 북구 매곡로 117 대한적십자사 광주·전남지사 구호복지팀",
    },
    {
      title: "경북",
      content:
        "054-830-0746	경상북도 안동시 풍천면 도청대로 489 대한적십자사 경상북도지사 구호봉사팀",
    },
    {
      title: "경남",
      content:
        "055-278-2725	경상남도 창원시 의창구 용지로 226 대한적십자사 경상남도지사 구호복지팀",
    },
    {
      title: "제주",
      content:
        "064-758-3506	제주특별자치도 제주시 전농로 7 대한적십자사 제주특별자치도지사 재난안전팀",
    },
  ];

  const listItems = SelectContent.map((SelectContent) => (
    <li
      value={SelectContent.title}
      key={SelectContent.title.toString()}
      onClick={() => handleClick(SelectContent)}
    >
      {SelectContent.title}
    </li>
  ));

  // const listContent = SelectContent.map((SelectContent) => (
  //   <div value={SelectContent.content} key={SelectContent.content.toString()}>
  //     {SelectContent.content}
  //   </div>
  // ));
  // const listContent = SelectContent.map((SelectContent) => {
  //   <h2>{SelectContent.content}</h2>;
  // });
  const handleClick = (selectedItem) => {
    // 클릭된 항목에 대한 작업을 수행합니다.
    setSelect(selectedItem.title);
    console.log("선택된 항목:", selectedItem.title);
  };

  const selectedContent = SelectContent.find(
    (item) => item.title === select
  )?.content;

  return (
    <>
      <NavBar />
      <div className="MainContainer">
        <div className="SelectMenu">{listItems}</div>
        <div className="MenuTitle">
          <h1>전국 재난심리회복지원센터 현황</h1>
          <Map selection={select} />
          <div className="content">
            <h3>{selectedContent}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Find;
