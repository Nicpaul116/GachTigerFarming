import React from "react";
import "./App.css";
import Container from "./containers/Container";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Signin } from "./components";
const App = () => {
  return (
    <div className="App-all">
      <HashRouter>
        <Routes>
          <Route path="/" element={<Container />} />
          <Route path="/Signin" element={<Signin />} />
        </Routes>
      </HashRouter>
    </div>
  );
};

export default App;
