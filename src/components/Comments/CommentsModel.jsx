import React, { useState } from "react";
import "./Comments";
import { useRef, useEffect, useCallback } from "react";
import { register } from "swiper/element/bundle";
import smileAvatar from "../../images/smile-avatar.png";
import CommentSend from "../Elements/CommentSend";

register();

function CommentsModel() {
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
            <section className="details__container">
                <button className="com-model__name">Добавить комментарий</button>
                <form className="com-model__form">
                    <img className="com-model__avatar" alt="аватарка" src={smileAvatar} />

                    <textarea className="com-model__comment" id="comment" name="story" rows="5" cols="33">
                        Добавить комментарий ...</textarea>
                        <CommentSend />

                </form>
            </section>
        </>
    )
}

export default CommentsModel;
