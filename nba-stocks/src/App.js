import React from "react";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/nav/Nav";
import HomePage from "./components/HomePage";
import Teams from "./components/nav/Teams";


function App() {
  return (
    <div className="App">
      <Nav />
      <Routes>
        <Route exact path="/" element={<HomePage />} />
        <Route exact path="/Teams" element={<Teams />} />
      </Routes>
    </div>
  );
}

export default App;