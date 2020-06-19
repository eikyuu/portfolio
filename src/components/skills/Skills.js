import React from "react";
import "./Skills.css";
import reactLogo from "./files/reactLogo.svg";
import cssLogo from "./files/cssLogo.svg";
import htmlLogo from "./files/htmlLogo.svg";
import javascriptLogo from "./files/javascriptLogo.svg";
import phpLogo from "./files/phpLogo.svg";
import symfonyLogo from "./files/symfony.svg";
import tsLogo from "./files/tsLogo.svg";
import apiLogo from "./files/api.svg";
import gitLogo from "./files/Git.svg";
import linuxLogo from "./files/linux.svg";
import mysqlLogo from "./files/mysql.svg";
import scrumLogo from "./files/scrum.svg";
import AOS from "aos";
import "aos/dist/aos.css";
const Skills = (props) => {
  AOS.init({
    duration: 2000,
    once: true,
  });
  return (
    <div data-aos="fade-up">
      <h1 className="skills_h1 mt-5 mb-3">Skills</h1>
      <section id="skills" className="skills container">
        <div className="row mt-5 skills_div">
          <img
            className="col-6 col-xl-2 mb-3"
            src={reactLogo}
            title="React"
            alt="Logo React"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={symfonyLogo}
            title="Symfony"
            alt="Logo Symfony"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={javascriptLogo}
            title="JavaScript"
            alt="Logo JavaScript"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={phpLogo}
            title="PHP"
            alt="Logo PHP"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={htmlLogo}
            title="Html"
            alt="Logo Html"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={cssLogo}
            title="Css"
            alt="Logo Css"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={tsLogo}
            title="TypeScript"
            alt="Logo typeScript"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={apiLogo}
            title="Apiplatform"
            alt="Logo Apiplatform"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={gitLogo}
            title="Git"
            alt="Logo Git"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={linuxLogo}
            title="Linux"
            alt="Logo Linux"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={mysqlLogo}
            title="Mysql"
            alt="Logo Mysql"
          />
          <img
            className="col-6 col-xl-2 mb-3"
            src={scrumLogo}
            title="Scrum"
            alt="Logo Scrum"
          />
        </div>
      </section>
    </div>
  );
};

export default Skills;
