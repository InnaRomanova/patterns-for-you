import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";
import { arrDetails } from "../Constants/Objects/Massiv";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


register();

function DetailsModel() {
    const swiperRef = useRef(null);
    const [slidesPerView, setSlidesPerView] = useState(0);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    // const [currentIndex, setCurrentIndex] = useState(1);


    const handlePrev = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slidePrev();
        }
    }, []);

    const handleNext = useCallback(() => {
        if (swiperRef.current) {
            swiperRef.current.slideNext();
        }
    }, []);

    // useEffect(() => {
    //     function handleResize() {
    //         const display = window.innerWidth;
    //         if (display >= 1500) {
    //             setSlidesPerView(2);
    //         } else if (display >= 883) {
    //             setSlidesPerView(2);
    //         } else if (display < 883) {
    //             setSlidesPerView(1);
    //         }
    //     }
    //     window.addEventListener("resize", handleResize);
    //     handleResize();
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);



    // const details = arrDetails.filter((item) => item.id === 1).map((teacher, index) => (
    //     <ul className="model__list" key={index}>
    //         {teacher.image.map((image, i) => (

    //             <li key={i} className="model__list-item">
    //                 <img src={image} alt="картинка" className="model__image" />
    //             </li>

    //         ))}


    //     </ul>
    // ));



    return (
        <>

            {matchesMobile ? (<>
                <div className="model__description">

                    {/* {details} */}
                    <Swiper
                        slidesPerView={slidesPerView}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    >
                        {arrDetails.filter((item) => item.id === 1).map((teacher, index) => (
                            <SwiperSlide key={index}>
                                <ul className="model__list">
                                    {teacher.image.map((image, i) => (
                                        <li key={i} className="model__list-item">
                                            <img src={image} alt="картинка" className="model__image" />
                                        </li>
                                    ))}
                                </ul>
                            </SwiperSlide>
                        ))}
                    </Swiper>


                    {mobile ? (<Dots
                        slidesPerView={slidesPerView}
                        onSwiper={(swiper) => (swiperRef.current = swiper)}
                    // currentIndex={currentIndex} setCurrentIndex={setCurrentIndex}
                    // onSlideChange={handleSlideChange} 
                    />) : ("")}
                    <div className="news__button details__button">
                        <button onClick={handlePrev} className="details__more-button-katalog"><DetailsButtonLeft /></button>
                        <button onClick={handleNext} className="details__more-button-katalog"><DetailsButtonRight /></button>
                    </div>

                    {mobile ? ("") : (<><p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p></>)}
                </div>
            </>
            ) : (<>
                <div className="model__description">
                    {arrDetails.filter((item) => item.id === 1).map((teacher, index) => (
                        <ul className="model__list" key={index}>

                            {teacher.image.map((image, i) => (

                                <li key={i} className="model__list-item">
                                    <img src={image} alt="картинка" className="model__image" />
                                </li>
                            ))}

                        </ul>
                    ))}

                    <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p></div>
            </>)}
        </>
    );
};

export default DetailsModel;