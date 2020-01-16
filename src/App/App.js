import React from "react";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
}

export default App;
