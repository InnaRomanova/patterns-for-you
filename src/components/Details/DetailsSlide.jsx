import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import { useMediaQuery } from "react-responsive";
import Dots from "../Dots/Dots";
import DetailsButtonLeft from "../Elements/DetailsButtonLeft";
import DetailsButtonRight from "../Elements/DetailsButtonRight";
import { arrForum } from "../Constants/Objects/Massiv";
import Like from "../Elements/Like";
import Comment from "../Elements/Comment";
import Slider from 'react-slick';


register();

function DetailsSlide() {
    const sliderRef = useRef(null);
    const matchesMobile = useMediaQuery({ query: "(max-width: 1499px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);
    const [selectCard, setSelectCard] = useState({});
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: mobile ? 1 : 2,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    const handleCardClick = (image) => {
        setSelectCard(image);
        setIsImagePopupOpened(true);
    }

    const closeAllPopups = () => {
        setIsImagePopupOpened(false);
    }

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

            {matchesMobile ? (<>
                <div className="details__description">

                    {/* {arrForum.filter((item) => item.id === currentIndex).map((teacher, index) => ( */}
                    {arrForum.filter((item) => item.id === 2).map((teacher, index) => (

                        <ul className="details__list" key={index}>
                            <Slider ref={sliderRef} {...settings}>
                                {teacher.image.map((image, i) => (
                                    <li key={i} className="details__list-item" onClick={handleCardClick}>
                                        <img src={image} alt="картинка" className="details__image" />
                                    </li>
                                ))}</Slider></ul>
                    ))}

                    {/* {mobile ? (<Dots currentIndex={currentIndex} setCurrentIndex={setCurrentIndex} onSlideChange={handleSlideChange} />) : ("")} */}
                    <div className="news__button details__button">
                        <button onClick={handlePrev} className="details__more-button-katalog"><DetailsButtonLeft /></button>
                        <button onClick={handleNext} className="details__more-button-katalog"><DetailsButtonRight /></button>
                    </div>

                    {mobile ? ("") : (<><p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p></>)}

                    {mobile ? ("") : (<><button className="author__add">Показать еще фото</button></>)}



                    <div className="author__icons">
                        <div className="author__icon author__like">
                            <div className="author__icon-number"><Like /> 26</div>
                            <p className="author__text">Понравилось? Жми лайк!</p>
                        </div>
                        <div className="author__icon author__coments">
                            <div className="author__icon-number"><Comment /> 26</div>
                            {mobile ? ("") : (<><p className="author__text">Комментарии</p></>)}

                        </div>
                    </div>
                </div>
            </>
            ) : (<>
                <div className="details__description">

                    {/* {arrForum.filter((item) => item.id === currentIndex).map((teacher, index) => ( */}
                    {arrForum.filter((item) => item.id === 2).map((teacher, index) => (
                        <Slider key={index} className="details__swiperSlide" >
                            <ul className="details__list" key={index}>
                                {teacher.image.map((image, i) => (
                                    <li key={i} className="details__list-item">
                                        <img src={image} alt="картинка" className="details__image" />
                                    </li>
                                ))}
                            </ul>
                        </Slider>
                    ))}

                    <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>

                    <button className="author__add">Показать еще фото</button>
                    <div className="author__icons">
                        <div className="author__icon author__like">
                            <div className="author__icon-number"><Like /> 26</div>
                            <p className="author__text">Понравилось? Жми лайк!</p>
                        </div>
                        <div className="author__icon author__coments">
                            <div className="author__icon-number"><Comment /> 26</div>
                            <p className="author__text">Комментарии</p>
                        </div>
                    </div>
                </div>

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