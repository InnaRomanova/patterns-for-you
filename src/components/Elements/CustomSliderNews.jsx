import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "usehooks-ts";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../News/News.css";
import scrollLeft from "../../images/arrow_left.svg";
import scrollRight from "../../images/arrow_right.svg";

import NewsCard from "../../images/NewsCard.png";
import ButtonVectorLeft from "../Elements/ButtonVector";
import ButtonVectorLeftRight from "../Elements/ButtonVectorRight";

register();

const Swiper = ({ swiperArray }) => {
  const swiperElRef = useRef(null);
  const matches = useMediaQuery("(max-width: 1919px)");

  const handlePrev = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    // listen for Swiper events using addEventListener
    swiperElRef.current.addEventListener("progress", (e) => {
      const [swiper, progress] = e.detail;
    });

    swiperElRef.current.addEventListener("slidechange", (e) => {});
  }, []);

  return (
    <>
      {matches ? (
        <>
          {/* <div className="news__cards-list">
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
          </div> */}

          <div className="news__button">
            <button className="news__button-vector news__button-left">
              <ButtonVectorLeft />
            </button>
            <ButtonVectorLeftRight />
          </div>

          <div className="school__left" onClick={handlePrev}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollLeft}
            />
          </div>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="1"
            navigation="false"
            pagination="false"
          >
            {map(swiperArray, (teacher, index) => (
              <swiper-slide key={index}>
                <div className="news__cards">
                  <div className="news__card">
                    <img
                      src={teacher.image}
                      alt="картинка выкройки"
                      className="card__image"
                    />
                    <div className="card__inform">
                      <h3 className="card__inform-name">{teacher.name}</h3>
                      <p className="card__inform-katalog">{teacher.text}</p>
                      <span className="card__inform-price">
                        {teacher.price} Руб.
                      </span>
                    </div>
                    <div className="card__more">
                      <p className="card__more-katalog">{teacher.detailed}</p>
                      <button className="card__more-button-katalog"></button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="school__right" onClick={handleNext}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollRight}
            />
          </div>
        </>
      ) : (
        <>
          <div className="school__left" onClick={handlePrev}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollLeft}
            />
          </div>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
            navigation="false"
            pagination="false"
          >
            {map(swiperArray, (teacher, index) => (
              <swiper-slide key={index}>
                <div className="news__cards">
                  <div className="news__card">
                    <img
                      src={teacher.image}
                      alt="картинка выкройки"
                      className="card__image"
                    />
                    <div className="card__inform">
                      <h3 className="card__inform-name">{teacher.name}</h3>
                      <p className="card__inform-katalog">{teacher.text}</p>
                      <span className="card__inform-price">
                        {teacher.price}
                      </span>
                    </div>
                    <div className="card__more">
                      <p className="card__more-katalog">{teacher.detailed}</p>
                      <button className="card__more-button-katalog"></button>
                    </div>
                  </div>
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="school__right" onClick={handleNext}>
            <img
              className="school__scroll-image"
              alt="стрелка"
              src={scrollRight}
            />
          </div>
        </>
      )}
    </>
  );
};

export default Swiper;
