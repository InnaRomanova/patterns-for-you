import React from "react";
import "../Katalog/Katalog.css";
import CardButton from "../Elements/CardButton";
import map from "lodash/map";

function Card({ swiperArray }) {

  return (
    <>
      {map(swiperArray, (arrCards, index) => (
        <li className="katalog-card" key={index}>
          <img
            src={arrCards.image}
            alt="картинка выкройки"
            className="katalog-card__image"
          />
          <div className="katalog-card__info">
            <div className="katalog-card__info-text">
              <h4 className="katalog-card__name">{arrCards.name}</h4>
              <p className="katalog-card__detailed">{arrCards.detailed}</p>
            </div>
            <CardButton />
          </div>
        </li>
      ))}
    </>
  );
}
export default Card;
