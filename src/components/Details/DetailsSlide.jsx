import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";

register();

function DetailsSlide({ swiperDetails }) {
    const swiperElRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(2);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });

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
            if (display > 1272) {
                setSlidesPerView(2);
            } else if (display < 1272) {
                setSlidesPerView(1);
            }
        }
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            {matchesMobile ? (<>

                <swiper-container
                    ref={swiperElRef}
                    slides-per-view="1"
                    navigation="false"
                    pagination="false">
                    <ul className="details__list">
                        {map(swiperDetails, (teacher, index) => (
                            <swiper-slide key={index}>

                                <li className="details__list-item">
                                    <img src={teacher.image} alt="картинка" className="details__image" />
                                </li>


                            </swiper-slide>
                        ))}
                    </ul>
                </swiper-container>
                <div className="news__button">
                    <button onClick={handlePrev} className="card__more-button-katalog"></button>
                    <button onClick={handleNext} className="card__more-button-katalog"></button>
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