/* eslint-disable prettier/prettier */
import React, { useState } from "react";
import roi from "../images/roi.jpg";
import reine from "../images/reine.jpg";
import prince from "../images/prince.jpg";
import secondPrince from "../images/secondPrince.jpg";
import princesse from "../images/princesse.jpg";
import papi from "../images/papi.jpg";
import oncle from "../images/oncle.jpg";
import chancelier from "../images/chancelier.jpg";
import affaireetrangeres from "../images/affaireetrangeres.jpg";
import coiffeur from "../images/coiffeurroyal.jpg";
import fournisseur from "../images/fournisseur.jpg";
import instructeur from "../images/instructeur.jpg";
import pilier from "../images/pilier.jpg";
import pilier2 from "../images/pilier2.jpg";
import tavernier from "../images/tavernier.jpg";
import tresorier from "../images/tresorier.jpg";
import vomito from "../images/vomito.jpg";
import "../style/carrousel.css";

function Carousel() {
  const [currentImage, setCurrentImage] = useState(0);
  const images = [
    {
      id: 1,
      src: roi,
      title: "Le Roi Jessy",
      desc: "Le Roi, incontesté, qui préféra créer son Royaume de ses propres mains.",
    },
    {
      id: 2,
      src: reine,
      title: "La Reine Charlotte",
      desc: "La plus jeune des Océanides, déesse de la connaissance",
    },
    {
      id: 3,
      src: prince,
      title: "Le Prince Pierre-Yves",
      desc: "Le fils du roi, au destin tragique",
    },
    {
      id: 4,
      src: secondPrince,
      title: "Le Prince Rémi",
      desc: "Petit-fils du Roi, il construira un navire mythique",
    },
    {
      id: 5,
      src: princesse,
      title: "La Princesse Lucie",
      desc: "La Princesse, tombée amoureuse du héro Jason",
    },
    {
      id: 6,
      src: papi,
      title: "L'ancien José",
      desc: "Le Dieu Soleil, ayant quitté la Terre des Hommes",
    },
    {
      id: 7,
      src: oncle,
      title: "Le frère du Roi, Olivier",
      desc: "En guerre contre le Roi Jessy, il détronera son frère",
    },
  ];
  const handleNext = () => {
    if (currentImage === 6) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  };
  return (
    <div>
      <div className="carousel">
        <img src={images[currentImage].src} alt="" />
        <h2>{images[currentImage].title}</h2>
        <p>{images[currentImage].desc}</p>
      </div>
      <button type="button" onClick={handleNext}>
        Next
      </button>
      {currentImage === 0 && (
        <div className="related-carousel">
          <div className="test">
            <img src={tresorier} alt="" />
            <h3>Le Trésorier</h3>
          </div>
          <div className="test">
            <img src={affaireetrangeres} alt="" />
            <h3>Ministre des Affaires étrangères</h3>
          </div>
        </div>
      )}
      {currentImage === 1 && (
        <div className="related-carousel">
          <div className="test">
          <img src={coiffeur} alt="" />
          <h3>Le Coiffeur Royal</h3></div>
          <div className="test">
          <img src={chancelier} alt="" />
          <h3>Le Chancelier</h3></div>
        </div>
      )}
      {currentImage === 2 && (
        <div className="related-carousel">
          <div className="test">
          <img src={instructeur} alt="" />
          <h3>L'instructeur de Combat</h3></div>
          <div className="test">
          <img src={chancelier} alt="" />
          <h3>Le Chancelier</h3></div>

        </div>
      )}
      {currentImage === 3 && (
        <div className="related-carousel">
          <div className="test">
            <img src={chancelier} alt="" />
            <h3>Le Chancelier</h3>
          </div>
          <div className="test">
            <img src={fournisseur} alt="" />
            <h3>Le Fournisseur</h3>
          </div>
        </div>
      )}
      {currentImage === 4 && (
        <div className="related-carousel">
          <div className="test">
          <img src={coiffeur} alt="" />
          <h3>Le coiffeur Royal</h3></div>
        </div>
      )}
      {currentImage === 5 && (
        <div className="related-carousel">
          <div className="test">
          <img src={chancelier} alt="" />
          <h3>Le Chancelier</h3></div>
        </div>
      )}
      {currentImage === 6 && (
        <div className="related-carousel">
          <div className="test">
          <img src={tavernier} alt="" />
          <h3>Le Tavernier</h3></div>
          <div className="test">
          <img src={pilier} alt="" />
          <h3>Pilier de Bar</h3></div>
          <div className="test">
          <img src={pilier2} alt="" />
          <h3>Pilier de Bar n°2</h3></div>
          <div className="test">
          <img src={vomito} alt="" />
          <h3>Consommateur</h3></div>
        </div>
      )}
    </div>
  );
}

export default Carousel;
