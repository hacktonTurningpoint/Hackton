import React from "react";
import "../../style/NavBar.css";
import image from "../../images/logo.svg";

const NavBar = () => {
  return (
    <div className="box">
      <div className="menu">
        <ul>
          <img className="LogoImage" src={image} />
          <li>
            <a href="">재난심리회복지원센터 찾기</a>
          </li>
          <li>
            <a href="">재난 메뉴얼 확인</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
