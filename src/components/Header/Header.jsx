import "./Header.css";
import React, { useState, useCallback } from "react";
import Logo from "../../images/Logo.svg";
import Seach from "../../images/search.svg";
import SignInUp from "../../images/signInUp.svg";
import menuMobile from "../../images/menuMobile.svg";
import Navigation from "../Navigation/Navigation";
import CloseButtonMenu from "../../images/closeButton-menuMobile.svg";
import NavigationList from "../NavigationList/NavigationList";
import { Link, NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";


function Header() {
  const [openModal, setOpenModal] = useState(false);
  const [showNavigationList, setShowNavigationList] = useState(false);

  const location = useLocation();

  function handleOpen() {
    setOpenModal(true);
    setShowNavigationList(true);
  }

  function handleClose() {
    setOpenModal(false);
    setShowNavigationList(false);
  }

  // function handleActiveClass() {
  //   return showNavigationList ? "header__link_active" : "header__linkitem"
  // }

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
        <Link to="/">
          <div className="header__logo">
            <img className="header__logo-image" src={Logo} alt="логотип" />
          </div></Link>
        <div className="header__menu">
          <ul className="header__lists">
            <li className="header__link">
              <NavLink
                to="/" className={
                  location.pathname === "/" ? "header__linkitem_active" : "header__linkitem"}>
                Главная
              </NavLink>
            </li>
            <li
              className="header__link header__link-hover"
              onMouseEnter={handleOpen}
              onMouseLeave={handleClose}
            >
              <NavLink className={
                location.pathname === "/katalog" ? "header__linkitem_active" : "header__linkitem"} to="/katalog"
              >
                Каталог выкроек</NavLink>
              {
                showNavigationList &&
                <NavigationList
                />
              }

            </li>
            <li className="header__link">
              <NavLink className={
                location.pathname === "/support" ? "header__linkitem_active" : "header__linkitem"} to="/support">
                Как скачать
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink className={
                location.pathname === "/forum" ? "header__linkitem_active" : "header__linkitem"} to="/forum">
                Блок
              </NavLink>
            </li>
            <li className="header__link">
              <NavLink className={
                location.pathname === "/contacts" ? "header__linkitem_active" : "header__linkitem"} to="/contacts">
                Контакты
              </NavLink>
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
            <Link to="/signin">
              <button className="header__sign-button header__sign-in">
                Вход
              </button>
            </Link>
            <span className="header__slesh">/</span>
            <Link to="/signup"><button className="header__sign-button header__sign-up">
              Регистрация
            </button></Link>
          </div>
        </div>
      </div>
    </header>
  );
}
export default Header;
