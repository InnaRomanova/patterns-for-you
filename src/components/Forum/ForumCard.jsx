import React, { useState } from "react";
import "./Forum.css";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import CardButton from "../Elements/CardButton";
import CardButtonLeft from "../Elements/CardButtonLeft";
import { arrForum } from "../Constants/Objects/Massiv";
import { Link } from "react-router-dom";

register();

function ForumCard() {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

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
        setSlidesPerView(4);
      } else if (display > 1400) {
        setSlidesPerView(3);
      } else if (display > 970) {
        setSlidesPerView(2);
      } else if (display < 970) {
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

        {arrForum.map((arrPatterns, index) => (

          <swiper-slide key={index}>
            <ul className="forum__cards">
              <li className="forum__card">
                {/* <a href="#" className="forum__link"> */}
                <Link to="/details" className="forum__link">
                  <img src={arrPatterns.image[0]} alt="картинка пользователя" className="forum__link-image" /></Link>

                {/* </a> */}
              </li> </ul>
          </swiper-slide>
        ))}

      </swiper-container >

      <div className="forum__buttons">
        <button onClick={handlePrev} className="forum__left">
          <CardButtonLeft />
        </button>
        <button onClick={handleNext} className="forum__right">
          <CardButton />
        </button>
      </div>
    </>
  )
}

export default ForumCard;
