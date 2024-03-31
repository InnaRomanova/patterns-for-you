import { useRef, useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
import LikesImage from "../Elements/LikesImage";
import ComentsImage from "../Elements/CommentsImage";
import WorkButtonMore from "../Elements/WorkButtonMore";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import PaginationLeft from "../Elements/PaginationLeft";
import PaginationRight from "../Elements/PaginationRight";

register();

function WorkPopulation({ swiperPopulation }) {
    const swiperElRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(4);
    const matchesMobile = useMediaQuery({ query: "(max-width: 560px)" });

    //предыдущий слайд
    const handlePrev = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slidePrev();
    }, []);

    //следующий слайд
    const handleNext = useCallback(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slideNext();
    }, []);

    useEffect(() => {
        function handleResize() {
            const display = window.innerWidth;
            if (display > 1820) {
                setSlidesPerView(4)
            } else if (display > 883) {
                setSlidesPerView(3);
            } else if (display > 618) {
                setSlidesPerView(2);
            } else if (display < 618) {
                setSlidesPerView(1)
            }
        }


        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);


    return (
        <>
            <div className="works-population__container-cards">

                <swiper-container
                    ref={swiperElRef}
                    slides-per-view={slidesPerView}
                    navigation="false"
                    pagination="false">



                    {map(swiperPopulation, (work, index) => (
                        <swiper-slide key={index}>
                            <ul className="works-populations">
                                <li className="works-populations__cards">
                                    <div className="work__image-block">
                                        <Link to="/author"><img
                                            src={work.image}
                                            alt="картинка"
                                            className="work__image"
                                        /> <button className="work__nic">Анастасия НИК</button></Link>
                                    </div>


                                    <div className="work__inform">
                                        <h3 className="card__inform-name work__inform-name">{work.name}</h3>
                                    </div>
                                    {matchesMobile ? (<>
                                        <div className="work__icons">
                                            <div className="work__icon-block">
                                                <button className="work__icon-likes"><LikesImage /></button>
                                                <span className="work__likes-number">3</span>
                                            </div>

                                            <div className="work__icon-block">
                                                <button className="work__icons-comments"><ComentsImage /></button>
                                                <span className="work__comments-number">3</span>
                                            </div>
                                        </div>
                                        <div className="work__more">
                                            <Link to="/author" className="works-populations__link"><p className="card__more-katalog">Подробнее</p>
                                                <button className="forum__right"><WorkButtonMore /></button></Link>
                                        </div>
                                    </>) : (<>
                                        <div className="work__more">
                                            <Link to="/author" className="works-populations__link"><p className="card__more-katalog">Подробнее</p>
                                                <button className="forum__right"><WorkButtonMore /></button></Link>
                                        </div>
                                        <div className="work__icons">
                                            <div className="work__icon-block">
                                                <button className="work__icon-likes"><LikesImage /></button>
                                                <span className="work__likes-number">3</span>
                                            </div>

                                            <div className="work__icon-block">
                                                <button className="work__icons-comments"><ComentsImage /></button>
                                                <span className="work__comments-number">3</span>
                                            </div>
                                        </div>
                                    </>)}

                                </li></ul></swiper-slide>
                    ))}
                </swiper-container>
            </div>
            <div className="work__pagination  work__pagination-pad">
                <div className="work__pagination-container work-population__container">
                    <button onClick={handlePrev} className="work-population__button-prev"><PaginationLeft /></button>
                    <button onClick={handleNext} className="work-population__button-next"><PaginationRight /></button>
                </div>
            </div>

        </>
    );
}

export default WorkPopulation;
