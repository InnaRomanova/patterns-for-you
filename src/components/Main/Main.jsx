import React from "react";
import "./Main.css";
import Slide from "../Slide/Slide";
import News from "../News/News";
import Ready from "../Ready/ReadyMade";

function Main() {
  return (
    <main className="main">
      <Slide />
      <News />
      <Ready />
    </main>
  );
}
export default Main;
