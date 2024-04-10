import React from "react";
import "./Slide.css";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import { Link } from "react-router-dom";

function Slide() {
  return (
    <section className="slide">
      <div className="slide__container">
        <h1 className="slide__title">Patterns ForYou</h1>
        <p className="slide__subtitle">
          В этом сайте представлены выкройки, выполненные на заказ
          с инструкцией и описаниями для самостоятельного пошива на дому.
        </p>
        <Link to="/katalog" className="slide__button-link">
          <button className="slide__button-katalog">
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

export default Slide;
