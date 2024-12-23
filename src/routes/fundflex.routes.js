import React from "react";
import { Routes, Route } from "react-router";

import  PricingPage  from "../pages/pricingPage.js";
import Home from "../pages/homePage.js";



function Routing() {
  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/pricing-page" element={<PricingPage />} />
    </Routes>
  );
}
export default Routing;
