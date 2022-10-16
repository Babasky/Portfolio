import React, { useState } from "react";

function ServicesExperience() {
  const [services] = useState([
    {
      icon: "fa-paintbrush",
      title: "UI Design",
      desc: " je fais le maquettage, le design et le prototypage.",
      active: false,
    },
    {
      icon: "fa-pen-to-square",
      title: "Développement web",
      desc: "Je dévéloppe des sites et applications web.",
      active: true,
    },
    {
      icon: "fa-ruler",
      title: "Développement mobile",
      desc: "Je conçois également des applications mobiles.",
      active: false,
    },
  ]);
  return (
    <section className="services-experience">
      <div className="container">
        <div className="services" id="services">
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? "active" : ""}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className="btn">Détails</button>
            </div>
          ))}
        </div>
        <div className="experiences" id="experiences">
          <div className="experience">
            <h3>01</h3>
            <p>Année d'expérience</p>
          </div>
          <div className="portfolios">
            <div className="portfolio">
              <h4>6</h4>
              <p>Clients</p>
            </div>
            <div className="portfolio">
              <h4>01</h4>
              <p>Années d'expérience</p>
            </div>
            <div className="portfolio">
              <h4>5+</h4>
              <p>Projets accomplis</p>
            </div>
            <div className="portfolio">
              <h4>10</h4>
              <p>Réalisations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
