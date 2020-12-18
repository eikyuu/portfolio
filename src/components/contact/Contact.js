import React from "react";
import "./Contact.css";

export default class extends React.Component {
  render() {
    return (
      <div className="footer" id="contact">
        <div className="contain">
          <div className="col">
            <h1>Contact</h1>
            <ul>
              <li>Vincent Duguet</li>
              <li>Email : v.duguet.dev@gmail.com</li>
              <li>06.59.63.03.26</li>
            </ul>
          </div>
          <div className="col social">
            <h1>Social</h1>
            <ul>
              <li>
                <img src="https://svgshare.com/i/5fq.svg" />
              </li>
              <li>
                <img src="https://svgshare.com/i/5eA.svg" />
              </li>
              <li>
                <img src="https://svgshare.com/i/5f_.svg" />
              </li>
            </ul>
          </div>
          <div className="clearfix"></div>
        </div>
      </div>
    );
  }
}
