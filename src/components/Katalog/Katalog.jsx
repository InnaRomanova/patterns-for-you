import React from "react";
import "./Katalog.css";
import CardButton from "../Elements/CardButton";
import katalogImage1 from "../../images/katalogImage1.png";

function Katalog() {
  return (
    <section className="katalog">
      <div className="katalog__container">
        <div className="katalog__text">
          <h2 className="news__title ">Выкройки по категориям</h2>
          <h3 className="katalog__subtitle">Женская одежда</h3>
        </div>
        <div className="katalog-cards">
          <div className="katalog-card">
            <img
              src={katalogImage1}
              alt="фото выкройки"
              className="katalog-card__image"
            />
            <div className="katalog-card__info">
              <div className="katalog-card__info-text">
                <h4 className="katalog-card__name">Платья</h4>
                <p className="katalog-card__detailed">Decor / Подробнее</p>
              </div>
              <CardButton />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Katalog;
