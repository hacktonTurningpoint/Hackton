import React from "react";
import "../../style/NavBar.css";
import image from "../../images/logo.svg";
import { Link, useNavigate } from "react-router-dom";

const NavBar = () => {
  const navigate = useNavigate();
  return (
    <div className="box">
      <div className="menu">
        <ul>
          <img
            onClick={() => {
              navigate("/");
            }}
            id="LogoImage"
            className="LogoImage"
            src={image}
          />
          <li>
            <Link to={"/find"}>재난심리회복지원센터 찾기</Link>
          </li>
          <li>
            <Link to={"/check"}>재난 메뉴얼 확인</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default NavBar;
