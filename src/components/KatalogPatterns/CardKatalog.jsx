import React, { useState } from "react";
import "../KatalogPatterns/KatalogPatterns.css";
import map from "lodash/map";
import { Link } from "react-router-dom";
import { arrClothes } from "../Constants/Objects/Massiv";


function CardKatalog({ swiperKatalog, handleClick }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    return (
        <>
            {swiperKatalog.map((arrCards, index) => (
                <li className="katalogPatterns__card" key={index} >
                    <div className="katalogPatterns__image-container">
                        {/* <Link to="/author">
                            <img className="katalogPatterns__card-image" src={arrCards.image} alt="карточка-картинка товара-выкройки" />
                        </Link> */}

                        <Link to="/author">
                            <img
                                className="katalogPatterns__card-image"
                                src={hoveredIndex === index ? arrCards.hoveredImage : arrCards.image}
                                alt="карточка-картинка товара-выкройки"
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={handleMouseOut}
                                style={{ opacity: hoveredIndex === index ? 0.8 : 1 }} // Добавляем стиль для управления прозрачностью
                                onClick={() => handleClick(arrCards.id)} />
                        </Link>
                    </div>
                    <div className="katalogPatterns__info">
                        <h4 className="katalogPatterns__info-name">{arrCards.name}</h4>
                        <p className="card__inform-katalog katalogPatterns__text">{arrCards.text}</p>
                        <span className="card__inform-price katalogPatterns__price">{arrCards.price} Руб.</span>
                    </div>
                    <div className="katalogPatterns__more">
                        <Link to="/author" className="new__more-link"><p className="card__more-katalog">Подробнее</p></Link>
                        <Link to="/author" className="new__more-link"><button className="card__more-button-katalog katalogPatterns__button"></button></Link>
                    </div>
                </li>
            ))}
        </>
    );
}
export default CardKatalog;
