import React, { useState } from "react";
import "../KatalogPatterns/KatalogPatterns.css";
import map from "lodash/map";
import { Link, useNavigate } from "react-router-dom";
import { arrClothes2, arrClothes } from "../Constants/Objects/Massiv";

function PatternList({ selectedPatterns }) {
    const [hoveredIndex, setHoveredIndex] = useState(null);
    // const [selectedCategory, setSelectedCategory] = useNavigate[null];
    // const history = useNavigate();

    const handleMouseOver = (index) => {
        setHoveredIndex(index);
    };

    const handleMouseOut = () => {
        setHoveredIndex(null);
    };

    console.log(selectedPatterns)

    // const handleCardClick = (key) => {
    //     history.push(/author/`${key}`);
    // };


    // const filterAndSortedCards = swiperKatalog
    //     .filter(card => card.category === selectedCategory)
    //     .sort((a, b) => a.key - b.key);

    return (
        <>
            {selectedPatterns.map((card, index) => (
                < li className="katalogPatterns__card" key={index} >
                    <div className="katalogPatterns__image-container">
                        <Link to="/details">
                            <img
                                className="katalogPatterns__card-image"
                                src={hoveredIndex === index ? card.hoveredImage : card.image}
                                alt="карточка-картинка товара-выкройки"
                                onMouseOver={() => handleMouseOver(index)}
                                onMouseOut={handleMouseOut}
                                style={{ opacity: hoveredIndex === index ? 0.8 : 1 }}
                            />
                        </Link>
                    </div>
                    <div className="katalogPatterns__info">
                        <h4 className="katalogPatterns__info-name">{card.name}</h4>
                        <p className="card__inform-katalog katalogPatterns__text">{card.text}</p>
                        <span className="card__inform-price katalogPatterns__price">{card.price} Руб.</span>
                    </div>
                    <div className="katalogPatterns__more">
                        <Link to="/details" className="new__more-link">
                            <p className="card__more-katalog">Подробнее</p>
                        </Link>
                        <Link to="/details" className="new__more-link">
                            <button className="card__more-button-katalog katalogPatterns__button"></button>
                        </Link>
                    </div >
                </li >
            ))
            }
        </>
    );
}


export default PatternList;
