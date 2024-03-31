import React, { useState } from "react";
import "./Comments";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import { Link } from "react-router-dom";
import CardButton from "../Elements/CardButton";
import CardButtonLeft from "../Elements/CardButtonLeft";

register();

function ForumCard({ commentArray }) {
    const swiperElRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4)

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
            } else if (display > 879) {
                setSlidesPerView(2);
            } else if (display < 879) {
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
                className="comments__swiper"
            >
                {map(commentArray, (arrComments, index) => (
                    <swiper-slide key={index}>

                        <ul className="commets__cards">
                            <li className="comment__card">
                                <div className="comment__personal">
                                    <a href="/author" className="comment__link">
                                        <img className="comment__link-avatar" alt="аватарка" src={arrComments.avatar} />
                                    </a>
                                    <Link to="/author" className="comment__more-link"><h4 className="comment__name">{arrComments.name}</h4></Link>
                                </div>
                                <div className="comment__info">
                                    <p className="comment__info-text">{arrComments.text}</p>
                                    <Link to="/author" className="new__more-link"><p className="comment__info-marka">{arrComments.marka}</p></Link>
                                </div>
                            </li>
                        </ul>
                    </swiper-slide>
                ))}
            </swiper-container>
            <div className="forum__buttons comments__buttons">
                <button onClick={handlePrev} className="forum__left"><CardButtonLeft /></button>
                <button onClick={handleNext} className="forum__right"><CardButton /></button>
            </div>
        </>
    )
}

export default ForumCard;
