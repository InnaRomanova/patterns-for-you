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
import Work from "../Work/Work";
import DetailsSlide from "../Details/DetailsSlide";
import DetailsSlide1 from "../../images/detailsSlide1.png";


function Details() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });

    const arrDetails = [
        {
            id: 1,
            image: DetailsImage,
        },
        {
            id: 2,
            image: DetailsSlide1,
        },
        {
            id: 3,
            image: DetailsImage,
        },
        {
            id: 4,
            image: DetailsSlide1,
        },
        {
            id: 5,
            image: DetailsImage,
        },
        {
            id: 6,
            image: DetailsSlide1,
        },
    ];

    const details = [];

    arrDetails.forEach((detail, index) => {
        details.push(
            <>
                <li className="details__list-item">
                    <img src={detail.image} alt="картинка" className="details__image" />
                </li>
            </>
        );
    });


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
                     {mobile ? (<>
                        <div className="details__description">
                        <DetailsSlide swiperDetails={arrDetails} />
                        </div>
                         {/* Сайт-бар  */}
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

                                <li className="details__sidmaster-title">

                                    <ul className="details__sidebar-list-kategories">
                                        Категории
                                        <li className="details__sidebar-kategories">
                                            Женская верхняя одежда
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Пиджаки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Блузки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Юбки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Платья
                                            <DetailsVectorSidbar /></li>
                                    </ul></li>

                                <li className="details__sidmaster-price">
                                    Цена: 150 руб.</li>

                                <li className="details__sidebar-item">
                                    <button className="details__sidmaster-shopping">Купить <Shoppings />
                                    </button><Favourites /></li>
                            </ul>
                            <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>
                        </div>
                        </>) : (<>
                        <div className="details__description">
                        <DetailsSlide swiperDetails={arrDetails} />
                       <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>
                        </div>

                        {/* Сайт-бар */}
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

                                <li className="details__sidmaster-title">

                                    <ul className="details__sidebar-list-kategories">
                                        Категории
                                        <li className="details__sidebar-kategories">
                                            Женская верхняя одежда
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Пиджаки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Блузки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Юбки
                                            <DetailsVectorSidbar /></li>
                                        <li className="details__sidebar-kategories">
                                            Платья
                                            <DetailsVectorSidbar /></li>
                                    </ul></li>

                                <li className="details__sidmaster-price">
                                    Цена: 150 руб.</li>

                                <li className="details__sidebar-item">
                                    <button className="details__sidmaster-shopping">Купить <Shoppings />
                                    </button><Favourites /></li>
                            </ul>

                        </div>
                        </>)}
                    </div>
                </div>

                {/* Работы по выкройке */}
                <Work />
            </section>
            <Footer />
        </>
    )
}
export default Details;
