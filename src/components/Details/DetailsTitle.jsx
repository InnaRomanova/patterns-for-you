import React from "react";
import { Link } from "react-router-dom";

function DetailsTitle({ cardValueName }) {


    return (
        <>
            {cardValueName.map((names, index) => {
                <>
                <span  className="katalogPatterns__navigate">
                    <Link  to="/" className="katalogPatterns__navigate-link">Главная/</Link>
                    <Link to="/katalog" className="katalogPatterns__navigate-link">Каталог выроек/</Link>
                    <Link to="/details" className="katalogPatterns__navigate-link">Выкройка изделия-{names}</Link></span>
                <h2 key={index} className="news__title katalogPatterns__title-text">{names}</h2>
            </>
            })}
        </>
    )
}

export default DetailsTitle;