import React from "react";
import "./Footer.css";

function Footer() {
  return <footer className="footer">
    <div className="footer__container">
      <ul className="footer__list">
        <li className="footer__list-item">
          <img className="footer__logoImage" src="" alt="" />
          <p className="footer__text">Мы в социальных сетях</p>
          <ul className="footer__list-icon">
            <li className="footer__icon">
              <a href="#" className="footer__icon-link" >
                <img className="footer__icon-image" />
              </a></li>
          </ul>
        </li>

        <li className="footer__list-item">
          <ul className="footer__list-menu">
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <h5 className="footer__title">Главная</h5>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">О проекте</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Блок фотофорум</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Как скачать</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Контакты</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="footer__list-item">
          <ul className="footer__list-menu">
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <h5 className="footer__title">Каталог</h5>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Платья</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Юбки</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Блузки</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Женская верхняя одежда</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Жакеты</p>
              </a>
            </li>
          </ul>
        </li>

        <li className="footer__list-item">
          <ul className="footer__list-menu">
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <h5 className="footer__title">Контакты</h5>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">Россия, Чувашская Республика, г. Чебоксары</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">contact@interno.com</p>
              </a>
            </li>
            <li className="footer__menu">
              <a href="#" className="footer__menu-link">
                <p className="footer__text">(123) 456 - 7890</p>
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </footer>;
}
export default Footer;
