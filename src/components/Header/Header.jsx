import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";
import Seach from "../../images/search.svg";
import SignInUp from "../../images/signInUp.svg";

function Header() {
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__logo">
          <img className="header__logo" src={Logo} alt="логотип" />
        </div>
        <div className="header__menu">
          <ul className="header__lists">
            <li className="header__link">
              <a
                className="header__link-item header__link-item_active"
                href="#"
                target="_blank"
              >
                Главная
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="#" target="_blank">
                Каталог выкроек
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="#" target="_blank">
                Как скачать
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="#" target="_blank">
                Блок
              </a>
            </li>
            <li className="header__link">
              <a className="header__link-item" href="#" target="_blank">
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
          <button className="header__sign-button header__sign-in">Вход</button>
          <span className="header__slesh">/</span>
          <button className="header__sign-button header__sign-up">
            Регистрация
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
