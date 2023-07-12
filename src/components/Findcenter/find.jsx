import React, { useState } from "react";
// import { ReactDOM } from "react";
import NavBar from "../NavBar/navbar";
import "../../style/Find.css";
import Map from "../Map/map";

const Find = () => {
  const [select, setSelect] = useState("서울");
  const SelectContent = [
    "서울",
    "부산",
    "대구",
    "인천",
    "광주",
    "대전",
    "울산",
    "세종",
    "경기",
    "강원",
    "충북",
    "충남",
    "전북",
    "전남",
    "경북",
    "경남",
    "제주",
  ];
  const listItems = SelectContent.map((SelectContent) => (
    <li
      value={SelectContent}
      key={SelectContent.toString()}
      onClick={() => handleClick(SelectContent)}
    >
      {SelectContent}
    </li>
  ));
  const handleClick = (selectedItem) => {
    // 클릭된 항목에 대한 작업을 수행합니다.
    setSelect(selectedItem);
    console.log("선택된 항목:", selectedItem);
  };

  return (
    <>
      <NavBar />
      <div className="MainContainer">
        <div className="SelectMenu">{listItems}</div>
        <div className="MenuTitle">
          <h1>전국 재난심리회복지원센터 현황</h1>
          <Map selection={select} />
        </div>
      </div>
    </>
  );
};

export default Find;
