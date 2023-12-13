import React from "react";
import "./Forum.css";
import fotoForum1 from '../../images/forumFoto1.png';
import fotoForum2 from '../../images/forumFoto2.png';
import fotoForum3 from '../../images/forumFoto3.png';
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import ForumCard from "./ForumCard";

function Forum() {
    const arrForum = [
        {
          id: 1,
          image: fotoForum1,
        },
        {
          id: 2,
          image: fotoForum2,
        },
        {
          id: 3,
          image: fotoForum3,
        },
        {
          id: 4,
          image: fotoForum1,
        },
        {
          id: 4,
          image: fotoForum3,
        },
      ];
    
    
      const forums = [];
    
      arrForum.forEach((forum, index) => {
        forums.push(
          <>
             <li className="forum__card">
                <a href="#" className="forum__link">
                    <img src={forum.image} alt="картинка пользователя" className="forum__link-image" />
                </a>
            </li>
          </>
        );
      });



  return (
    <section className="forum">
        <div className="forum__content">
            <h2 className="news__title forum__title">Блок фотофорум</h2>
            <p className="forum__subtitle">Поделитесь фотографией сшитой 
            вещи по нашей выкройке и получите бонусы</p>
        </div>
        <ForumCard forumArray={arrForum}/>
        <button className="forum__over">Перейти на фотофорум<img
            src={buttonKatalogSlide}
            alt="В каталог"
            className="slide__vector"
          /></button>
    </section>
  );
}

export default Forum;
