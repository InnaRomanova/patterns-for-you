import React from "react";
import "./Author.css";
import Header from "../Header/Header";
import { useMediaQuery } from "react-responsive";
import AuthorImage from "../../images/AuthorImage.png";
import AuthorImageMobile from "../../images/AuthorImageMobile.png";
import TailorImage from "../Elements/TailorImage";
import Shoppings from "../Elements/Shopping";
import Favourites from "../Elements/Favourites";
import DetailsSlide from "../Details/DetailsSlide";
import DetailsVectorSidbar from "../Elements/DetailsVectorSidbar";
import ModelImage from "../../images/model1.png";
import Work from "../Work/Work";
import CommentsModel from "../Comments/CommentsModel";
import Footer from "../Footer/Footer";
import { useState } from 'react';
import AvatarPopup from "./AvatarPopup";
import ProfilePopup from "./ProfilePopup";
import { CurrentUserContext } from "../contexts/CurrentContexts";


function Author({ onClose }) {
    const matchesMobile = useMediaQuery({ query: "(max-width: 599px)" });
    const mobile = useMediaQuery({ query: "(max-width: 883px)" });
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);

    //функция открытия попапа аватара
    const handleEditAvatarClick = () => {
        setIsEditAvatarPopupOpen(true);
    }

    //функция открытия попапа редактирования профиля
    const handleEditProfileClick = () => {
        setIsEditProfilePopupOpen(true)
    }

    //функция закрытия попапа картинки
    const closeAllPopups = () => {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
    }

    const currentUser = React.useContext(CurrentUserContext);

    return (
        <>
            <Header />
            <div className="katalogPatterns__img">
                {matchesMobile ? (<img src={AuthorImageMobile} className="katalogPatterns__image" />) :
                    (<img src={AuthorImage} className="katalogPatterns__image" />)}
            </div>
            <section className="author">
                <div className="details__container">
                    <article className="author__container">
                        <button className="author__avatar" onClick={handleEditAvatarClick} >
                            <img className="author__avatar-image" alt="аватарка" src={currentUser.avatar} />
                        </button>

                        {isEditAvatarPopupOpen && <AvatarPopup onClose={closeAllPopups} />}

                        <div className="author__info">
                            <div className="author__data">

                                <h3 className="author__name">{currentUser.name}</h3>
                                <button className="author__name-edit" onClick={handleEditProfileClick}></button>
                                {isEditProfilePopupOpen && <ProfilePopup onClose={closeAllPopups} />}
                            </div>
                            <button className="author__works">
                                <TailorImage /> работы автора
                            </button>
                        </div>
                    </article>
                    <article className="details__content">
                        {mobile ? (<>
                            <DetailsSlide />

                            {/* Сайт-бар  */}
                            <div className="details__sidebar">
                                <ul className="details__sidmaster">
                                    <li className="details__sidmaster-item">
                                        <img src={ModelImage} alt="модель" className="author__model" /></li>
                                    <li className="details__sidmaster-item details__sidebar-number">
                                        Выкройка №023984209</li>

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
                                    <p className="details__text">Платье из тонкого шитья на подкладке из батиста.</p>

                                    <li className="details__sidmaster-price">
                                        Цена: 150 руб.</li>

                                    <li className="details__sidebar-item">
                                        <button className="details__sidmaster-shopping">Купить <Shoppings />
                                        </button><Favourites /></li>
                                </ul>
                            </div>

                        </>) : (<>
                            <DetailsSlide />

                            {/* Сайт-бар */}
                            <div className="details__sidebar">
                                <ul className="details__sidmaster">
                                    <li className="details__sidmaster-item">
                                        <img src={ModelImage} alt="модель" className="" /></li>

                                    <li className="author__sidmaster">

                                        <ul className="author__item">

                                            <li className="author__item-list author__item-number">
                                                Сшито по выкройке
                                                <span>№023984209</span></li>
                                            <li className="author__item-list author__item-name">
                                                Модель: <span>наименование модели</span></li>
                                        </ul></li>

                                    <li className="details__sidmaster-price">
                                        Цена: 150 руб.</li>

                                    <li className="details__sidebar-item">
                                        <button className="details__sidmaster-shopping">Купить <Shoppings />
                                        </button><Favourites /></li>
                                </ul>

                            </div>


                        </>)}
                    </article>

                </div>
            </section>
            <Work />
            <CommentsModel />
            <Footer />
        </>
    );
}

export default Author;