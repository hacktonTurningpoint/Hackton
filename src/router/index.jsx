import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import Loading from "../components/Loading";

const Home = lazy(() => import("../components/Home/home"));
const Maps = lazy(() => import("../components/Map/map"));
const NotFound = lazy(() => import("../components/NotFound"));
const NavBar = lazy(() => import("../components/NavBar/navbar"));
const Find = lazy(() => import("../components/Findcenter/find"));
const Checkmenu = lazy(() => import("../components/Checkmenu/checkmenu"));

const Router = () => {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<Maps />} />
        <Route path="/navbar" element={<NavBar />} />
        <Route path="/find" element={<Find />} />
        <Route path="/check" element={<Checkmenu />} />
      </Routes>
    </Suspense>
  );
};

export default Router;
