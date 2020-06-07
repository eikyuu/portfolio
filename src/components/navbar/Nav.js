import React, { useState, useEffect } from "react";
import classnames from "classnames";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = (props) => {
  const [state, setState] = useState({
    prevScrollpos: window.pageYOffset,
    visible: true,
  });

  useEffect(() => {
    window.addEventListener("scroll", handleScroll());
  }, [state]);

  const handleScroll = () => {
    const { prevScrollpos } = state;

    const currentScrollPos = window.pageYOffset;
    const visible = prevScrollpos > currentScrollPos;

    setState({
      prevScrollpos: currentScrollPos,
      visible,
    });
  };
  return (
    <nav
      className={classnames("navbar navbar-expand-lg navbar-dark bg-primary", {
        "navbar--hidden": !setState.visible,
      })}
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
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
