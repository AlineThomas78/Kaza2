import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router";
import "./Styles/index.css";
import Header from "./Components/Header";
import Home from "./Pages/Home";
import Error from "./Pages/NotFound";
import Footer from "./Components/Footer";
import Propos from "./Pages/Propos";
import "./index.css";
import LocationDetails from "./Pages/LocationDetails";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <div className="Container">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<Error />} />
          <Route path="/propos" element={<Propos />} />
          <Route path="/logement/:id" element={<LocationDetails />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
