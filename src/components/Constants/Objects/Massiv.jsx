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
import techpic from "../../../images/techpic.jpg";

//данные для комментарий
import commentsSmile from "../../../images/comments-smile.png";

//данные для каталога
import katalogImage1 from "../../../images/katalogImage1.png";

//данные для KatalogPatterns массива arrKatalogs
import Photo1 from "../../../images/Photo.png";
import Photo2 from "../../../images/Photo (1).png";
import Photo3 from "../../../images/Photo (2).png";
import Photo4 from "../../../images/Photo (3).png";

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
    hoveredImage: techpic,
  },
  {
    id: 2,
    image: coat,
    name: "Пальто осень-весна 2023",
    text: "женское осенне-весеннее пальто",
    price: 135.00,
    hoveredImage: techpic,
  },
  {
    id: 3,
    image: dress,
    name: "Платье Романтика",
    text: "женское платье",
    price: 135.00,
    hoveredImage: techpic,
  },
  {
    id: 4,
    image: blouse,
    name: "Блузка",
    text: "женская повседневная блузка",
    price: 135.00,
    hoveredImage: techpic,
  },
  {
    id: 5,
    image: blouse,
    name: "Блузка",
    text: "женская повседневная блузка",
    price: 135.00,
    hoveredImage: techpic,
  },
  {
    id: 6,
    image: Photo1,
    name: "Белое платье",
    text: "женское платье",
    price: 135.0,
    hoveredImage: techpic,
  },
  {
    id: 7,
    image: Photo2,
    name: "Желтое платье",
    text: "женское платье",
    price: 135.0,
    hoveredImage: techpic,
  },
  {
    id: 8,
    image: Photo3,
    name: "Платье-сарафан",
    text: "платье",
    price: 135.0,
    hoveredImage: techpic,
  },
  {
    id: 9,
    image: Photo4,
    name: "Комплект",
    text: "женское платье",
    price: 135.0,
    hoveredImage: techpic,
  },
  {
    id: 10,
    image: Photo4,
    name: "Комплект",
    text: "женское платье",
    price: 135.0,
    hoveredImage: techpic,
  },
  {
    id: 11,
    image: Photo3,
    name: "Синее платье-сарафан",
    text: "женское платье",
    price: 135.0,
    hoveredImage: techpic,
  },
];

export const arrClothes = [
  {
    id: 0,
    key: "Outerwear",
    titles: "Верхняя одежда/Outerwear",//Верхняя одежда/Пальтишки
    image: coat,
    detailed: "Decor",
    values: [{
      id: 0,
      image: coat,
      name: "Пальто осень-весна 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 1,
      image: dress,
      name: "Пусть будет пальто",
      text: "женское пальто",
      price: 131.00,
      hoveredImage: techpic,
    },
    {
      id: 2,
      image: coat,
      name: "Пальто осень-весна 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 3,
      image: dress,
      name: "Пусть будет пальто",
      text: "женское пальто",
      price: 131.00,
      hoveredImage: techpic,
    },
    {
      id: 4,
      image: coat,
      name: "Пальто осень-весна 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: dress,
      name: "Пусть будет пальто",
      text: "женское пальто",
      price: 131.00,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: coat,
      name: "Пальто осень-весна 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 7,
      image: dress,
      name: "Пусть будет пальто",
      text: "женское пальто",
      price: 131.00,
      hoveredImage: techpic,
    },
    {
      id: 8,
      image: coat,
      name: "Пальто осень-весна 2023",
      text: "женское осенне-весеннее пальто",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 9,
      image: dress,
      name: "Пусть будет пальто",
      text: "женское пальто",
      price: 131.00,
      hoveredImage: techpic,
    }]
  },
  {
    id: 1,
    key: "Dresses",
    titles: "Платья/Dresses",//Платья
    image: dress,
    detailed: "Decor",
    values: [{
      id: 0,
      image: dress,
      name: "Платье Романтика",
      text: "женское платье",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 2,
      image: Photo1,
      name: "Белое платье",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 3,
      image: Photo2,
      name: "Желтое платье",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 4,
      image: Photo3,
      name: "Платье-сарафан",
      text: "платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: Photo4,
      name: "Комплект",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 6,
      image: Photo3,
      name: "Синее платье-сарафан",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 7,
      image: dress,
      name: "Платье Романтика",
      text: "женское платье",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 8,
      image: Photo1,
      name: "Белое платье",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 9,
      image: Photo2,
      name: "Желтое платье",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 10,
      image: Photo3,
      name: "Платье-сарафан",
      text: "платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 11,
      image: Photo4,
      name: "Комплект",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    },
    {
      id: 12,
      image: katalogImage1,
      name: "Синее платье-сарафан",
      text: "женское платье",
      price: 135.0,
      hoveredImage: techpic,
    }]
  },
  {
    id: 3,
    key: "Вlouses",
    titles: "Блузки/Вlouses",//Блузки
    image: blouse,
    detailed: "Decor",
    values: [{
      id: 1,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 2,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 3,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 4,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 6,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 7,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 8,
      image: blouse,
      name: "Блузка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    }]
  },
  {
    id: 3,
    key: "Skirts",
    titles: "Юбки/Skirts",//Юбки
    image: blouse,
    detailed: "Decor",
    values: [{
      id: 1,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 2,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 3,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 4,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 6,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 7,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 8,
      image: blouse,
      name: "Юбка",
      text: "женская повседневная блузка",
      price: 135.00,
      hoveredImage: techpic,
    }]
  },
  {
    id: 3,
    key: "Jackets",
    titles: "Жакеты/Jackets",//Жакеты
    image: blouse,
    detailed: "Decor",
    values: [{
      id: 1,
      image: blouse,
      name: "Жакеты",
      text: "женский жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 2,
      image: blouse,
      name: "Жакеты",
      text: "женский жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 3,
      image: blouse,
      name: "Жакеты",
      text: "женский жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 4,
      image: blouse,
      name: "Жакеты",
      text: "женский жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 5,
      image: blouse,
      name: "Жакеты",
      text: "Жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 6,
      image: blouse,
      name: "Жакет",
      text: "Жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 7,
      image: blouse,
      name: "Жакет",
      text: "женский жакет",
      price: 135.00,
      hoveredImage: techpic,
    },
    {
      id: 8,
      image: blouse,
      name: "Жакет",
      text: "Жакет",
      price: 135.00,
      hoveredImage: techpic,
    }]
  }]

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