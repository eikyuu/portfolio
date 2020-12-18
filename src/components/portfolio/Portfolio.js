import React from "react";
import "./Portfolio.css";
import abc from "./files/ABC.png";
import prime from "./files/prime.jpg";
import travel from "./files/travel.png";
import avidsen from "./files/avidsen.png";
import crm from "./files/crm.png";
import AOS from "aos";
import github from "./files/github.svg";
import domain from "./files/domain.svg";
import "aos/dist/aos.css";

const Portfolio = (props) => {
  AOS.init({
    duration: 2000,
    once: true,
  });

  const portfolio = [
    {
      id: 1,
      img: travel,
      title: "Av-travel",
      text:
        "Application de réservation de voyage (Symfony, API Platform, React)",
      git: "https://github.com/eikyuu/av-travel-react-symfony",
      link: "https://av-travel.herokuapp.com/#/",
    },
    {
      id: 2,
      img: crm,
      title: "Shym",
      text:
        "Plateforme de gestion de clients et de leurs factures via une API REST (Symfony, API Platform, React, Bootswatch)",
      git: "https://api-course-react-symfony.herokuapp.com/#/",
      link: "https://api-course-react-symfony.herokuapp.com/#/",
    },
    {
      id: 3,
      img: prime,
      title: "Prime",
      text:
        "Application vitrine et de réservation pour le restaurant prime (Angular, NodeJS)",
      git: "https://github.com/eikyuu/food-prime-angular",
    },
    {
      id: 4,
      img: avidsen,
      title: "Avidsen",
      text:
        "Intégration des maquettes pour l'application du groupe Avidsen (Symfony, Thelia)",
      git: "https://github.com/eikyuu/avidsen-files",
    },
    {
      id: 5,
      img: abc,
      title: "Reseau ABC",
      text:
        "Application destinée à promouvoir les compétences des professionnels du réseau ABC à travers un système de recommandation des prestations et compétences des membres du réseau.(Symfony, Bootstrap)",
      git: "https://github.com/eikyuu/Solution-ABC",
      link: "https://abc-reco.fr/",
    },
  ];

  return (
    <>
      <section id="portfolio" className="portfolio mt-5">
        <h1 data-aos="fade-up" className="portfolio_h1 mt-5 mb-5">
          Réalisations
        </h1>

        <div className="portfolio_block mt-3">
          {portfolio.map((port) => (
            <div key={port.id} className="portfolio_block_img">
              <img
                data-aos="fade-up"
                className="portfolio_img"
                src={port.img}
                alt=""
              />

              <div className="portofolio_text--hover">
                <div className="text--hover">
                  <a href={port.git} target="_blank" rel="noopener noreferrer">
                    <img
                      className="logo_portfolio"
                      src={github}
                      alt="github logo"
                      title="github"
                    />
                  </a>
                  {port.link ? (
                    <a
                      href={port.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        className="logo_portfolio ml-5"
                        src={domain}
                        alt="github logo"
                        title={port.title}
                      />
                    </a>
                  ) : null}
                  <p>
                    {port.title} <br /> {port.text}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
