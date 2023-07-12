import { Map, MapMarker } from "react-kakao-maps-sdk";

// import React, { useEffect, useState } from "react";

// const { kakao } = window;

const Maps = (props) => {
  const locations = [
    {
      title: "서울",
      latlng: { lat: 37.526569511606894, lng: 126.84875409699731 },
    },
    {
      title: "부산",
      latlng: { lat: 35.161528305806854, lng: 129.06354102111993 },
    },
    {
      title: "대구",
      latlng: { lat: 35.87871242019558, lng: 128.57914566609676 },
    },
    {
      title: "인천",
      latlng: { lat: 37.4197108170114, lng: 126.68994912523343 },
    },
    {
      title: "광주",
      latlng: { lat: 35.1950144654552, lng: 126.8904015355321 },
    },
    {
      title: "대전",
      latlng: { lat: 36.325321552773, lng: 127.41905385283656 },
    },
    {
      title: "울산",
      latlng: { lat: 35.58012156153689, lng: 129.3226397040374 },
    },
    {
      title: "세종",
      latlng: { lat: 36.481150897761374, lng: 127.26101152238239 },
    },
    {
      title: "경기",
      latlng: { lat: 37.259588113750866, lng: 127.03048197481732 },
    },
    {
      title: "강원",
      latlng: { lat: 37.88312573101429, lng: 127.7293179446419 },
    },
    {
      title: "충북",
      latlng: { lat: 35.194960312216914, lng: 126.89032200019774 },
    },
    {
      title: "충남",
      latlng: { lat: 35.194960312216914, lng: 126.89032200019774 },
    },
    {
      title: "전북",
      latlng: { lat: 35.194960312216914, lng: 126.89032200019774 },
    },
    {
      title: "전남",
      latlng: { lat: 35.194960312216914, lng: 126.89032200019774 },
    },
    {
      title: "경북",
      latlng: { lat: 36.57746185187532, lng: 128.51088520797185 },
    },
    {
      title: "경남",
      latlng: { lat: 35.23383309572052, lng: 128.6860280805488 },
    },
    {
      title: "제주",
      latlng: { lat: 33.50489175150105, lng: 126.51403798205064 },
    },
  ];
  let x, y;
  // locations.map((props.selection))
  console.log(props.selection);

  for (let i = 0; i < locations.length; i++) {
    if (locations.title === props.selection) {
      x = locations.latlng.lat;
      y = locations.letlng.lng;
      break;
    }
  }
  console.log(x);
  console.log(y);

  return (
    <Map
      center={{ lat: x, lng: y }}
      style={{ width: "50vw", height: "30vw" }}
      level={3}
    >
      {locations.map((loc, idx) => (
        <MapMarker
          key={`${loc.title}-${loc.latlng}`}
          position={loc.latlng}
          image={{
            src: "https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/markerStar.png",
            size: { width: 24, height: 35 },
          }}
          title={loc.title}
        />
      ))}
    </Map>
  );
};

export default Maps;
