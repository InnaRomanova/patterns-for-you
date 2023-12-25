import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Details.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import DetailsImage from "../../images/detailsImage.png";
import map from "lodash/map";
import DetailsVectorSidbar from "../Elements/DetailsVectorSidbar";
import Shoppings from "../Elements/Shopping";
import Favourites from "../Elements/Favourites";


function Details() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });

    const arrDetails = [
        {
            id: 1,
            image: DetailsImage,
        },
        {
            id: 2,
            image: DetailsImage,
        },
        {
            id: 3,
            image: DetailsImage,
        },
        {
            id: 4,
            image: DetailsImage,
        },
        {
            id: 5,
            image: DetailsImage,
        },
        {
            id: 6,
            image: DetailsImage,
        },
    ];

    return (
        <>
            <Header />
            <section className="details">
                <div className="katalogPatterns__img">
                    {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
                        (<img src={KatalogImage} className="katalogPatterns__image" />)}
                </div>
                <div className="details__container">
                    <div className="katalogPatterns__block">
                        <span className="katalogPatterns__navigate">Главная/Каталог выроек/Выкройка изделия/Платье/</span>
                        <h2 className="news__title katalogPatterns__title-text">Платье/наименование</h2>
                    </div>
                    <div className="details__content">
                        <div className="details__description">
                            <ul className="details__list" >
                                <li className="details__list-item">
                                    <img src={DetailsImage} alt="картинка" className="details__image" />
                                </li>
                                <li className="details__list-item">
                                    <img src={DetailsImage} alt="картинка" className="details__image" />
                                </li>
                                <li className="details__list-item">
                                    <img src={DetailsImage} alt="картинка" className="details__image" />
                                </li>
                                <li className="details__list-item">
                                    <img src={DetailsImage} alt="картинка" className="details__image" />
                                </li>
                            </ul>
                            <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>
                        </div>
                        <div className="details__sidebar">
                            <ul className="details__sidmaster">
                                <li className="details__sidmaster-item details__sidebar-number">
                                    Выкройка №023984209</li>

                                <li className="details__sidmaster-item">
                                    <ul className="details__sidebar-list">
                                        <li className="details__sidebar-item">
                                            Расход материала
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Рекомендации по материалам
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Как купить выкройку
                                            <DetailsVectorSidbar /></li>
                                    </ul></li>

                                <li className="details__sidmaster-title">Категории
                                    <ul className="details__sidebar-list">
                                        
                                        <li className="details__sidebar-item">
                                            Женская верхняя одежда
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Пиджаки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Блузки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Юбки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-item">
                                            Платья
                                            <DetailsVectorSidbar /></li>
                                    </ul></li>

                                    <li className="details__sidmaster-item">
                                    Цена: 150 руб.</li>

                                    <li className="details__sidmaster-item">
                                    <button className="">Купить <Shoppings /></button><Favourites /></li>
                            </ul>

                        </div>
                    </div>

                </div>
            </section>
            <Footer />
        </>
    )
}
export default Details;
