import React from "react";
import "./NavigationList.css";

function NavigationList() {

    return (
        <ul className="navigationList__container">
            <li className="navigationList__list navigation__text">Платья</li>
            <li className="navigationList__list navigation__text">Юбки</li>
            <li className="navigationList__list navigation__text">Блузки</li>
            <li className="navigationList__list navigation__text">Пиджаки</li>
            <li className="navigationList__list navigation__text">Верхняя одежда</li>
        </ul>
    );
}
export default NavigationList;
