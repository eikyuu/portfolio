import React, { useState, useEffect } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Nav = (props) => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const currentPosition = window.pageYOffset;
      currentPosition <= scrollTop ? setScrolling(false) : setScrolling(true);
      setScrollTop(currentPosition < 0 ? 0 : currentPosition);
    };
    window.addEventListener("scroll", onScroll);
  });

  return (
    <nav
      className={
        scrolling
          ? "navbar navbar-expand-lg navbar-dark bg-primary navbar--hidden"
          : "navbar navbar-expand-lg navbar-dark bg-primary"
      }
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
