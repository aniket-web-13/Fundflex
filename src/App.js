import React from "react";
import { BrowserRouter } from "react-router";


import Routing from "../src/routes/fundflex.routes.js";
import Home from "./pages/homePage.js";

function App() {
  return (
    <>
      <BrowserRouter>
            <Routing />
            <Home />
      </BrowserRouter>
    </>
  );
}

export default App;
