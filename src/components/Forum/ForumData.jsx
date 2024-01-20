import fotoForum1 from '../../images/forumFoto1.png';
import fotoForum2 from '../../images/forumFoto2.png';
import fotoForum3 from '../../images/forumFoto3.png';

//массив с объектами, в которых имеются изображения пользователей(их сшитые изделия по выкройке)(от пользователей)
const arrForum = [
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

export default arrForum;
