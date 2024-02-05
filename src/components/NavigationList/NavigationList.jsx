import "./NavigationList.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React, { useState } from "react";

function NavigationList({ onMouseEnter, onMouseLeave }) {
    const desktop = useMediaQuery({ query: "(min-width: 1260px)" });
    const [openModal, setOpenModal] = useState(false);

    // function handleOpen() {
    //     setOpenModal(true);
    // }

    // function handleClose() {
    //     setOpenModal(false);
    // }

    return (
        <>
            {desktop ? (
                <article className="navigationList__span"
                // onMouseEnter={handleOpen} onMouseLeave={handleClose}
                >
                    <ul className="navigationList__container navigationList__container-menu-desktop">
                        <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Платья</Link></li>
                        <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Юбки</Link></li>
                        <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Блузки</Link></li>
                        <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Пиджаки</Link></li>
                        <li className="navigationList__list navigation__text"><Link to="/katalog" className="navigation__link">Верхняя одежда</Link></li>
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
