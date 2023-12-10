import React from "react";
import "./Pattern.css";
import dress from "../../images/pattern-dress.png";
import coat from "../../images/pattern-coat.png";
import blouse from "../../images/pattern-blouse.png";
import PatternCard from "../PatternsCard/PatternCard";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";


function Pattern() {
  const arrPatterns = [
    {
      id: 1,
      image: dress,
      name: "Платье Очарованье",
      text: "женское платье",
      price: 135.00,
    },
    {
      id: 2,
      image: coat,
      name: "Пальто очень-весная 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
    },
    {
      id: 3,
      image: dress,
      name: "Платье Романтика",
      text: "женское платье",
      price: 135.00,
    },
    {
      id: 4,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
    },
    {
      id: 4,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
    },
  ];


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
        <button className="slide__button-katalog pattern__button">
          В каталог
          <img
            src={buttonKatalogSlide}
            alt="В каталог"
            className="slide__vector"
          />
        </button>
        </div>
    </section>
  );
}

export default Pattern;
