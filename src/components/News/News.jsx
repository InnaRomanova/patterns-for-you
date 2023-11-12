import React from "react";
import "./News.css";
import NewsCard from "../../images/NewsCard.png";
import ButtonVector from "../Elements/ButtonVector";
import ButtonVectorLeft from "../Elements/ButtonVector";
import ButtonVectorLeftRight from "../Elements/ButtonVectorRight";

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
  ];

  const reviews = [];

  arrReviews.forEach((rewiew, index) => {
    reviews.push(
      <>
        <div className="school__user-item">
          <img className="school__image" src={rewiew.image} />
          <div className="school__content">
            <h4 className="school__name">{rewiew.name}</h4>
            <p className="school__post">{rewiew.text}</p>
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
        <div className="news__cards-list">
          <div className="news__cards">
            <div className="news__card">
              <img
                src={NewsCard}
                alt="картинка выкройки"
                className="card__image"
              />
              <div className="card__inform">
                <h3 className="card__inform-name">Modern Kitchen</h3>
                <p className="card__inform-katalog">женское платье</p>
                <span className="card__inform-price">135.00 Руб.</span>
              </div>
              <div className="card__more">
                <p className="card__more-katalog">Подробнее</p>
                <button className="card__more-button-katalog"></button>
              </div>
            </div>
          </div>
          <div className="news__cards">
            <div className="news__card">
              <img
                src={NewsCard}
                alt="картинка выкройки"
                className="card__image"
              />
              <div className="card__inform">
                <h3 className="card__inform-name">Modern Kitchen</h3>
                <p className="card__inform-katalog">женское платье</p>
                <span className="card__inform-price">135.00 Руб.</span>
              </div>
              <div className="card__more">
                <p className="card__more-katalog">Подробнее</p>
                <button className="card__more-button-katalog"></button>
              </div>
            </div>
          </div>
          <div className="news__cards">
            <div className="news__card">
              <img
                src={NewsCard}
                alt="картинка выкройки"
                className="card__image"
              />
              <div className="card__inform">
                <h3 className="card__inform-name">Modern Kitchen</h3>
                <p className="card__inform-katalog">женское платье</p>
                <span className="card__inform-price">135.00 Руб.</span>
              </div>
              <div className="card__more">
                <p className="card__more-katalog">Подробнее</p>
                <button className="card__more-button-katalog"></button>
              </div>
            </div>
          </div>
          <div className="news__cards">
            <div className="news__card">
              <img
                src={NewsCard}
                alt="картинка выкройки"
                className="card__image"
              />
              <div className="card__inform">
                <h3 className="card__inform-name">Modern Kitchen</h3>
                <p className="card__inform-katalog">женское платье</p>
                <span className="card__inform-price">135.00 Руб.</span>
              </div>
              <div className="card__more">
                <p className="card__more-katalog">Подробнее</p>
                <button className="card__more-button-katalog"></button>
              </div>
            </div>
          </div>
        </div>
        <div className="news__button">
          <button className="news__button-vector news__button-left">
            <ButtonVectorLeft />
          </button>
          <ButtonVectorLeftRight />
        </div>
      </div>
    </section>
  );
}

export default News;
