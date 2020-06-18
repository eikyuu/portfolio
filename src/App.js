import React from "react";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Nav />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  );
}

export default App;
