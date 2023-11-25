import React from "react";
import "./Main.css";
import Slide from "../Slide/Slide";
import News from "../News/News";
import Ready from "../Ready/ReadyMade";
import Katalog from "../Katalog/Katalog";

function Main() {
  return (
    <main className="main">
      <Slide />
      <News />
      <Ready />
      <Katalog />
    </main>
  );
}
export default Main;
