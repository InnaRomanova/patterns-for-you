import React from "react";
import "./Pattern.css";
import PatternCard from "./PatternCard";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import { arrPatterns } from "../Constants/Objects/Massiv";
import { Link } from 'react-router-dom';


function Pattern() {


  const patterns = [];

  arrPatterns.forEach((pattern, index) => {
    patterns.push(
      <>
        <li className="pattern__list-item" key={index}>
          <img src={pattern.image} alt="платье" className="pattern__image" />
          <div className="pattern__inform">
            <h3 className="card__inform-name">{pattern.name}</h3>
            <p className="card__inform-katalog">{pattern.text}</p>
            <span className="card__inform-price">{pattern.price} Руб.</span>
          </div>
        </li>
      </>
    );
  });



  return (
    <section className="pattern">
      <div className="pattern__container">
        <h2 className="news__title">Каталог выкроек</h2>
        <PatternCard patternArray={arrPatterns} />
        <Link to="/katalog" className="pattern__link">
          <button className="slide__button-katalog pattern__button">
            В каталог
            <img
              src={buttonKatalogSlide}
              alt="В каталог"
              className="slide__vector"
            />
          </button></Link>
      </div>
    </section>
  );
}

export default Pattern;
