import React from "react";
import "./ReadyMade.css";
import ImagePatterns from "../../images/Image-patterns.png";

function Ready() {

  return (
    <section className="ready">
        <div className="ready__container">
            <div className="ready__content">
                <h2 className="ready__title">Готовые выкройки</h2>
                <p className="ready__subtitle">ЛекаМаркет интернет-магазин готовых выкроек одежды. 
                У нас вы найдете выкройки мужской, женской, детской одежды на любой размер и рост. 
                Изделия, сшитые по нашим выкройкам, внесутразнообразие в Ваш повседневный гардероб 
                легкособираясь в капсулы.</p>
                <p className="ready__subtitle">Современные модели для любого случая жизни, 
                будь это прогулка с семьей или праздничноемероприятие.Создавай неповторимый 
                образ с ЛекаМаркет!</p>
            </div>
            <div className="ready__image">
                <img src={ImagePatterns} alt="картинка" className="ready__image-petterns" />
            </div>
        </div>
    </section>
  );
}

export default Ready;
