/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";

function Footer() {
  return (
    <footer>
      <div className="container">
        <span className="logo">Boureima.</span>
        <div className="links">
          <a href="#">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="#">
            <i className="fab fa-whatsapp"></i>
          </a>
          <a href="#">
            <i className="fab fa-linkedin"></i>
          </a>
        </div>
        <p className="copyright">
          <i className="fas fa-heart"></i>
          Crée par Boureima MAIGA
        </p>
      </div>
    </footer>
  );
}

export default Footer;
