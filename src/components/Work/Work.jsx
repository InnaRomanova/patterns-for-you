import React from "react";
import "./Work.css";
import WorkCards from "./WorkCards";
import WorkFoto1 from "../../images/workFoto1.png";

// Компонент: работы по выкройке
function Work() {
    const arrWorks = [
        {
          id: 1,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
        {
          id: 2,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
        {
          id: 3,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
        {
          id: 4,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
        {
          id: 4,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
        {
          id: 4,
          image: WorkFoto1,
          name: "Modern Kitchen",
          text: "женское платье",
          price: 135.0,
        },
      ];
    
      const works = [];
    
      arrWorks.forEach((work, index) => {
        works.push(
          <>
            <li className="works__card">
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
          </>
        );
      });


    return (
        <div className="details__container">
            <div className="work__container">
            <h2 className="news__title katalogPatterns__title-text">Работы по выкройке</h2>
            <p className="details__text">Поделитесь фотографиями и мнением.</p>
            </div>
            <div className="works__container-cards">
            <WorkCards swiperArray={arrWorks}/>
            </div>
        </div>
    )
}
export default Work;
