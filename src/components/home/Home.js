import React, { useState } from "react";
import "./Home.css";
import pdf from "./vincentduguet.pdf";
const Home = (props) => {
  const [home] = useState({
    h1: "Développeur Web",
    h2: "HTML &amp; CSS - REACT - SYMFONY",
    p: "en cours de construction",
    a: "TÉLÉCHARGER CV",
  });
  return (
    <>
      <div className="home">
        <div className="home_block">
          <h1 className="home_block_h1">{home.h1}</h1>
          <h2 className="home_block_h2">{home.h2}</h2>
          <p>{home.p}</p>
          <a
            href={pdf}
            download="CV Vincent duguet"
            className="mt-3 home_button"
          >
            {home.a}
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
