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
      img: abc,
      title: "Reseau ABC",
      text:
        "Application destinée à promouvoir les compétences des professionnels du réseau ABC à travers un système de recommandation des prestations et compétences des membres du réseau et de gestions des événements.(Symfony, Bootstrap)",
    },
    {
      img: prime,
      title: "Prime",
      text:
        "Application vitrine et de réservation pour le restaurant prime (Angular, NodeJS)",
    },
    {
      img: avidsen,
      title: "Avidsen",
      text:
        "Application vitrine (e-commerce) et de présentation de du groupe Avidsen (Symfony, Thelia)",
    },
    {
      img: travel,
      title: "Av-travel",
      text:
        "Application de réservation de voyage (Symfony, API Platform, React, Bootswatch)",
    },
    {
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
        <div className="portfolio_block">
          {portfolio.map((port) => (
            <div className="portfolio_block_img">
              <img className="portfolio_img mb-3 ml-1" src={port.img} alt="" />
              <div class="portofolio_text--hover">
                <div class="text--hover">
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
