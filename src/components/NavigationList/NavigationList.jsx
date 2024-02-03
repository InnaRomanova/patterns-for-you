import React from "react";
import "./NavigationList.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

function NavigationList() {
    const desktop = useMediaQuery({ query: "(min-width: 1260px)" });

    return (
        <>
            {desktop ? (
                <ul className="navigationList__container navigationList__container-menu-desktop">
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
                </ul>
            ) : (
                <ul className="navigationList__container">
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
                    <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
                </ul>
            )}</>
        // <ul className="navigationList__container">
        //     <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
        //     <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
        //     <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
        //     <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
        //     <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
        // </ul>
    );
}
export default NavigationList;
