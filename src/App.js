import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Skills />
      <Portfolio />
      <Contact />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  );
}

export default App;
