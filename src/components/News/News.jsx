import React from "react";
import "./News.css";
import NewsCard from "../../images/NewsCard.png";
import ButtonVector from "../Elements/ButtonVector";
import ButtonVectorLeft from "../Elements/ButtonVector";
import ButtonVectorLeftRight from "../Elements/ButtonVectorRight";

function News() {
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
          {/* <button className="news__button-vector news__button-right"></button> */}
        </div>
      </div>
    </section>
  );
}

export default News;
