import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "../components/Loading";

const Home = lazy(() => import("../components/Home/home"));
const Map = lazy(() => import("../components/Map/map"));
const NotFound = lazy(() => import("../components/NotFound"));
const NavBar = lazy(() => import("../components/NavBar/navbar"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Map />} />
        <Route path="/navbar" element={<NavBar />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
