import React, { useState } from "react";
import "./Katalog.css";
import CardList from "./CardList";
import { Link } from "react-router-dom";
import { arrClothes } from "../Constants/Objects/Massiv";
import KatalogPatterns from "../KatalogPatterns/KatalogPatterns";


function Katalog() {
  const [showAllCards, setShowAllCards] = useState(false);

  const handleShowAllCards = () => {
    setShowAllCards(true);
  };

  return (
    <section className="katalog">
      <div className="katalog__container">
        <div className="katalog__text">
          <h2 className="news__title ">Выкройки по категориям</h2>
          <h3 className="katalog__subtitle">Женская одежда</h3>
        </div>

        {/* <CardList arrClothes={arrClothes} /> */}

        {showAllCards ? (
          <Link to="/katalog/all" />
        ) : <CardList arrClothes={arrClothes} />}

        <button className="katalog__button-over" onClick={handleShowAllCards}>
          Перейти в каталог
        </button>

        {/* <Link to="/katalog" className="katalog__block">
          <button className="katalog__button-over">Перейти в каталог</button></Link> */}

      </div>
    </section>
  );
}

export default Katalog;
