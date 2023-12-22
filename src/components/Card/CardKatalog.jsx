import React from "react";
import "../KatalogPatterns/KatalogPatterns.css";
import CardButton from "../Elements/CardButton";
import map from "lodash/map";


function CardKatalog({ swiperKatalog }) {

    return (
        <>
            {map(swiperKatalog, (arrCards, index) => (
                <li className="katalogPatterns__card" key={index}>
                    <div className="katalogPatterns__image-container">
                        <img className="katalogPatterns__card-image" src={arrCards.image} alt="карточка-картинка товара-выкройки" />
                    </div>
                    <div className="katalogPatterns__info">
                            <h4 className="katalogPatterns__info-name">{arrCards.name}</h4>
                            <p className="card__inform-katalog katalogPatterns__text">{arrCards.text}</p>
                            <span className="card__inform-price katalogPatterns__price">{arrCards.price} Руб.</span>
                        </div>
                        <div className="card__more katalogPatterns__more">
                            <p className="card__more-katalog">Подробнее</p>
                            <button className="card__more-button-katalog katalogPatterns__button"></button>
                        </div>
                </li>
            ))}
        </>
    );
}
export default CardKatalog;
