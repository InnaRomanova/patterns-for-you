import React from "react";
import "./News.css";
import SwiperSliderNews from "../Elements/SwiperSliderNews";
import { useLocation } from 'react-router-dom';
import get from "lodash/get";
import { arrClothes } from "../Constants/Objects/Massiv";
import { arrReviews } from "../Constants/Objects/NewMassiv";

function News() {
  // const location = useLocation();
  // const routeSelectedKey = get(location, "pathname").split("/").at(2);
  // const routeValueId = get(location, "pathname").split("/").at(-1);
  // const selectedCard = arrClothes.filter((item) => item.key === routeSelectedKey);
  // const cardValue = selectedCard[0].values.filter((item) => item.id === Number(routeValueId));

  // console.log(cardValue)
  const reviews = [];

  arrReviews.forEach((rewiew, index) => {
    reviews.push(
      <>
        <div className="news__cards">
          <div className="news__card">
            <img
              src={rewiew.image}
              alt="картинка выкройки"
              className="card__image"
            />
            <div className="card__inform">
              <h3 className="card__inform-name">{reviews.name}</h3>
              <p className="card__inform-katalog">{reviews.text}</p>
              <span className="card__inform-price">{reviews.price} Руб.</span>
            </div>
            <div className="card__more">
              <p className="card__more-katalog">Подробнее</p>
              <button className="card__more-button-katalog"></button>
            </div>
          </div>
        </div>
      </>
    );
  });

  return (
    <section className="news">
      <div className="news__container">
        <div className="news__container-text">
          <h2 className="news__title">Новинки!</h2>
          <p className="news__subtitle">Новые модели выкроек!</p>
        </div>
        <SwiperSliderNews swiperArray={arrReviews} />
      </div>
    </section>
  );
}

export default News;
