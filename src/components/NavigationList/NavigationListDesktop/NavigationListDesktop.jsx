import "../NavigationList.css";
import { Link } from "react-router-dom";
import React from "react";


function NavigationListDesktop({ pattern }) {

    return (
        <>
            <li className="navigationList__list navigation__text">
                <Link to={`/katalog/${pattern.key}`} className="navigation__link">{pattern.titles}</Link></li>
        </>
    );
}
export default NavigationListDesktop;
