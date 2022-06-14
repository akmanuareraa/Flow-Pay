import "./App.css";
import { useState, useEffect } from "react";
import Web3 from "web3";
import React from "react";
import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";

import Navbar from "./components/react-components/Navbar";
import Homepage from "./components/react-components/Homepage";
import LandingBusiness from "./components/react-components/LandingBusiness";
import LandingSubscriber from "./components/react-components/LandingSubscriber";
import RegisterBusiness from "./components/react-components/RegisterBusiness";

function App() {
  return (
    <>
      <BrowserRouter>
        {<Navbar />}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/businesslanding" element={<LandingBusiness />} />
          <Route path="/subscriberlanding" element={<LandingSubscriber />} />
          <Route path="/registerbusiness" element={<RegisterBusiness />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
