import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import "../../style/App.css";
import NavBar from "../NavBar/navbar";
import Images1 from "../../images/삼풍백화점 1.svg";
import Images2 from "../../images/화재현장 1.svg";

import React, { Component } from "react";

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 10000,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1,
      // cssEase: "liner",
    };
    return (
      <>
        <NavBar />
        <div className="container">
          <Slider {...settings}>
            <div>
              <img src={Images1} />
            </div>
            <div>
              <img src={Images2} />
            </div>
          </Slider>
        </div>
      </>
    );
  }
}
