import React, { useEffect, useState } from "react";
import NavBar from "../NavBar/navbar";

const { kakao } = window;

const Map = () => {
  const [map, setMap] = useState(null);

  //처음 지도 그리기
  useEffect(() => {
    const container = document.getElementById("map");
    const options = { center: new kakao.maps.LatLng(33.450701, 126.570667) };
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);
  }, []);

  return (
    <>
      <NavBar />
      <div
        style={{
          width: "100%",
          position: "relative",
          marginTop: "3%",
          zIndex: "-1",
          // display: "inline-block",
        }}
      >
        <div id="map" style={{ width: "100%", height: "500px" }}></div>
      </div>
    </>
  );
};

export default Map;
