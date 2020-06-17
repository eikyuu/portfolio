import React from "react";
import "./About.css";
import linkedin from "./linkedin.svg";
const About = (props) => {
  return (
    <div className="about">
      <div className="about_block">
        <img src={linkedin} alt="" />
      </div>
    </div>
  );
};

export default About;
