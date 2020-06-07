import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Portfolio />
    </div>
  );
}

export default App;
