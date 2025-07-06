import React from "react";
// import logo from './logo.svg';
// import './App.css';
import Labs from "./Labs";
import { HashRouter, Route, Routes, Navigate } from "react-router-dom";
import Kanbas from "./Kanbas";
import { Provider, useSelector } from "react-redux";
import store from "./Kanbas/store";

function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <div>
          {/* <Labs /> */}
          <Routes>
            <Route path="/" element={<Navigate to="/Kanbas" />} />
            <Route path="/Labs/*" element={<Labs />} />
            <Route path="/Kanbas/*" element={<Kanbas />} />
          </Routes>
        </div>
      </HashRouter>
    </Provider>
  );
}
export default App;
