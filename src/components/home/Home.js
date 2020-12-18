import React from "react";
import "./Home.css";
import pdf from "./files/vincentduguet.pdf";
import linkedin from "./files/linkedin.png";
import github from "./files/github.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = (props) => {
  const home = {
    h1: "Développeur Web",
    h2: "HTML & CSS - REACT - SYMFONY",
    p: "en cours de construction",
    a: "TÉLÉCHARGER CV",
  };

  AOS.init({
    duration: 2000,
    once: true,
  });

  const user = [
    {
      id: 101,
      email: "jack@dev.com",
      personalInfo: {
        name: "Jackr",
        address: {
          line1: "westwish st",
          line2: "washmasher",
          city: "wallas",
          state: "WX",
        },
      },
    },
  ];

  const getNestedObject = (nestedObj, pathArr) => {
    return pathArr.reduce(
      (obj, key) => (obj && obj[key] !== "undefined" ? obj[key] : undefined),
      nestedObj
    );
  };
  const city = getNestedObject(...user, ["personalInfo", "address", "city"]);
  console.log(city);

  return (
    <section id="home" className="home">
      <div data-aos="fade-right" className="home_block">
        <h1 className="home_block_h1">{home.h1}</h1>
        <h2 className="home_block_h2">{home.h2}</h2>
        <a
          style={{ textDecoration: "none", color: "white" }}
          href={pdf}
          download="CV Vincent duguet"
          className="mt-3 home_button"
        >
          {home.a}
        </a>
        <a href="https://www.linkedin.com/in/vincent-duguet/">
          <img
            className="ml-md-4 mr-md-4 mr-5 mt-5 mt-md-0 logo_home"
            src={linkedin}
            alt="linkedin logo"
            title="linkedin"
          />
        </a>
        <a href="https://github.com/eikyuu">
          <img
            className="logo_home mt-5 mt-md-0"
            src={github}
            alt="github logo"
            title="github"
          />
        </a>
      </div>
    </section>
  );
};

export default Home;
