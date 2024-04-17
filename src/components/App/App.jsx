import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";
import KatalogPatterns from "../KatalogPatterns/KatalogPatterns";
import Details from "../Details/Details";
import { CurrentUserContext } from "../contexts/CurrentContexts";
import Author from "../Author/Author";
import ForumPage from "../Forum/ForumPage";
import Support from "../Support/Support";
import Contacts from "../Contacts/Contacts";
import SignUp from "../Register/SignUp";
import SignIn from "../Login/SignIn";
import newApi from "../utils/MainApi";
import { restContent } from "../utils/auth";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();
  const [isImagePopupOpened, setIsImagePopupOpened] = useState(false);
  const [selectCard, setSelectCard] = useState({});
  const [userEmail, setUserEmail] = useState('');
  const [isLogged, setIsLogged] = useState(false);


  //регистрация пользователя
  // function handleRegister({ name, email, password }) {
  //   newApi.signUp({ name, email, password })
  //     .then(() => {
  //       handleLogin({ email, password })
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка при регистрации: ${err}`);
  //     });
  // }


  //авторизация пользователя
  // function handleLogin({ email, password }) {
  //   newApi.
  //     signIn({ email, password })
  //     .then((res) => {
  //       localStorage.setItem('jwt', res.token);
  //       setIsLoggedIn(true);
  //       history('/katalog');
  //     })
  //     .catch((err) => {
  //       console.log(`Ошибка при авторизации: ${err}`);
  //     })
  // }

  useEffect(() => {
    if (localStorage.getItem("jwt")) {
      const jwt = localStorage.getItem("jwt");
      const dataEmail = localStorage.getItem("email");
      restContent(jwt)
        .then(() => {
          setUserEmail(dataEmail);
          setIsLogged(true);
        })
        .catch((err) => {
          console.error(err);
        })
    }
  }, [])

  return (
    <div className="page">
      <CurrentUserContext.Provider value={currentUser}>
        <div className="page__content">
          <Routes>
            <Route
              exac
              path="/"
              element={
                <>
                  <Header />
                  <Main cards={cards} setCards={setCards} />
                  <Footer />
                </>
              }
            ></Route>

            <Route path="/signup" element={
              <SignUp
              // onRegister={handleRegister} 
              />} >
            </Route>
            <Route path="/signin" element={
              <SignIn
              // onLogin={handleLogin} 
              />} >
            </Route>

            <Route path="/katalog" element={<>
              <KatalogPatterns />
            </>} >
            </Route>

            <Route path="/katalog/Outerwear" element={<>
              <KatalogPatterns selectedKey={"Outerwear"} />
            </>} >
            </Route>
            <Route path="/katalog/Dresses" element={<>
              <KatalogPatterns selectedKey={"Dresses"} />
            </>} >
            </Route>
            <Route path="/katalog/Вlouses" element={<>
              <KatalogPatterns selectedKey={"Вlouses"} />
            </>} >
            </Route>
            <Route path="/katalog/Skirts" element={<>
              <KatalogPatterns selectedKey={"Skirts"} />
            </>} >
            </Route>
            <Route path="/katalog/Jackets" element={<>
              <KatalogPatterns selectedKey={"Jackets"} />
            </>} >

            </Route>
            <Route path="/author" element={<>
              <Author />
            </>} >

            </Route>
            <Route path="katalog/:selectedKey/details/:cardId" element={<>
              <Details

              />
            </>} >

            </Route>
            <Route path="/support" element={<>
              <Support />
            </>} >
            </Route>
            <Route path="/forum" element={<>
              <ForumPage />
            </>} >
            </Route>
            <Route path="/contacts" element={<>
              <Contacts />
            </>} >
            </Route>
          </Routes>
        </div>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
