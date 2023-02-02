import React from "react";
import "../style/navbar.css";
import PropTypes from "prop-types";
import crocus from "../images/crocus.png";

export default function Navbar({ setPage }) {
  return (
    <header className="header">
      <img src={crocus} alt="accueil" className="imageAccueil" />
      <h1 className="titre">Bienvenue au Royaume de Colchis</h1>
      <button type="button" onClick={() => setPage("tresor")}>
        Trésorerie
      </button>
    </header>
  );
}
Navbar.propTypes = {
  setPage: PropTypes.func.isRequired,
};
