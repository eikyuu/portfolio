import React from "react";
import "./Skills.css";
import reactLogo from "./reactLogo.svg";
import cssLogo from "./cssLogo.svg";
import htmlLogo from "./htmlLogo.svg";
import javascriptLogo from "./javascriptLogo.svg";
import phpLogo from "./phpLogo.svg";
import symfonyLogo from "./symfony.svg";
import tsLogo from "./tsLogo.svg";
import apiLogo from "./apiplatform.png";
import gitLogo from "./git.png";
import linuxLogo from "./linux.svg";
import mysqlLogo from "./mysql.svg";
import scrumLogo from "./scrum.png";
const Skills = (props) => {
  return (
    <>
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
    </>
  );
};

export default Skills;
