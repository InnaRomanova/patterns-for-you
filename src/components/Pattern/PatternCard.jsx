import React from "react";
import map from "lodash/map";
import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import ButtonVectorLeft from "../Elements/ButtonVectorLeft";
import ButtonVectorRight from "../Elements/ButtonVectorRight";
import { Link } from "react-router-dom";


register();

function PatternCard({ patternArray }) {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(5);

  const handlePrev = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!swiperElRef.current) return;
    swiperElRef.current.swiper.slideNext();
  }, []);

  useEffect(() => {
    function handleResize() {
      const display = window.innerWidth;
      if (display > 1920) {
        setSlidesPerView(5);
      } else if (display > 1475) {
        setSlidesPerView(4);
      } else if (display > 1139) {
        setSlidesPerView(3);
      } else if (display > 654) {
        setSlidesPerView(2);
      } else if (display < 654) {
        setSlidesPerView(1);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="false"
        pagination="false"
      >
        {map(patternArray, (arrPatterns, index) => (
          <swiper-slide key={index}>
            <ul className="pattern__list">
              <li className="pattern__list-item" key={index}>
                <Link to="/author" className="patterns__block">
                  <img src={arrPatterns.image} alt="одежда" className="pattern__image" /></Link>
                <div className="pattern__inform">
                  <h3 className="card__inform-name">{arrPatterns.name}</h3>
                  <p className="card__inform-katalog">{arrPatterns.text}</p>
                  <span className="card__inform-price">{arrPatterns.price} Руб.</span>
                </div>
              </li>
            </ul>
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
  )
}


export default PatternCard;
