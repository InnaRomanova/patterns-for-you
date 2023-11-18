import React from "react";
import "./News.css";
import NewsCard from "../../images/NewsCard.png";
import SwiperSliderNews from "../Elements/CustomSliderNews";

function News() {
  const arrReviews = [
    {
      id: 1,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
    {
      id: 2,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
    {
      id: 3,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
    {
      id: 4,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
    {
      id: 4,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
    {
      id: 4,
      image: NewsCard,
      name: "Modern Kitchen",
      text: "женское платье",
      price: 135.0,
      detailed: "Подробнее",
    },
  ];

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
              <p className="card__more-katalog">{reviews.detailed}</p>
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
