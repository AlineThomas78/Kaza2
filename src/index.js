import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./Styles/index.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Error from "./Pages/404";
import Footer from "./Components/Footer";
import Propos from "./Pages/Propos";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='*' element={<Error />} />  
        <Route path='/propos' element={<Propos />} />  
      </Routes>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
