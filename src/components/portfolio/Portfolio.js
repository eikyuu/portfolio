import React from "react";
import "./Portfolio.css";
import abc from "./ABC.png";
import prime from "./prime.jpg";
import travel from "./travel.jpg";
import avidsen from "./avidsen.png";
import crm from "./crm.png";

const Portfolio = (props) => {
  const portfolio = [
    {
      id: 1,
      img: abc,
      title: "Reseau ABC",
      text:
        "Application destinée à promouvoir les compétences des professionnels du réseau ABC à travers un système de recommandation des prestations et compétences des membres du réseau et de gestions des événements.(Symfony, Bootstrap)",
    },
    {
      id: 2,
      img: prime,
      title: "Prime",
      text:
        "Application vitrine et de réservation pour le restaurant prime (Angular, NodeJS)",
    },
    {
      id: 3,
      img: avidsen,
      title: "Avidsen",
      text: "Application présentation du groupe Avidsen (Symfony, Thelia)",
    },
    {
      id: 4,
      img: travel,
      title: "Av-travel",
      text:
        "Application de réservation de voyage (Symfony, API Platform, React, Bootswatch)",
    },
    {
      id: 5,
      img: crm,
      title: "API-CRM",
      text:
        "Plateforme de gestion de clients et de leurs factures via une API REST (Symfony, API Platform, React, Bootswatch)",
    },
  ];
  return (
    <>
      <section id="portfolio" className="portfolio">
        <h1 className="portfolio_h1 mt-5 mb-5">Réalisations</h1>
        <div className="portfolio_block mt-3">
          {portfolio.map((port) => (
            <div key={port.id} className="portfolio_block_img">
              <img className="portfolio_img" src={port.img} alt="" />
              <div className="portofolio_text--hover">
                <div className="text--hover">
                  {port.title} <br /> {port.text}
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
