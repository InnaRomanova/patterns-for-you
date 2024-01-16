import React from "react";
import "./Author.css";
import Header from "../Header/Header";
import { useMediaQuery } from "react-responsive";
import AuthorImage from "../../images/AuthorImage.png";
import AuthorImageMobile from "../../images/AuthorImageMobile.png";
import TailorImage from "../Elements/TailorImage";

function Author() {
    const matchesMobile = useMediaQuery({ query: "(max-width: 599px)" });

    return (
        <>
            <Header />
            <div className="katalogPatterns__img">
                {matchesMobile ? (<img src={AuthorImageMobile} className="katalogPatterns__image" />) :
                    (<img src={AuthorImage} className="katalogPatterns__image" />)}
            </div>
            <section className="author">
                <div className="details__container">
                    <article className="author__container">
                        <button className="author__avatar">
                            <img className="author__avatar-image" alt="аватарка" src={AuthorImage} />
                        </button>

                        <div className="author__info">
                            <div className="author__data">
                        
                                <h3 className="author__name">Романова Алина Сидоровна</h3>
                                <button className="author__name-edit"></button>
                            </div>
                            <button className="author__works">
                                <TailorImage /> 3 работы автора
                            </button>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}

export default Author;