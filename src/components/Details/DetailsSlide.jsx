import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";

register();

function DetailsSlide({ swiperDetails, onClick }) {
    const swiperElRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const [currentIndex, setCurrentIndex] = useState(1);


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
            if (display >= 1500) {
                setSlidesPerView(3);
            } else if (display >= 883) {
                setSlidesPerView(2);
            } else if (display < 883) {
                setSlidesPerView(1);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);



    const moveDot = index => {
        setCurrentIndex(index);
    }


    return (
        <>
            {matchesMobile ? (<>

                <swiper-container
                    ref={swiperElRef}
                    slides-per-view={slidesPerView}
                    navigation="false"
                    pagination="false">

                    {map(swiperDetails, (teacher, index) => (
                        <swiper-slide key={index} className="details__swiperSlide">
                            <ul className="details__list">
                                <li className="details__list-item">
                                    <img src={teacher.image} alt="картинка" className="details__image" />
                                </li>
                            </ul>

                        </swiper-slide>
                    ))}

                </swiper-container>
                <Dots />
                {/* <div className="dots__container">
                    {Array.from({ length: 5 }).map((item, index) => (
                        <div
                            onClick={() => moveDot(index + 1)}
                            className={currentIndex.id === index + 1 ? "dots active" : "dots"}></div>
                    ))}

                </div> */}
                <div className="news__button details__button">
                    <button onClick={handlePrev} className="details__more-button-katalog"><DetailsButtonLeft /></button>
                    <button onClick={handleNext} className="details__more-button-katalog"><DetailsButtonRight /></button>
                </div>

            </>
            ) : (<>
                <ul className="details__list">
                    {map(swiperDetails, (teacher, index) => (
                        <swiper-slide key={index}>

                            <li className="details__list-item">
                                <img src={teacher.image} alt="картинка" className="details__image" />
                            </li>

                        </swiper-slide>
                    ))}
                </ul>
            </>)}
        </>
    );
};

export default DetailsSlide;

{/*
В этом коде мы используем хук useEffect, 
чтобы добавить слушатель события resize на объект window. 
Когда событие resize происходит, мы вызываем функцию 
handleResize, которая определяет количество карточек, 
которые нужно отображать на основе текущего размера окна 
браузера, и устанавливает это значение в состояние slidesPerView. 
Затем мы используем это значение в качестве значения свойства 
slidesPerView для контейнера Swiper. Кроме того, мы вызываем 
handleResize один раз при первом рендере компонента, чтобы установить 
правильное количество карточек. Наконец, мы удаляем слушатель 
события resize при размонтировании компонента с помощью функции, 
возвращаемой из хука useEffect.*/}