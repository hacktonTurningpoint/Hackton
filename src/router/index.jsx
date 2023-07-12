import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Loading from "../components/Loading";
import Map from "../components/Map/map";
import Home from "../components/Home/home";

// const Home = lazy(() => import("../components/Home/home"));
// const Map = lazy(() => import("../components/Map/map"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="/map" element={<Map />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
