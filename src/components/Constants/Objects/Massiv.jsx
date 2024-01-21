import fotoForum1 from '../../../images/forumFoto1.png';
import fotoForum2 from '../../../images/forumFoto2.png';
import fotoForum3 from '../../../images/forumFoto3.png';


import DetailsSlide1 from "../../../images/detailsSlide1.png";
import DetailsImage from "../../../images/detailsImage.png";
import Model1 from "../../../images/model1.png";
import Model2 from "../../../images/ModelImage2.png";
import Model3 from "../../../images/ModelImage3.png";

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