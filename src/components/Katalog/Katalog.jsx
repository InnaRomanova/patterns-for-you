import React from "react";
import "./Katalog.css";
import Card from "../Card/Card";
import { Link } from "react-router-dom";
import { arrReviews } from "../Constants/Objects/Massiv";

function Katalog() {
  return (
    <section className="katalog">
      <div className="katalog__container">
        <div className="katalog__text">
          <h2 className="news__title ">Выкройки по категориям</h2>
          <h3 className="katalog__subtitle">Женская одежда</h3>
        </div>
        <ul className="katalog-cards">
          <Card swiperArray={arrReviews} />
        </ul>
        <Link to="/katalog" className="katalog__block">
          <button className="katalog__button-over">Перейти в каталог</button></Link>

      </div>
    </section>
  );
}

export default Katalog;
