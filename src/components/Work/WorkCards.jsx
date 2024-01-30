import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../News/News.css";
import LikesImage from "../Elements/LikesImage";
import ComentsImage from "../Elements/CommentsImage";
import WorkButtonMore from "../Elements/WorkButtonMore";
import { useMediaQuery } from "react-responsive";

register();

function WorkCards({ swiperArray }) {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);
  const matchesMobile = useMediaQuery({ query: "(max-width: 560px)" });


  useEffect(() => {
    function handleResize() {
      const display = window.innerWidth;
      if (display < 1820) {
        setSlidesPerView(3);
      } else if (display < 770) {
        setSlidesPerView(2);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
     <div className="works__container-cards">
      <swiper-container
        ref={swiperElRef}
        slides-per-view={slidesPerView}
        navigation="false"
        pagination="false">
        <ul className="works__cards">

          {map(swiperArray, (work, index) => (
            <li className="works__card" key={index}>
              <div className="work__image-block">
                <img
                  src={work.image}
                  alt="картинка"
                  className="work__image"
                />
                <button className="work__nic">Авток НИК</button>
              </div>


              <div className="work__inform">
                <h3 className="card__inform-name work__inform-name">{work.name}</h3>
                <p className="card__inform-katalog">Комментарий: {work.comment}</p>
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
                  <p className="card__more-katalog">Подробнее</p>
                  <button className="forum__right"><WorkButtonMore /></button>
                </div>
              </>) : (<>
                <div className="work__more">
                  <p className="card__more-katalog">Подробнее</p>
                  <button className="forum__right"><WorkButtonMore /></button>
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

            </li>
          ))}
        </ul></swiper-container>
        </div>
    </>
  );
};

export default WorkCards;