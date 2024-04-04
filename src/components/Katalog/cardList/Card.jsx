import React from "react";
import { Link } from "react-router-dom";
import CardButton from "../../Elements/CardButton";

function Card({ pattern }) {


    return (
        <>
            <li className="katalog-card">
                <Link to={`/katalog/${pattern.key}`} className="new__more-link"
                >
                    <img
                        src={pattern.image}
                        alt="картинка выкройки"
                        className="katalog-card__image"
                    /></Link>

                <div className="katalog-card__info">
                    <div className="katalog-card__info-text">
                        <Link to="/katalog" className="new__more-link"><h4 className="katalog-card__name">{pattern.titles}</h4>
                            <p className="katalog-card__detailed">{pattern.detailed} / Подробнее</p></Link>
                    </div>
                    <Link to="/katalog" className="new__more-link"><CardButton /></Link>
                </div>
            </li >
        </>
    )
}

export default Card;