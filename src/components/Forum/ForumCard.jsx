import React from "react";
import "./Forum.css";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";
import CardButton from "../Elements/CardButton";
import CardButtonLeft from "../Elements/CardButtonLeft";

register();

function ForumCard({forumArray}) {
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

    // const htmlContent = {
    // {map(forumArray, (arrPatterns, index) => (
    //    <swiper-slide key={index}>
    //       <ul className="forum__cards">
    //         <li className="forum__card">
    //             <a href="#" className="forum__link">
    //                 <img src={arrPatterns.image} alt="" className="forum__link-image" />
    //             </a>
    //         </li>
    //     </ul>
    //         </swiper-slide>
    //         ))}}

    // const matchesItem = 
  

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
            {/* <htmlContent /> */}
    {map(forumArray, (arrPatterns, index) => (
       <swiper-slide key={index}>
          <ul className="forum__cards">
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={arrPatterns.image} alt="" className="forum__link-image" />
                </a>
            </li>
        </ul>
            </swiper-slide>
            ))}
               </swiper-container>
               <div className="forum__buttons">
            <CardButtonLeft onClick={handlePrev} className="forum__left"/>
            <CardButton onClick={handleNext} className="forum__right"/>
          </div>
               </>
    ):(
    <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            navigation="false"
            pagination="false"
            className="pattern__swiper"
          >
    {map(forumArray, (arrPatterns, index) => (
      <swiper-slide key={index}>
    <ul className="forum__cards">
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={arrPatterns.image} alt="" className="forum__link-image" />
                </a>
            </li>
        </ul>
            </swiper-slide>
            ))}
               </swiper-container>
               <div className="forum__buttons">
                <button onClick={handlePrev} className="forum__left"><CardButtonLeft /></button>
                <button onClick={handleNext} className="forum__right"><CardButton /></button>
              
          
          </div>
               </>
    )}
{/* 
    {mobileMatches ? (
                <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="3"
            navigation="false"
            pagination="false"
          >
    {map(forumArray, (arrPatterns, index) => (
       <swiper-slide key={index}>
          <ul className="forum__cards">
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={arrPatterns.image} alt="" className="forum__link-image" />
                </a>
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
    ) : (
        
        <>
          <swiper-container
            ref={swiperElRef}
            slides-per-view="2"
            navigation="false"
            pagination="false"
          >
    {map(forumArray, (arrPatterns, index) => (
       <swiper-slide key={index}>
          <ul className="forum__cards">
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={arrPatterns.image} alt="" className="forum__link-image" />
                </a>
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
    )} */}
     </>
    )}

export default ForumCard;
