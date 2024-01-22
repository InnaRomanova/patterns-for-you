import React from "react";
import "./Comments.css";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import PersonalComment from "./PersonalComment";
import { Link } from "react-router-dom";
import { arrComments } from "../Constants/Objects/Massiv";

function Comments() {
 
  const comments = [];

  arrComments.forEach((comment, index) => {
    comments.push(
      <>
        <li className="comment__card">
          <div className="comment__personal">
            <a href="#" className="comment__link">
              <img className="comment__link-avatar" alt="аватарка" src={comment.avatar} />
            </a>
            <h4 className="comment__name">{comment.name}</h4>
          </div>
          <div className="comment__info">
            <p className="comment__info-text">{comment.text}</p>
            <p className="comment__info-marka">{comment.marka}</p>
          </div>
        </li>
      </>
    );
  });



  return (
    <section className="comments">
      <div className="comments__content">
        <div className="comments__container">
          <h2 className="news__title forum__title">Комментарии</h2>
        </div>
        <div className="comments__block">
          <PersonalComment commentArray={arrComments} />
        </div>
        <Link to="/comments" className="comments__page">
          <button className="forum__over comments__over">Перейти к комментариям
            <img
              src={buttonKatalogSlide}
              alt="В каталог"
              className="slide__vector" /></button></Link>

      </div>
    </section>
  );
}

export default Comments;
