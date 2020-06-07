import React from "react";
import "./Skills.css";
import reactLogo from "./reactLogo.svg";

const Skills = (props) => {
  return (
    <section className="skills container">
      <h1 className="skills_h1">Skills</h1>
      <div className="row">
        <img className="col-6" src={reactLogo} alt="" />
        <img className="col-6" src={reactLogo} alt="" />
        <img className="col-6" src={reactLogo} alt="" />
        <img className="col-6" src={reactLogo} alt="" />
        <img className="col-6" src={reactLogo} alt="" />
        <img className="col-6" src={reactLogo} alt="" />
      </div>
    </section>
  );
};

export default Skills;
