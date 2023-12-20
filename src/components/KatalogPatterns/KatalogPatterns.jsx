import React from "react";
import "./KatalogPatterns.css";
import { useMediaQuery } from "react-responsive";
import Header from "../Header/Header";
import KatalogImage from "../../images/Katalog-image.png";
import KatalogImageMobile from "../../images/Katalog-image-mobile.png";

function KatalogPatterns() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 999px)" });

  return (
    <section className="katalogPatterns">
        <Header />
        <div className="katalogPatterns__img">
            {matchesMobile ? (<img src={KatalogImageMobile} className="katalogPatterns__image" />) : 
            ( <img src={KatalogImage} className="katalogPatterns__image" />)}
            
             <div className="katalogPatterns__name">
                <h2 className="news__title katalogPatterns__title">Каталог</h2>
                <p className="news__subtitle katalogPatterns__subtitle">Выкройки с фотографиями для всех</p>
             </div>
        </div>
       
    </section>
  )
}
export default KatalogPatterns;
