import React from "react";
import "./Main.css";
import Slide from "../Slide/Slide";
import News from "../News/News";
import Ready from "../Ready/ReadyMade";
import Katalog from "../Katalog/Katalog";
import Pattern from "../Pattern/Pattern";
import Forum from "../Forum/Forum";
import Comments from "../Comments/Comments";

function Main({ arrCards }) {
  return (
    <main className="main">
      <Slide />
      <News />
      <Ready />
      <Katalog cards={arrCards} />
      <Pattern />
      <Forum />
      <Comments />
    </main>
  );
}
export default Main;
