import React from "react";
import { useState } from "react";
import "./KatalogPatterns.css";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";
import PatternList from "./PatternList";
import { arrClothes } from "../Constants/Objects/Massiv";
import { useNavigate } from "react-router-dom";
import get from "lodash";

//главный компонент отображения каталога выкроек
function KatalogPatterns({ selectedKey }) {
  const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });
  // const [selectedValues, setSelectedValues] = useState([]);
  // const [selectedCategory, setSelectedCategory] = useState[null];
  const selectedTypeOfClothes = arrClothes.find(item => item.key === selectedKey);

  //извлекает values безопасным путем
  // const selectedPatterns = get(selectedTypeOfClothes, "values", []);
  const selectedPatterns = selectedTypeOfClothes.values;

  console.log(selectedTypeOfClothes)

  // function handleClick(key) {

  //   if (selectedClothes) {
  //     console.log("Найден объект с ключом", key);
  //     setSelectedValues(selectedClothes.values);
  //   } else {
  //     console.log("Не найден объект с ключом", key);
  //   }
  // }


  // const handleCategoryClick = (category) => {
  //   setSelectedCategory(category);
  // }

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
            <span className="katalogPatterns__navigate">
              <Link to="/" className="katalogPatterns__navigate-link">Главная/</Link>
              <Link to="/katalog" className="katalogPatterns__navigate-link">Каталог выкроек/</Link>
              <Link to="/katalog" className="katalogPatterns__navigate-link">Женская одежда/</Link></span>
          </div>
          <ul className="katalogPatterns__cards">

            <PatternList selectedPatterns={selectedPatterns} />
          </ul>
          <button className="katalogPatterns__show-more">Показать еще</button>
        </div>
      </section>
      <Footer />
    </>
  )
}
export default KatalogPatterns;
