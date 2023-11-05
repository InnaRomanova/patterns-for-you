import React from "react";
import "./Slide.css";
import Slide1 from "../../images/slide1.png";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";

function Slide() {
  return (
    <section className="slide">
      {/* <img className="slide__image" alt="картинка" src={Slide1} /> */}
      <div className="slide__container">
        <p className="slide__title">Patterns ForYou</p>
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
