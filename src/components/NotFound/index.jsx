import React from "react";
import Image from "../../images/world 1.svg";
import "../../style/Notfound.css";

const NotFound = () => {
  return (
    <div className="box">
      <img className="logo" src={Image} />
      <h1>존재하지 않는 페이지</h1>
    </div>
  );
};

export default NotFound;
