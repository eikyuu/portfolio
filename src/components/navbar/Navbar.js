import React, { Component } from "react";
import classnames from "classnames";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      prevScrollpos: window.pageYOffset,
      visible: true,
    };
  }

  // Adds an event listener when the component is mount.
  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
  }

  // Remove the event listener when the component is unmount.
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  // Hide or show the menu.
  handleScroll = () => {
    const { prevScrollpos } = this.state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };

  render() {
    return (
      <header>
        <nav
          className={classnames(
            "navbar navbar-expand-lg navbar-dark bg-primary",
            {
              "navbar--hidden": !this.state.visible,
            }
          )}
        >
          <AnchorLink className="navbar-brand" href="#home">
            Vincent Duguet
          </AnchorLink>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#skills">
                  Skills
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#portfolio">
                  Réalisations
                </AnchorLink>
              </li>
              <li className="nav-item active">
                <AnchorLink className="nav-link" href="#contact">
                  Contact
                </AnchorLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    );
  }
}
