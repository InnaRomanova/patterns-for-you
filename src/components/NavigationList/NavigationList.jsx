import "./NavigationList.css";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import React from "react";
import NavigationListDesktop from "./NavigationListDesktop";
import NavigationListMobile from "./NavigationListMobile";
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
                     {map(arrClothes, (pattern, index) => (
                            <NavigationListMobile pattern={pattern} key={index} />))}
                </ul>
            )}</>
    );
}
export default NavigationList;
