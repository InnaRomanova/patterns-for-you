import React from "react";
import "./Slide.css";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";

function Slide() {
  return (
    <section className="slide">
      <div className="slide__container">
        <h1 className="slide__title">Patterns ForYou</h1>
        <p className="slide__subtitle">
          There are many variations of the passages of lorem Ipsum
          fromavailable,variations of the passages.
        </p>
        <button className="slide__button-katalog">
          В магазин
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

export default Slide;
