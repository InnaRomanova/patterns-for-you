import { useRef, useEffect, useCallback, useState } from "react";
import { Link } from "react-router-dom";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../News/News.css";
import ButtonVectorLeft from "./ButtonVectorLeft";
import ButtonVectorRight from "./ButtonVectorRight";

register();

function SwiperSliderNews({ swiperArray }) {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);

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
      if (display > 1570) {
        setSlidesPerView(4);
      } else if (display > 810) {
        setSlidesPerView(3);
      } else if (display > 635) {
        setSlidesPerView(2);
      } else if (display < 635) {
        setSlidesPerView(1);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <swiper-container
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="false"
        pagination="false"
      >
        {map(swiperArray, (teacher, index) => (
          <swiper-slide key={index}>
            <div className="news__cards-list">
              <div className="news__cards">
                <div className="news__card">
                  <Link to="/author">
                    <img
                      src={teacher.image}
                      alt="картинка выкройки"
                      className="card__image" /></Link>
                  <div className="card__inform">
                    <h3 className="card__inform-name">{teacher.name}</h3>
                    <p className="card__inform-katalog">{teacher.text}</p>
                    <span className="card__inform-price">
                      {teacher.price} Руб.
                    </span>
                  </div>
                  <div className="card__more">
                    <Link to="/author" className="new__more-link">
                      <p className="card__more-katalog">Подробнее</p></Link>
                    <Link to="/author" className="new__more-link"><button className="card__more-button-katalog"></button></Link>

                  </div>
                </div>
              </div>
            </div>
          </swiper-slide>
        ))}
      </swiper-container>
      <div className="news__button">
        <button
          className="news__button-vector news__button-left"
          onClick={handlePrev}>
          <ButtonVectorLeft />
        </button>
        <button
          className="news__button-vector news__button-right"
          onClick={handleNext}>
          <ButtonVectorRight />
        </button>
      </div>
    </>
  );
};

export default SwiperSliderNews;

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