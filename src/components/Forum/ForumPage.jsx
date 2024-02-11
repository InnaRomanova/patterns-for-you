import React from "react";
import { useMediaQuery } from "react-responsive";
import "./Forum.css";
import Header from "../Header/Header";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import PaginationLeft from "../Elements/PaginationLeft";
import PaginationRight from "../Elements/PaginationRight";
import WorkPopulation from "../Work/WorkPopulation";
import { arrPopulation } from "../Constants/Objects/WorkMassiv";
import { arrWorks } from "../Constants/Objects/WorkMassiv";
import WorkCards from "../Work/WorkCards";
import Footer from "../Footer/Footer";
import { Link } from "react-router-dom";

function ForumPage() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });


    return (
        <>
            <Header />
            <div className="katalogPatterns__img">
                {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
                    (<img src={KatalogImage} className="katalogPatterns__image" />)}

                <div className="katalogPatterns__name">
                    <h2 className="news__title katalogPatterns__title">Блок форум</h2>
                    <p className="news__subtitle katalogPatterns__subtitle">Фотографии / Комментарии</p>
                </div>
            </div>

            <div className="details__container">
                <div className="katalogPatterns__block">
                    <span className="katalogPatterns__navigate">
                        <Link to="/" className="katalogPatterns__navigate-link">Главная/</Link>
                        {/* <Link to="/katalog" className="katalogPatterns__navigate-link">Каталог выкроек/</Link> */}
                        <Link to="/forum" className="katalogPatterns__navigate-link">Блок форум</Link></span>
                </div>

                {/* Популярные работы за неделю */}
                <div className="work__container">
                    <h2 className="news__title katalogPatterns__title-text">Популярные работы по выкройке</h2>
                    <p className="details__text">Поделитесь фотографиями и мнением.</p>
                </div>

                <WorkPopulation swiperPopulation={arrPopulation} />

                <div className="work__container">
                    <h2 className="news__title katalogPatterns__title-text">Работы с фотографиями и комментариями</h2>
                </div>
                <WorkCards swiperArray={arrWorks} />

                <div className="work__pagination">
                    <div className="work__pagination-container">
                        <PaginationLeft />
                        <button className="work__number">1</button>
                        <button className="work__number work__number_active">2</button>
                        <PaginationRight />
                    </div>
                    <button className="work__add-entry">Добавить запись</button>
                    <div className="work__download">
                        <button className="work__download-button">Загрузить еще</button>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    );
}

export default ForumPage;
