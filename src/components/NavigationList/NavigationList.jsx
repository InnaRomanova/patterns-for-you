import React from "react";
import "./NavigationList.css";
import { Link } from "react-router-dom";

function NavigationList() {

    return (
        <ul className="navigationList__container">
            <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
            <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
            <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
            <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
            <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
        </ul>
    );
}
export default NavigationList;
