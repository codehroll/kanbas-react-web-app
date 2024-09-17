import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";

function App() {
  return (
    <HashRouter>
      <div>
        {/* <Labs /> */}
        <h4>
          Di He, Section 1{" "}
          <a href="https://github.com/codehroll/kanbas-react-web-app/tree/a1">
            Source Code
          </a>
        </h4>

        <Routes>
          <Route path="/" element={<Navigate to="/Kanbas" />} />
          <Route path="/Labs/*" element={<Labs />} />
          <Route path="/Kanbas/*" element={<Kanbas />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
export default App;
