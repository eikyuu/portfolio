import React from "react";
import "./Home.css";
import pdf from "./vincentduguet.pdf";
const Home = (props) => {
  return (
    <>
      <div className="home">
        <div className="home_block">
          <h1 className="home_block_h1">Développeur Web</h1>
          <h2 className="home_block_h2">HTML &amp; CSS - REACT - SYMFONY</h2>
          <p>En cours de construction</p>
          <a
            href={pdf}
            download="CV Vincent duguet"
            className="mt-3 home_button"
          >
            TÉLÉCHARGER CV
          </a>
        </div>
      </div>
    </>
  );
};

export default Home;
