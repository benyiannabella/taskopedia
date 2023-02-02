import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Layout/Header";
import Footer from "./Components/Layout/Footer";
import MainBody from "./MainBody";

var element = document.getElementById("root");
var root = ReactDOM.createRoot(element);

root.render(
  <div style={{ backgroundColor: "black", color: "grey" }}>
    <Header />
    <div className="px-4">
      <MainBody />
    </div>
    <Footer />
  </div>
);
