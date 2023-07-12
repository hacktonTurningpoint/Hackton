import React, { useEffect, useState } from "react";

const { kakao } = window;

const Map = () => {
  return (
    <Map
      center={{ lat: 33.5563, lng: 126.79581 }} // 지도의 중심 좌표
      style={{ width: "50vw", height: "30vw" }} // 지도 크기
      level={3} // 지도 확대 레벨
    ></Map>
  );
};

export default Map;
