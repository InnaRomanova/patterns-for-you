import React from "react";
import "./Katalog.css";
import CardButton from "../Elements/CardButton";
import katalogImage1 from "../../images/katalogImage1.png";
import Card from "../Card/Card";

function Katalog() {
  const arrReviews = [
    {
      id: 1,
      image: katalogImage1,
      name: "Платья",
      detailed: "Decor / Подробнее",
    },
    {
      id: 2,
      image: katalogImage1,
      name: "Жакеты",
      detailed: "Decor / Подробнее",
    },
    {
      id: 3,
      image: katalogImage1,
      name: "Юбки",
      detailed: "Decor / Подробнее",
    },
    {
      id: 4,
      image: katalogImage1,
      name: "Блузки",
      text: "Decor / Подробнее",
    },
  ];
  // const cards = [];

  // arrReviews.forEach((card, index) => {
  //   cards.push(
  //     <>
  //       {/* <li className="katalog-card">
  //         {card.image} */}
  //       {/* <img
  //         src={card.image}
  //         alt="картинка выкройки"
  //         className="katalog-card"
  //       /> */}
  //       {/* <div className="katalog-card__info">
  //           <div className="katalog-card__info-text">
  //             <h4 className="katalog-card__name">{card.name}</h4>
  //             <p className="katalog-card__detailed">{card.detailed}</p>
  //           </div>
  //           <CardButton />
  //         </div> */}
  //       {/* </li> */}
  //     </>
  //   );
  // });

  return (
    <section className="katalog">
      <div className="katalog__container">
        <div className="katalog__text">
          <h2 className="news__title ">Выкройки по категориям</h2>
          <h3 className="katalog__subtitle">Женская одежда</h3>
        </div>
        <ul className="katalog-cards">
          <Card swiperArray={arrReviews} />
        </ul>
      </div>
    </section>
  );
}

export default Katalog;
