import React from "react";
import "./Comments";
import map from "lodash/map";
import { useRef, useEffect, useCallback } from "react";
import { useMediaQuery } from "react-responsive";
import { register } from "swiper/element/bundle";
import CardButton from "../Elements/CardButton";
import CardButtonLeft from "../Elements/CardButtonLeft";

register();

function ForumCard({ commentArray }) {
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

        swiperElRef.current.addEventListener("slidechange", (e) => { });
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
                        className="comments__swiper"
                    >
                        {map(commentArray, (arrComments, index) => (
                            <swiper-slide key={index}>

                                <ul className="commets__cards">
                                    <li className="comment__card">
                                        <div className="comment__personal">
                                            <a href="#" className="comment__link">
                                                <img className="comment__link-avatar" alt="аватарка" src={arrComments.avatar} />
                                            </a>
                                            <h4 className="comment__name">{arrComments.name}</h4>
                                        </div>
                                        <div className="comment__info">
                                            <p className="comment__info-text">{arrComments.text}</p>
                                            <p className="comment__info-marka">{arrComments.marka}</p>
                                        </div>
                                    </li>
                                </ul>
                            </swiper-slide>
                        ))}
                    </swiper-container>
                    <div className="forum__buttons comments__buttons">
                        <CardButtonLeft onClick={handlePrev} className="forum__left" />
                        <CardButton onClick={handleNext} className="forum__right" />
                    </div>
                </>
            ) : (
                <>
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view="3"
                        navigation="false"
                        pagination="false"
                        className="pattern__swiper"
                    >
                        {map(commentArray, (arrComments, index) => (
                            <swiper-slide key={index}>
                                <ul className="commets__cards">
                                    <li className="comment__card">
                                        <div className="comment__personal">
                                            <a href="#" className="comment__link">
                                                <img className="comment__link-avatar" alt="аватарка" src={arrComments.avatar} />
                                            </a>
                                            <h4 className="comment__name">{arrComments.name}</h4>
                                        </div>
                                        <div className="comment__info">
                                            <p className="comment__info-text">{arrComments.text}</p>
                                            <p className="comment__info-marka">{arrComments.marka}</p>
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
            )}
        </>
    )
}

export default ForumCard;
