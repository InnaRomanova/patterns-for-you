import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";
import { arrForum } from "../Constants/Objects/Massiv";

register();

function DetailsSlide() {
    const swiperElRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
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

    const handleSlideChange = useCallback((swiper) => {
        setCurrentIndex(swiper.realIndex + 1);
    }, []);


    //useEffect, который следит за изменением currentIndex 
    //и переключает слайды в соответствии с этим значением.
    useEffect(() => {
        if (!swiperElRef.current) return;
        swiperElRef.current.swiper.slideTo(currentIndex - 1);
    }, [currentIndex]);

    return (
        <>

            {matchesMobile ? (<>
                <div className="details__description">
                    <swiper-container
                        ref={swiperElRef}
                        slides-per-view={slidesPerView}
                        navigation="false"
                        pagination="false"
                        onSlideChange={handleSlideChange}>

                        <swiper-slide className="details__swiperSlide" >
                            {/* {arrForum.filter((item) => item.id === currentIndex).map((teacher, index) => ( */}
                            {arrForum.filter((item) => item.id === 2).map((teacher, index) => (

                                <ul className="details__list" key={index}>
                                    {teacher.image.map((image, i) => (
                                        <li key={i} className="details__list-item">
                                            <img src={image} alt="картинка" className="details__image" />
                                        </li>
                                    ))}</ul>


                            ))}</swiper-slide>


                    </swiper-container>
                    {mobile ? (<Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} onSlideChange={handleSlideChange} />) : ("")}
                    <div className="news__button details__button">
                        <button onClick={handlePrev} className="details__more-button-katalog"><DetailsButtonLeft /></button>
                        <button onClick={handleNext} className="details__more-button-katalog"><DetailsButtonRight /></button>
                    </div>

                    {mobile ? ("") : (<><p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p></>)}
                </div>
            </>
            ) : (<>
                <div className="details__description">

                    {/* {arrForum.filter((item) => item.id === currentIndex).map((teacher, index) => ( */}
                    {arrForum.filter((item) => item.id === 2).map((teacher, index) => (
                        <swiper-slide key={index} className="details__swiperSlide" >
                            <ul className="details__list" key={index}>
                                {teacher.image.map((image, i) => (
                                    <li key={i} className="details__list-item">
                                        <img src={image} alt="картинка" className="details__image" />
                                    </li>
                                ))}
                            </ul>
                        </swiper-slide>
                    ))}



                    {/* <swiper-slide className="details__swiperSlide" > */}
                    {/* {arrForum.filter((item) => item.id === currentIndex).map((teacher, index) => ( */}
                    {/* {arrForum.filter((item) => item.id === 1).map((teacher, index) => (

                        <ul className="details__list" key={index}>
                            {teacher.image.map((image, i) => (
                                <li key={i} className="details__list-item">
                                    <img src={image} alt="картинка" className="details__image" />
                                </li>
                            ))}</ul>


                    ))} */}
                    {/* </swiper-slide> */}


                    {/* <ul className="details__list">
                        {map(arrForum, (teacher, index) => (
                            <swiper-slide key={index}>

                                <li className="details__list-item">
                                    <img src={teacher.image} alt="картинка" className="details__image" />
                                </li>

                            </swiper-slide>
                        ))}
                    </ul> */}
                    <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p></div>
            </>)
            }
        </>
    );
};

export default DetailsSlide;

{/* В этом коде мы используем хук useEffect, 
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