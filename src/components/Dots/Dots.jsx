import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentContexts";
import Dot from "./Dot";

import "./Dots.css";

//компонент точек слайдера, их перебор
export default function Dots() {
  const { slidesCount } = useContext(CurrentUserContext);
  const [active, setActive] = React.useState(0);
  const isActive = value => active === value && 'active'

  const renderDots = () => {
    const dots = [];
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />);
    }

    return dots;
  };

  return <div className="dots">{renderDots()}</div>;


//   const renderDots = () => slides.map((silde, index) => ( // check index
//         <li 
//             className={ isActive(index) + ' dots' }   
//             key={ index }>
//                 <button onClick={ () => setActive(index) }>
//                     <span>&#9679;</span>
//                 </button>
//         </li> 
//     ));
}