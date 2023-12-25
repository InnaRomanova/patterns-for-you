import React from "react";
import "./KatalogPatterns.css";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import CardKatalog from "../Card/CardKatalog";
import Photo1 from "../../images/Photo.png";
import Photo2 from "../../images/Photo (1).png";
import Photo3 from "../../images/Photo (2).png";
import Photo4 from "../../images/Photo (3).png";

//главный компонент отображения каталога выкроек
function KatalogPatterns() {
  const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });

  const arrKatalogs = [
    {
      id: 1,
      image: Photo1,
      name: "Платья",
      text: "женское платье",
      price: 135.0,
    },
    {
      id: 2,
      image: Photo2,
      name: "Жакеты",
      text: "женское платье",
      price: 135.0,
    },
    {
      id: 3,
      image: Photo3,
      name: "Юбки",
      text: "женское платье",
      price: 135.0,
    },
    {
      id: 4,
      image: Photo4,
      name: "Блузки",
      text: "женское платье",
      price: 135.0,
    },
    {
      id: 5,
      image: Photo4,
      name: "Блузки",
      text: "женское платье",
      price: 135.0,
    },
    {
      id: 6,
      image: Photo3,
      name: "Блузки",
      text: "женское платье",
      price: 135.0,
    },
  ];

  return (
    <>
      <Header />
      <section className="katalogPatterns">
        <div className="katalogPatterns__img">
          {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) :
            (<img src={KatalogImage} className="katalogPatterns__image" />)}

          <div className="katalogPatterns__name">
            <h2 className="news__title katalogPatterns__title">Каталог</h2>
            <p className="news__subtitle katalogPatterns__subtitle">Выкройки с фотографиями для всех</p>
          </div>
        </div>

        {/* блок отображения всех карточек с фотографиями */}
        <div className="katalogPatterns__container">
          <div className="katalogPatterns__block">
            <h2 className="news__title katalogPatterns__title-text">Женская одежда</h2>
            <span className="katalogPatterns__navigate">Главная/Каталог/Выкройки/Женская одежда/</span>
          </div>

          <ul className="katalogPatterns__cards">
            <CardKatalog swiperKatalog={arrKatalogs} />
          </ul>
          <button className="katalogPatterns__show-more">Показать еще</button>

        </div>
      </section>
      <Footer />

    </>
  )
}
export default KatalogPatterns;
