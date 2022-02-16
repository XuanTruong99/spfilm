import React from "react";

import { Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import Catalog from "../pages/Catalog";
import Detail from "../pages/detail/Detail";
import Watches from "../pages/watches/Watches";

function Routed() {
  return (
    <div>
      <Routes>
        <Route path="/:category/:id/watch" element={<Watches />}></Route>
        <Route path="/:category/search/:keyword" element={<Catalog />}></Route>
        <Route path="/:category/:id" element={<Detail />}></Route>
        <Route path="/:category" element={<Catalog />}></Route>
        <Route path="/" element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default Routed;
