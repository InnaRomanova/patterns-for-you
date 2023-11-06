import React from "react";
import "./News.css";
import NewsCard from "../../images/NewsCard.png";

function News() {
  return (
    <section className="news">
      <div className="news__container">
        <div className="news__container-text">
          <h2 className="news__title">Новинки!</h2>
          <p className="news__subtitle">Новые модели выкроек!</p>
        </div>
        <div className="news__cards">
          <div className="news__card">
            <img
              src={NewsCard}
              alt="картинка выкройки"
              className="card__image"
            />
            <div className="card__inform">
              <h3 className="card__name">Modern Kitchen</h3>
              <p className="card__katalog">женское платье</p>
              <span className="card__price">
                135.00 <p>Руб.</p>
              </span>
            </div>
            <div className="card__more">
              <p className="card__katalog">Подробнее</p>
              <button className="card__button-katalog"></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default News;
