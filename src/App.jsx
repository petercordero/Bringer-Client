import React from "react";
import "./App.css";
import Login from "./Login";
import Tracking from "./Tracking";
import Navbar from "./Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/tracking" element={<Tracking />} />
      </Routes>
    </div>
  );
}

export default App;
