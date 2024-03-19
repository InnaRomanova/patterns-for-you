import React from "react";
import "../Katalog/Katalog.css";
import CardButton from "../Elements/CardButton";
import map from "lodash/map";
import { Link } from "react-router-dom";

function Card({ swiperArray }) {

  return (
    <>
      <ul className="katalog-cards">
        {map(swiperArray, (arrCards, index) => (
          <li className="katalog-card" key={index}>
            <Link to="/katalog" className="new__more-link">
              <img
                src={arrCards.image}
                alt="картинка выкройки"
                className="katalog-card__image"
              /></Link>
            <div className="katalog-card__info">
              <div className="katalog-card__info-text">
                <Link to="/katalog" className="new__more-link"><h4 className="katalog-card__name">{arrCards.titles}</h4>
                  <p className="katalog-card__detailed">{arrCards.detailed} / Подробнее</p></Link>
              </div>
              <Link to="/katalog" className="new__more-link"><CardButton /></Link>
            </div>
          </li >
        ))
        }
      </ul>
    </>
  );
}
export default Card;
