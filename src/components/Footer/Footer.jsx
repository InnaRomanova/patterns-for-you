import React from "react";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";
import Logo from "../../images/Logo.svg";
import LogoMobile from "../../images/LogoMobile.svg";
import whatssApp from "../../images/whatsapp-icon.png";
import telegramm from "../../images/telegramm-icon.png";
import viber from "../../images/viber-icon.png";
import vk from "../../images/vk-icon.png";
import { Link, NavLink } from "react-router-dom";

function Footer() {
  const matchesMobile = useMediaQuery({ query: "(max-width: 427px)" });

  return (
    <>
      <footer className="footer">
        <div className="footer__container">
          <ul className="footer__list">
            {matchesMobile ? (<>
              <li className="footer__list-item">
                <ul className="footer__list-menu">
                  <li className="footer__menu">
                    <NavLink to="/" className="footer__menu-link">
                      <h5 className="footer__title">Главная</h5>
                    </NavLink>
                  </li>
                  <li className="footer__menu">
                    <NavLink to="/about" className="footer__menu-link">
                      <p className="footer__text">О проекте</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu">
                    <NavLink to="/forum" className="footer__menu-link">
                      <p className="footer__text">Блок фотофорум</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu">
                    <NavLink to="/support" className="footer__menu-link">
                      <p className="footer__text">Как скачать</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu">
                    <NavLink to="/contacts" className="footer__menu-link">
                      <p className="footer__text">Контакты</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="footer__list-item">
                <ul className="footer__list-menu">
                  <li className="footer__menu">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <h5 className="footer__title">Каталог</h5>
                    </NavLink>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <p className="footer__text">Платья</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <p className="footer__text">Юбки</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <p className="footer__text">Блузки</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <p className="footer__text">Женская верхняя одежда</p>
                    </NavLink>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <NavLink to="/katalog" className="footer__menu-link">
                      <p className="footer__text">Жакеты</p>
                    </NavLink>
                  </li>
                </ul>
              </li>

              <li className="footer__list-item">
                <ul className="footer__list-menu">
                  <li className="footer__menu">
                    <NavLink to="/contacts" className="footer__menu-link">
                      <h5 className="footer__title">Контакты</h5>
                    </NavLink>
                  </li>
                  <li className="footer__menu">
                    <p className="footer__text">Россия, Чувашская Республика, г. Чебоксары</p>
                  </li>
                  <li className="footer__menu">
                    <a href="#" className="footer__menu-link">
                      <p className="footer__text">contact@interno.com</p>
                    </a>
                  </li>
                  <li className="footer__menu">
                    <p className="footer__text">(123) 456 - 7890</p>
                  </li>
                </ul>
              </li>

              <li className="footer__list-item footer__list-block">
                <img className="footer__logoImage" src={LogoMobile} alt="логотип" />
                <p className="footer__text">Мы в социальных сетях</p>
                <ul className="footer__list-icon">
                  <li className="footer__icon">
                    <Link to="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="whatssApp" src={whatssApp} />
                    </Link></li>
                  <li className="footer__icon">
                    <Link to="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="telegramm" src={telegramm} />
                    </Link></li>
                  <li className="footer__icon">
                    <Link to="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="viber" src={viber} />
                    </Link></li>
                  <li className="footer__icon">
                    <Link to="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="vk" src={vk} />
                    </Link></li>
                </ul>
              </li></>) : (<>
                <li className="footer__list-item footer__list-block">
                  <img className="footer__logoImage" src={Logo} alt="логотип" />
                  <p className="footer__text">Мы в социальных сетях</p>
                  <ul className="footer__list-icon">
                    <li className="footer__icon">
                      <Link to="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="whatssApp" src={whatssApp} />
                      </Link></li>
                    <li className="footer__icon">
                      <Link to="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="telegramm" src={telegramm} />
                      </Link></li>
                    <li className="footer__icon">
                      <Link to="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="viber" src={viber} />
                      </Link></li>
                    <li className="footer__icon">
                      <Link to="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="vk" src={vk} />
                      </Link></li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <NavLink to="/" className="footer__menu-link">
                        <h5 className="footer__title">Главная</h5>
                      </NavLink>
                    </li>
                    <li className="footer__menu">
                      <NavLink to="/about" className="footer__menu-link">
                        <p className="footer__text">О проекте</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu">
                      <NavLink to="/forum" className="footer__menu-link">
                        <p className="footer__text">Блок фотофорум</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu">
                      <NavLink to="/support" className="footer__menu-link">
                        <p className="footer__text">Как скачать</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu">
                      <NavLink to="/contacts" className="footer__menu-link">
                        <p className="footer__text">Контакты</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <h5 className="footer__title">Каталог</h5>
                      </NavLink>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <p className="footer__text">Платья</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <p className="footer__text">Юбки</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <p className="footer__text">Блузки</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <p className="footer__text">Женская верхняя одежда</p>
                      </NavLink>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <NavLink to="/katalog" className="footer__menu-link">
                        <p className="footer__text">Жакеты</p>
                      </NavLink>
                    </li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <NavLink to="/contacts" className="footer__menu-link">
                        <h5 className="footer__title">Контакты</h5>
                      </NavLink>
                    </li>
                    <li className="footer__menu">
                      <p className="footer__text">Россия, Чувашская Республика, г. Чебоксары</p>
                    </li>
                    <li className="footer__menu">
                      <a href="#" className="footer__menu-link">
                        <p className="footer__text">contact@interno.com</p>
                      </a>
                    </li>
                    <li className="footer__menu">
                      <p className="footer__text">(123) 456 - 7890</p>
                    </li>
                  </ul>
                </li></>
            )}
          </ul>
          <div className="footer__line">
            <a href="#" className="footer__line-link">
              <p className="footer__line-text">Политика проекта</p></a>
          </div>
        </div>
      </footer>
    </>
  )
}
export default Footer;
