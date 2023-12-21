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
                        <div className="katalogPatterns__info-text">
                            <h4 className="katalogPatterns__name">{arrCards.name}</h4>
                            <p className="card__inform-katalog">{arrCards.text}</p>
                            <span className="card__inform-price">{arrCards.price} Руб.</span>
                        </div>
                        <div className="card__more">
                            <p className="card__more-katalog">Подробнее</p>
                            <button className="card__more-button-katalog"></button>
                            {/* <CardButton /> */}
                        </div>

                    </div>
                </li>
            ))}
        </>
    );
}
export default CardKatalog;
