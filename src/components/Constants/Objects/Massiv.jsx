import fotoForum1 from '../../../images/forumFoto1.png';
import fotoForum2 from '../../../images/forumFoto2.png';
import fotoForum3 from '../../../images/forumFoto3.png';

//данные для массива arrDetails в компоненте 
import DetailsSlide1 from "../../../images/detailsSlide1.png";
import DetailsImage from "../../../images/detailsImage.png";
import Model1 from "../../../images/model1.png";
import Model2 from "../../../images/ModelImage2.png";
import Model3 from "../../../images/ModelImage3.png";

//данные для массива arrPatters
import dress from "../../../images/pattern-dress.png";
import coat from "../../../images/pattern-coat.png";
import blouse from "../../../images/pattern-blouse.png";

//данные для комментарий
import commentsSmile from "../../../images/comments-smile.png";

//данные для каталога
import katalogImage1 from "../../../images/katalogImage1.png";

//массив с объектами, в которых имеются изображения пользователей(их сшитые изделия по выкройке)(от пользователей)
export const arrForum = [
    {
        id: 1,
        image: [fotoForum1, fotoForum2, fotoForum3]
    },
    {
        id: 2,
        image: [fotoForum2, fotoForum3, fotoForum1]
    },
    {
        id: 3,
        image: [fotoForum2, fotoForum3],
    },
    {
        id: 4,
        image: [fotoForum1, fotoForum2],
    },
    {
        id: 5,
        image: [fotoForum3, fotoForum3],
    },
];

//массив содержит объекты с изображениями выкройки на модели (от админа)
export const arrDetails = [
    {
        id: 1,
        image: [Model1, Model2, Model3]
    },
    {
        id: 2,
        image: [DetailsSlide1]
    },
    {
        id: 3,
        image: [Model3, Model2, Model1]
    },
    {
        id: 4,
        image: [DetailsSlide1]
    },
    {
        id: 5,
        image: [DetailsImage, Model1]
    },
    {
        id: 6,
        image: [DetailsSlide1]
    },
];

export const arrPatterns = [
    {
      id: 1,
      image: dress,
      name: "Платье Очарованье",
      text: "женское платье",
      price: 135.00,
    },
    {
      id: 2,
      image: coat,
      name: "Пальто осень-весная 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
    },
    {
      id: 3,
      image: dress,
      name: "Платье Романтика",
      text: "женское платье",
      price: 135.00,
    },
    {
      id: 4,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
    },
    {
      id: 4,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
    },
  ];

  export const arrComments = [
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
    {
      id: 6,
      avatar: commentsSmile,
      name: "Алексеев Олег",
      text: "Все нравиться! Все супер! Носится!",
      marka: "жакет для школы",
    },
  ];

  export const arrReviews = [
    {
      id: 1,
      image: katalogImage1,
      name: "Платья",
      detailed: "Decor",
    },
    {
      id: 2,
      image: katalogImage1,
      name: "Жакеты",
      detailed: "Decor",
    },
    {
      id: 3,
      image: katalogImage1,
      name: "Юбки",
      detailed: "Decor",
    },
    {
      id: 4,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor",
    },
    {
      id: 5,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor",
    },
    {
      id: 6,
      image: katalogImage1,
      name: "Блузки",
      detailed: "Decor",
    },
  ];
