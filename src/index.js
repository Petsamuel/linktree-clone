import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import App from "./App";
import Contact from "./components/contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route exact path="/contact" element= {<Contact/>} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
