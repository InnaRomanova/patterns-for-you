import { useRef, useEffect, useCallback, useState } from "react";
import { register } from "swiper/element/bundle";
import map from "lodash/map";
import "../News/News.css";
// import ButtonVectorLeft from "./ButtonVectorLeft";
// import ButtonVectorRight from "../Elements/ButtonVectorRight";

register();

function WorkCards({ swiperArray }) {
  const swiperElRef = useRef(null);
  const [slidesPerView, setSlidesPerView] = useState(4);


  useEffect(() => {
    function handleResize() {
      const display = window.innerWidth;
      if (display > 1570) {
        setSlidesPerView(4);
      } else if (display > 810) {
        setSlidesPerView(3);
      } else if (display > 750) {
        setSlidesPerView(2);
      } else if (display < 750) {
        setSlidesPerView(1);
      }
    }
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <> 
     <ul className="works__cards">
        {map(swiperArray, (work, index) => (
           
                <li className="works__card" key={index}>
                  <img
                    src={work.image}
                    alt="картинка"
                    className="work__image"
                  />
                  <div className="card__inform">
                    <h3 className="card__inform-name">{work.name}</h3>
                    <p className="card__inform-katalog">{work.text}</p>
                    <span className="card__inform-price">
                      {work.price} Руб.
                    </span>
                  </div>
                  <div className="card__more">
                    <p className="card__more-katalog">Подробнее</p>
                    <button className="card__more-button-katalog"></button>
                  </div>
                </li>
            
        ))}  
        </ul>
    </>
  );
};

export default WorkCards;