/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Banner() {
  return (
    <section className="banner" id="banner">
      <div className="container">
        <div className="banner-wrapper">
          <div className="banner-img">
            <img src="/person.png" alt="" />
          </div>
          <div className="banner-content">
            <h6>Hello, je suis Boureima</h6>
            <h3>Développeur web et mobile junior</h3>
            <p>
              Détenteur d'une certification RNCP en développement web et mobile.
              J'ai travaillé sur plusieurs projets web et mobile de la conception à la réalisation
              pour en savoir d'avantage cliquez sur l'onglet projets.
            </p>
            <a className="btn" href="https://boureimamaiga.ml" target={'_blank'}>
              A propos de moi
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
