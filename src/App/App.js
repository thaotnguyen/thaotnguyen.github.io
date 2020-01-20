import React from "react";
import { BrowserRouter } from "react-router-dom";

import Body from "../Body";
import Header from "../Header";

import "./App.scss";

function App() {
  return (
    <BrowserRouter>
      <>
        <Header />
        <Body />
      </>
    </BrowserRouter>
  );
}

export default App;
