import React from "react";
import "./Contact.scss";

const Contact = () => {
  return (
    <div className="footer" id="contact">
      <div className="contain">
        <div className="coll">
          <h1>Contact</h1>
          <ul>
            <li>Vincent Duguet</li>
            <li>Email : v.duguet.dev@gmail.com</li>
            <li>06.59.63.03.26</li>
          </ul>
        </div>
        <div className="coll social">
          <h1>Social</h1>
          <ul>
            <li>
              <img src="https://svgshare.com/i/5fq.svg" alt="img" />
            </li>
            <li>
              <img src="https://svgshare.com/i/5eA.svg" alt="img" />
            </li>
          </ul>
        </div>
        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Contact;
