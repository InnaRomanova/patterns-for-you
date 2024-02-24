import { useRef, useEffect, useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";
import { arrDetails } from "../Constants/Objects/Massiv";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function DetailsModel() {
    const sliderRef = useRef(null);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: mobile ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    };

    const handlePrev = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
        }
    }, []);

    const handleNext = useCallback(() => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
        }
    }, []);

    return (
        <>
            {matchesMobile ? (
                <>
                    <div className="model__description">
                        {arrDetails.filter((item) => item.id === 1).map((teacher, index) => (
                            <ul className="model__list" key={index}>
                                <Slider ref={sliderRef} {...settings}>
                                    {teacher.image.map((image, i) => (
                                        <li key={i} className="model__list-item">
                                            <img src={image} alt="картинка" className="model__image" />
                                        </li>
                                    ))}
                                </Slider>
                            </ul>
                        ))}

                        <div className="news__button details__button">
                            <button onClick={handlePrev} className="details__more-button-katalog">
                                <DetailsButtonLeft />
                            </button>
                            <button onClick={handleNext} className="details__more-button-katalog">
                                <DetailsButtonRight />
                            </button>
                        </div>

                        {mobile ? null : <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>}
                    </div>
                </>
            ) : (
                <>
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

                        <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>
                    </div>
                </>
            )}
        </>
    );
};

export default DetailsModel;