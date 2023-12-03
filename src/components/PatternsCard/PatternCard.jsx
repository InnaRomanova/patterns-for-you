import React from "react";
import "./PatternCard.css";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";
import Swiper from "swiper";


register();

function PatternCard({patternArray}) {
  const swiperElRef = useRef(null);
  const matches = useMediaQuery({ query: "(max-width: 1440px)" });
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
            slides-per-view="3"
            navigation="false"
            pagination="false"
          >
    {map(patternArray, (arrPatterns, index) => (
       <swiper-slide key={index}>
    <li className="pattern__list-item" key={index}>
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
               </>
    ):(
      <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
            navigation="false"
            pagination="false"
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
               </>
    )}
    </>)}
  

export default PatternCard;
