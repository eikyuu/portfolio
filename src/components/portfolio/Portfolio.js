import React from "react";
import "./Portfolio.css";
import abc from "./files/ABC.png";
import prime from "./files/prime.jpg";
import travel from "./files/travel.jpg";
import avidsen from "./files/avidsen.png";
import crm from "./files/crm.png";
import AOS from "aos";
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
        "Application en cours de développement de réservation de voyage (Symfony, API Platform, React)",
      git: "https://github.com/eikyuu/av-travel-react-symfony",
    },
    {
      id: 2,
      img: crm,
      title: "Shym",
      text:
        "Plateforme de gestion de clients et de leurs factures via une API REST (Symfony, API Platform, React, Bootswatch)",
      git: "https://github.com/eikyuu/api-course",
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
      text: "Intégration pour l'application du groupe Avidsen (Symfony)",
      git: "https://github.com/eikyuu/avidsen-files",
    },
    {
      id: 5,
      img: abc,
      title: "Reseau ABC",
      text:
        "Application destinée à promouvoir les compétences des professionnels du réseau ABC à travers un système de recommandation des prestations et compétences des membres du réseau et de gestions des événements.(Symfony, Bootstrap)",
      git: "https://github.com/eikyuu/Solution-ABC",
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
              <a
                style={{ textDecoration: "none" }}
                title="Code source"
                target="_blank"
                rel="noopener noreferrer"
                href={port.git}
              >
                <img
                  data-aos="fade-up"
                  className="portfolio_img"
                  src={port.img}
                  alt=""
                />

                <div className="portofolio_text--hover">
                  <div className="text--hover">
                    {port.title} <br /> {port.text}
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default Portfolio;
