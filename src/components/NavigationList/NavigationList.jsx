import "./NavigationList.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React from "react";
import NavigationListDesktop from "./NavigationListDesktop/NavigationListDesktop";
import { arrClothes } from "../Constants/Objects/Massiv";
import map from "lodash/map";

function NavigationList() {
    const desktop = useMediaQuery({ query: "(min-width: 1260px)" });

    return (
        <>
            {desktop ? (
                <article className="navigationList__span"
                >
                    <ul className="navigationList__container navigationList__container-menu-desktop">
                        {map(arrClothes, (pattern, index) => (
                            <NavigationListDesktop pattern={pattern} key={index} />))}
                    </ul>
                </article>
            ) : (
                <ul className="navigationList__container">
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
                </ul>
            )}</>
    );
}
export default NavigationList;
