import React, { useEffect } from "react";
import Nav from "./components/navbar/Nav";
import Home from "./components/home/Home";
import Portfolio from "./components/portfolio/Portfolio";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import About from "./components/about/About";

function App() {
  useEffect(() => {
    const progressBar = document.querySelector(".scrollbar");

    let totalHeight =
      document.documentElement.scrollHeight -
      document.documentElement.clientHeight;

    window.addEventListener("scroll", () => {
      let progress = (document.documentElement.scrollTop / totalHeight) * 100;
      progressBar.style.height = `${progress}%`;
      progressBar.style.opacity = `${progress}%`;
    });

    const progressBarClick = document.querySelector(".clickScrollbar");

    progressBarClick.addEventListener("click", (e) => {
      let newPageScroll =
        (e.clientY / progressBarClick.offsetHeight) * totalHeight;
      window.scrollTo({
        top: newPageScroll,
        behavior: "smooth",
      });
    });

    // pour gérer le resize, vu que la hauteur du site change.
    let debounceResize;
    window.addEventListener("resize", () => {
      clearTimeout(debounceResize);
      debounceResize = setTimeout(() => {
        totalHeight = document.body.scrollHeight - window.innerHeight;
      }, 250);
    });
  });

  return (
    <div className="App">
      <div className="clickScrollbar"></div>
      <div className="scrollbar"></div>

      <Nav />
      <Home />
      <About />
      <Skills />
      <Portfolio />
      <Contact />
      <ToastContainer position={toast.POSITION.BOTTOM_LEFT} />
    </div>
  );
}

export default App;
