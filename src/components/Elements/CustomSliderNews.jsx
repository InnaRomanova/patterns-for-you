import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../News/News.css";
import ButtonVectorLeft from "./ButtonVectorLeft";
import ButtonVectorRight from "../Elements/ButtonVectorRight";

register();

function SwiperSliderNews ({ swiperArray }) {
  const swiperElRef = useRef(null);
  const matches = useMediaQuery({ query: "(min-width: 1570px)" });
  const mobileMatches = useMediaQuery({ query: "(max-width: 759px)" });

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
          <swiper-container
            ref={swiperElRef}
            slides-per-view="4"
            navigation="false"
            pagination="false"
          >
            {map(swiperArray, (teacher, index) => (
              <swiper-slide key={index}>
                <div className="news__cards-list">
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
                </div>
              </swiper-slide>
            ))}
          </swiper-container>
          <div className="news__button">
            <button
              className="news__button-vector news__button-left"
              onClick={handlePrev}
            >
              <ButtonVectorLeft />
            </button>
            <button
              className="news__button-vector news__button-right"
              onClick={handleNext}
            >
              <ButtonVectorRight />
            </button>
          </div>
        </>
      ) : (
        <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
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
          <div className="news__button">
            <button
              className="news__button-vector news__button-left"
              onClick={handlePrev}
            >
              <ButtonVectorLeft />
            </button>
            <button
              className="news__button-vector news__button-right"
              onClick={handleNext}
            >
              <ButtonVectorRight />
            </button>
          </div>
        </>
      )}
    </>
  );
};

export default SwiperSliderNews;
