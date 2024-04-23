import React from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import "./Details.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import Work from "../Work/Work";
import DetailsContent from "./DetailsContent";
import { useLocation } from 'react-router-dom';
import get from "lodash/get";
import { arrClothes } from "../Constants/Objects/Massiv";

function Details() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const location = useLocation();
    const routeSelectedKey = get(location, "pathname").split("/").at(2);
    const routeValueId = get(location, "pathname").split("/").at(-1);
    const selectedCard = arrClothes.filter((item) => item.key === routeSelectedKey);
    const cardValue = selectedCard[0].values.filter((item) => item.id === Number(routeValueId));
    const cardValuePictures = get(cardValue[0], "imageModel", []);

    console.log(cardValue)
    return (
        <>
            <Header />
            <section className="details__wrapper">
                <article className="details">
                    <div className="katalogPatterns__img">
                        {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
                            (<img src={KatalogImage} className="katalogPatterns__image" />)}
                    </div>
                    <div className="details__container">
                        <div className="katalogPatterns__block">
                            <span className="katalogPatterns__navigate">
                                <Link to="/" className="katalogPatterns__navigate-link">Главная/</Link>
                                <Link to="/katalog" className="katalogPatterns__navigate-link">Каталог выроек/</Link>
                                <Link to="/details" className="katalogPatterns__navigate-link">Выкройка изделия-Платье</Link></span>
                            <h2 className="news__title katalogPatterns__title-text">Платье/наименование</h2>
                        </div>

                        <DetailsContent 
                        cardValuePictures={cardValuePictures} 
                        cardValue={cardValue}/>
                    </div>
                </article>

                {/* Работы по выкройке */}
                <Work />
            </section>

            <Footer />
        </>
    )
}
export default Details;
