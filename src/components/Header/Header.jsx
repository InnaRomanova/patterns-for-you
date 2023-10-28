import React from "react";
import "./Header.css";
import Logo from "../../images/Logo.svg";

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
              <a className="header__link-item" href="#" target="_blank">
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
        <div className="header__sign"></div>
      </div>
      Привет
    </header>
  );
}
export default Header;
