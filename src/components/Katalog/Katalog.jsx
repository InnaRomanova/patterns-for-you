import React from "react";
import "./Katalog.css";
import CardButton from "../Elements/CardButton";
import katalogImage1 from "../../images/katalogImage1.png";
import Card from "../Card/Card";

function Katalog() {
  const arrReviews = [
    {
      id: 1,
      image: katalogImage1,
      name: "Платья",
      detailed: "Decor / Подробнее",
    },
    {
      id: 2,
      image: katalogImage1,
      name: "Жакеты",
      detailed: "Decor / Подробнее",
    },
    {
      id: 3,
      image: katalogImage1,
      name: "Юбки",
      detailed: "Decor / Подробнее",
    },
    {
      id: 4,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor / Подробнее",
    },
    {
      id: 5,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor / Подробнее",
    },
    {
      id: 6,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor / Подробнее",
    },
  ];

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
        <button className="katalog__button-over">Перейти в каталог</button>
      </div>
    </section>
  );
}

export default Katalog;
