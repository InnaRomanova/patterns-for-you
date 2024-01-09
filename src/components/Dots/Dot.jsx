import React, { useContext } from "react";
import { CurrentUserContext } from "../contexts/CurrentContexts";
import "./Dots.css";


export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(CurrentUserContext);

  return (
    <div
      className={`dot ${slideNumber === number ? "active" : ""}`}
      onClick={() => goToSlide(number)}
    />
  );
}