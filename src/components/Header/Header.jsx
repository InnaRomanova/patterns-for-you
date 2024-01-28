import React from "react";
import "./Header.css";
import { useState } from "react";
import Logo from "../../images/Logo.svg";
import Seach from "../../images/search.svg";
import SignInUp from "../../images/signInUp.svg";
import menuMobile from "../../images/menuMobile.svg";
import Navigation from "../Navigation/Navigation";
import CloseButtonMenu from "../../images/closeButton-menuMobile.svg";


function Header() {
  const [openModal, setOpenModal] = useState(false);

  function handleOpen() {
    setOpenModal(true);
  }

  function handleClose() {
    setOpenModal(false);
  }

  return (
    <header className="header">
      <div className="header__container">
        <div className="header__menu-mobile">


          {openModal ? (<button className="header__closeButton-menu" onClick={handleClose}>
            <img src={CloseButtonMenu} alt="меню" className="header__closeButton-image" /></button>) :
            (<button className="header__menu-button" onClick={handleOpen}>
              <img src={menuMobile} alt="меню" className="header__menu-image" /></button>)}

          {openModal ? (<Navigation handleClose={handleClose} />) : ""}

        </div>
        <div className="header__logo">
          <img className="header__logo-image" src={Logo} alt="логотип" />
        </div>
        <div className="header__menu">
          <ul className="header__lists">
            <li className="header__link">
              <a
                className="header__link-item header__link-item_active"
                href="/"
              >
                Главная
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="/katalog">
                Каталог выкроек
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="/support">
                Как скачать
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="/block">
                Блок
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="/contacts">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className="header__seach">
          <img className="header__seach-image" src={Seach} alt="поиск" />
        </div>
        <div className="header__sign">
          <img
            className="header__sign-image"
            src={SignInUp}
            alt="авторизация/регистрация"
          />
          <div className="header__sign-container">
            <button className="header__sign-button header__sign-in">
              Вход
            </button>
            <span className="header__slesh">/</span>
            <button className="header__sign-button header__sign-up">
              Регистрация
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
