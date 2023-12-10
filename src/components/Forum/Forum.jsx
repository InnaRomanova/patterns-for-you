import React from "react";
import "./Forum.css";
import fotoForum1 from '../../images/forumFoto1.png';
import fotoForum2 from '../../images/forumFoto2.png';
import fotoForum3 from '../../images/forumFoto3.png';
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";

function Forum() {



  return (
    <section className="forum">
        <div className="forum__content">
            <h2 className="news__title forum__title">Блок фотофорум</h2>
            <p className="forum__subtitle">Поделитесь фотографией сшитой 
            вещи по нашей выкройке и получите бонусы</p>
        </div>
        <ul className="forum__cards">
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={fotoForum1} alt="" className="forum__link-image" />
                </a>
            </li>
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={fotoForum2} alt="" className="forum__link-image" />
                </a>
            </li>
            <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={fotoForum3} alt="" className="forum__link-image" />
                </a>
            </li>
        </ul>
        <button className="forum__over">Перейти на фотофорум<img
            src={buttonKatalogSlide}
            alt="В каталог"
            className="slide__vector"
          /></button>
    </section>
  );
}

export default Forum;
