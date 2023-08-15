import React from "react";
import Home from "./assets/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./assets/Pages/Login";
import Checkout from "./assets/compnents/Checkout";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
