import React from "react";
import "./Comments.css";
import buttonKatalogSlide from "../../images/buttonKatalogSlide.svg";
import commentsSmile from "../../images/comments-smile.png";
import PersonalComment from "./PersonalComment";

function Comments() {
  const arrComments = [
    {
      id: 1,
      avatar: commentsSmile,
      name: "Романова Инна",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
    {
      id: 2,
      avatar: commentsSmile,
      name: "Алексеева Елена",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
    {
      id: 3,
      avatar: commentsSmile,
      name: "Малыгина Татьяна",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
    {
      id: 4,
      avatar: commentsSmile,
      name: "Иванова Елена",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
    {
      id: 5,
      avatar: commentsSmile,
      name: "Алексеев Олег",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
  ];


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
        <PersonalComment commentArray={arrComments} />
        <button className="forum__over">Перейти к комментариям
          <img
            src={buttonKatalogSlide}
            alt="В каталог"
            className="slide__vector" /></button>
      </div>
    </section>
  );
}

export default Comments;
