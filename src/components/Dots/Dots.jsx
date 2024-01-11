import React, { useContext, useState, useRef } from "react";

import "./Dots.css";

//компонент точек слайдера, их перебор
 function Dots({onClick}) {
  // const swiperElRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(1);

//   const handlePrev = useCallback(() => {
//     if (!swiperElRef.current) return;
//     swiperElRef.current.swiper.slidePrev();
// }, []);

// const handleNext = useCallback(() => {
//     if (!swiperElRef.current) return;
//     swiperElRef.current.swiper.slideNext();
// }, []);
  // const { slidesCount } = useContext(CurrentUserContext);

  // const renderDots = () => {
  //   const dots = [];
  //   for (let i = 0; i < slidesCount; i++) {
  //     dots.push(<Dot key={`dot-${i}`} number={i} />);
  //   }

  //   return dots;
 // };

 const moveDot = index => {
  setCurrentIndex(index);
 }

  return (
     <div className="dots__container">
      {Array.from({length: 5}).map((item, index) => (
         <div
         key={index}
         onClick={() => moveDot(index + 1)} 
         className={currentIndex.id === index + 1 ? "dots active" : "dots"}></div>
      ))}
    
  </div>
  )
 
  

}
export default Dots