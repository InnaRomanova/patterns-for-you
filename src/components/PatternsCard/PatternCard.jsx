import React from "react";
import "./PatternCard.css";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";
import Swiper from "swiper";
import ButtonVectorLeft from "../Elements/ButtonVectorLeft";
import ButtonVectorRight from "../Elements/ButtonVectorRight";


register();

function PatternCard({patternArray}) {
  const swiperElRef = useRef(null);
  const matches = useMediaQuery({ query: "(min-width: 1920px)" });
  const mobileMatches = useMediaQuery({ query: "(max-width: 1442px)" });

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
            slides-per-view="5"
            navigation="false"
            pagination="false"
          >
    {map(patternArray, (arrPatterns, index) => (
       <swiper-slide key={index}>
          <ul className="pattern__list">
    <li className="pattern__list-item" key={index}>
        <img src={arrPatterns.image} alt="платье" className="pattern__image" />
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
    ):
    (
      <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="4"
            navigation="false"
            pagination="false"
            className="pattern__swiper"
          >
    {map(patternArray, (arrPatterns, index) => (
      <swiper-slide key={index}>
    <li className="pattern__list-item" >
                <img src={arrPatterns.image} alt="платье" className="pattern__image" />
            <div className="pattern__inform">
              <h3 className="card__inform-name">{arrPatterns.name}</h3>
              <p className="card__inform-katalog">{arrPatterns.text}</p>
              <span className="card__inform-price">{arrPatterns.price} Руб.</span>
            </div>
            </li>
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
    {/* {mobileMatches ? (
      <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            navigation="false"
            pagination="false"
            className="pattern__swiper"
          >
    {map(patternArray, (arrPatterns, index) => (
      <swiper-slide key={index}>
    <li className="pattern__list-item" >
                <img src={arrPatterns.image} alt="платье" className="pattern__image" />
            <div className="pattern__inform">
              <h3 className="card__inform-name">{arrPatterns.name}</h3>
              <p className="card__inform-katalog">{arrPatterns.text}</p>
              <span className="card__inform-price">{arrPatterns.price} Руб.</span>
            </div>
            </li>
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
            slides-per-view="2"
            navigation="false"
            pagination="false"
            className="pattern__swiper"
          >
    {map(patternArray, (arrPatterns, index) => (
      <swiper-slide key={index}>
    <li className="pattern__list-item" >
                <img src={arrPatterns.image} alt="платье" className="pattern__image" />
            <div className="pattern__inform">
              <h3 className="card__inform-name">{arrPatterns.name}</h3>
              <p className="card__inform-katalog">{arrPatterns.text}</p>
              <span className="card__inform-price">{arrPatterns.price} Руб.</span>
            </div>
            </li>
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
    )} */}
    </>
    )}
  

export default PatternCard;
