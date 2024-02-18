import React from "react";
import "./Footer.css";
import { useMediaQuery } from "react-responsive";
import Logo from "../../images/Logo.svg";
import LogoMobile from "../../images/LogoMobile.svg";
import whatssApp from "../../images/whatsapp-icon.png";
import telegramm from "../../images/telegramm-icon.png";
import viber from "../../images/viber-icon.png";
import vk from "../../images/vk-icon.png";

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
                    <a href="/" className="footer__menu-link">
                      <h5 className="footer__title">Главная</h5>
                    </a>
                  </li>
                  <li className="footer__menu">
                    <a href="#" className="footer__menu-link">
                      <p className="footer__text">О проекте</p>
                    </a>
                  </li>
                  <li className="footer__menu">
                    <a href="/forum" className="footer__menu-link">
                      <p className="footer__text">Блок фотофорум</p>
                    </a>
                  </li>
                  <li className="footer__menu">
                    <a href="/support" className="footer__menu-link">
                      <p className="footer__text">Как скачать</p>
                    </a>
                  </li>
                  <li className="footer__menu">
                    <a href="/contacts" className="footer__menu-link">
                      <p className="footer__text">Контакты</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__list-item">
                <ul className="footer__list-menu">
                  <li className="footer__menu">
                    <a href="/katalog" className="footer__menu-link">
                      <h5 className="footer__title">Каталог</h5>
                    </a>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <a href="/katalog" className="footer__menu-link">
                      <p className="footer__text">Платья</p>
                    </a>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <a href="/katalog" className="footer__menu-link">
                      <p className="footer__text">Юбки</p>
                    </a>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <a href="/katalog" className="footer__menu-link">
                      <p className="footer__text">Блузки</p>
                    </a>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <a href="/katalog" className="footer__menu-link">
                      <p className="footer__text">Женская верхняя одежда</p>
                    </a>
                  </li>
                  <li className="footer__menu footer__list-menu_disable">
                    <a href="/katalog" className="footer__menu-link">
                      <p className="footer__text">Жакеты</p>
                    </a>
                  </li>
                </ul>
              </li>

              <li className="footer__list-item">
                <ul className="footer__list-menu">
                  <li className="footer__menu">
                    <a href="/contacts" className="footer__menu-link">
                      <h5 className="footer__title">Контакты</h5>
                    </a>
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
                    <a href="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="whatssApp" src={whatssApp} />
                    </a></li>
                  <li className="footer__icon">
                    <a href="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="telegramm" src={telegramm} />
                    </a></li>
                  <li className="footer__icon">
                    <a href="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="viber" src={viber} />
                    </a></li>
                  <li className="footer__icon">
                    <a href="#" className="footer__icon-link" >
                      <img className="footer__icon-image" alt="vk" src={vk} />
                    </a></li>
                </ul>
              </li></>) : (<>
                <li className="footer__list-item footer__list-block">
                  <img className="footer__logoImage" src={Logo} alt="логотип" />
                  <p className="footer__text">Мы в социальных сетях</p>
                  <ul className="footer__list-icon">
                    <li className="footer__icon">
                      <a href="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="whatssApp" src={whatssApp} />
                      </a></li>
                    <li className="footer__icon">
                      <a href="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="telegramm" src={telegramm} />
                      </a></li>
                    <li className="footer__icon">
                      <a href="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="viber" src={viber} />
                      </a></li>
                    <li className="footer__icon">
                      <a href="#" className="footer__icon-link" >
                        <img className="footer__icon-image" alt="vk" src={vk} />
                      </a></li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <a href="/" className="footer__menu-link">
                        <h5 className="footer__title">Главная</h5>
                      </a>
                    </li>
                    <li className="footer__menu">
                      <a href="#" className="footer__menu-link">
                        <p className="footer__text">О проекте</p>
                      </a>
                    </li>
                    <li className="footer__menu">
                      <a href="/forum" className="footer__menu-link">
                        <p className="footer__text">Блок фотофорум</p>
                      </a>
                    </li>
                    <li className="footer__menu">
                      <a href="/support" className="footer__menu-link">
                        <p className="footer__text">Как скачать</p>
                      </a>
                    </li>
                    <li className="footer__menu">
                      <a href="/contacts" className="footer__menu-link">
                        <p className="footer__text">Контакты</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <a href="/katalog" className="footer__menu-link">
                        <h5 className="footer__title">Каталог</h5>
                      </a>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <a href="/katalog" className="footer__menu-link">
                        <p className="footer__text">Платья</p>
                      </a>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <a href="/katalog" className="footer__menu-link">
                        <p className="footer__text">Юбки</p>
                      </a>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <a href="/katalog" className="footer__menu-link">
                        <p className="footer__text">Блузки</p>
                      </a>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <a href="/katalog" className="footer__menu-link">
                        <p className="footer__text">Женская верхняя одежда</p>
                      </a>
                    </li>
                    <li className="footer__menu footer__list-menu_disable">
                      <a href="/katalog" className="footer__menu-link">
                        <p className="footer__text">Жакеты</p>
                      </a>
                    </li>
                  </ul>
                </li>

                <li className="footer__list-item">
                  <ul className="footer__list-menu">
                    <li className="footer__menu">
                      <a href="/contacts" className="footer__menu-link">
                        <h5 className="footer__title">Контакты</h5>
                      </a>
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
