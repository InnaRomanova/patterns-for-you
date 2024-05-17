import { useRef, useEffect, useCallback, useState } from "react";
import { useMediaQuery } from "react-responsive";
import map from "lodash/map";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";
import { arrDetails, arrClothes } from "../Constants/Objects/Massiv";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ImagePopup from "../Popup/ImagePopup";
import useOnClickOutside from 'use-onclickoutside';

function DetailsModel({ cardValuePictures }) {
    const sliderRef = useRef(null);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [openModal, setOpenModal] = useState(false);
    const [selectedImage, setSelectedImage] = useState(null);
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

    function handleOpen(image) {
        setSelectedImage(image);
        setOpenModal(true);
    }

    function handleClose() {
        setSelectedImage(null);
        setOpenModal(false);
    }

    //закрытие попапа вне окна/не работает
    const closeByOverlay = (e) => {
        if (e.target.classList.contains('popup')) {
            handleClose()
        }
      }

    return (
        <>
            {/* открытие модального окна картинки */}
            {openModal ? (<ImagePopup 
            onClick={e => e.stopPropagation()}
            onCloseOverlay={closeByOverlay}
            selectedImage={selectedImage} 
            handleClose={handleClose} />) : ""}

            {matchesMobile ? (
                <>
                    <div className="model__description">
                        <ul className="model__list">
                            <Slider ref={sliderRef} {...settings}>
                                {cardValuePictures.map((image, index) => (
                                    <li key={index} className="model__list-item">
                                        <img src={image} alt="картинка" className="model__image"
                                            onClick={() => handleOpen(image)} />
                                    </li>
                                ))}
                            </Slider>
                        </ul>
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
                        <ul className="model__list" >
                            {cardValuePictures.map((image, index) => (
                                <li key={index} className="model__list-item">
                                    <img src={image} alt="картинка" className="model__image"
                                        onClick={() => handleOpen(image)} />
                                </li>
                            ))}
                        </ul>
                        <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>
                    </div>
                </>
            )}
        </>
    );
};

export default DetailsModel;