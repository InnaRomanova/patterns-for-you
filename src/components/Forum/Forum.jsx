import React from "react";
import "./Forum.css";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import ForumCard from "./ForumCard";
import arrForum from "./ForumData";

function Forum() {


  // const forums = arrForum.map((forum, index) => {
  //   const firstImage = forum.image[0]; // получаем первое изображение из массива
  //   return (
  //     <li key={index} className="forum__card">
  //       <a href="#" className="forum__link">
  //         <img src={firstImage} alt="картинка пользователя" className="forum__link-image" />
  //       </a>
  //     </li>
  //   );
  // })


  return (
    <section className="forum">
      <div className="forum__content">
        <h2 className="news__title forum__title">Блок фотофорум</h2>
        <p className="forum__subtitle">Поделитесь фотографией сшитой
          вещи по нашей выкройке и получите бонусы</p>
      </div>
      <ForumCard
      // forumArray={forums} 
      />
      <button className="forum__over">Перейти на фотофорум<img
        src={buttonKatalogSlide}
        alt="В каталог"
        className="slide__vector"
      /></button>
    </section>
  );
}

export default Forum;
