import React from "react";
import "./About.css";
import imgProfil from "./imgprofil.png";
import AOS from "aos";
import "aos/dist/aos.css";
const About = (props) => {
  AOS.init({
    duration: 2000,
    once: true,
  });
  return (
    <section data-aos="fade-up" className="about" id="about">
      <div className="about_div">
        <h1 className="about_h1 mt-5">A PROPOS DE MOI...</h1>
        <span className="about_span">QUI SUIS-JE ?</span>
        <div className="about_div_img">
          <img className="about_img mt-5 mb-5" src={imgProfil} alt="" />
          <p className="about_p mt-3 mb-3">
            Autodidacte dans l'âme et passionné par le monde de l'image et du
            numérique, j'aime apprendre de nouvelles choses pour améliorer mes
            compétences. Ce que j'aime le plus, c'est l'art et la précision qui
            se cache derrière chaque design. Avec toutes mes capacités et mes
            connaissances, j'aurai le plus grand plaisir à me consacrer
            pleinement au développement de vos idées afin de les transformer en
            grands projets. <br />
            <i style={{ color: "gray", marginTop: "50px" }}>
              « La création d'un site web ou d'une application est un art. On
              peint le code comme un tableau, une œuvre prend vie lentement sous
              nos doigts. »
            </i>
          </p>
        </div>
        {/* <blockquote
          className="quote mb-5"
          cite="https://www.huxley.net/bnw/four.html"
        >
          <p>
            « La création d'un site web ou d'une application est un art. On
            peint le code comme un tableau, une œuvre prend vie lentement sous
            nos doigts. »
          </p>
          <footer>-Vincent Duguet</footer>
        </blockquote> */}
      </div>
    </section>
  );
};

export default About;
