import React from "react";

import "./Dots.css";

//компонент точек слайдера, их перебор
function Dots({ currentIndex, setCurrentIndex, onSlideChange }) {

  const moveDot = index => {
    setCurrentIndex(index);
  }


  //Чтобы прописать передачу обработчика события `onSlideChange` 
  //добавленить в список принимаемых 
  //свойств компонента `Dots` и вызывает его при изменении значения 
  //`currentIndex`\.
  React.useEffect(() => {
    if (onSlideChange) {
      onSlideChange(currentIndex);
    }
  }, [currentIndex, onSlideChange]);

  return (
    <div className="dots__container">
      {Array.from({ length: 5 }).map((item, index) => (
        <div
          key={index}
          onClick={() => moveDot(index + 1)}
          className={currentIndex === index + 1 ? "active" : "dots"}
        ></div>
      ))}
    </div>
  );
};
export default Dots