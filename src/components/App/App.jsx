import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import { useState } from "react";
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
import { api } from "../utils/MainApi";

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});
  const [isloggedIn, setIsLoggedIn] = useState(false);
  const history = useNavigate();


  //регистрация пользователя
  function handleRegister({ name, email, password }) {
    api.signUp({ name, email, password })
      .then(() => {
        handleLogin({ email, password })
      })
      .catch((err) => {
        console.log(`Ошибка при регистрации: ${err}`);
      });
  }


  //авторизация пользователя
  function handleLogin({ email, password }) {
    api.
      signIn({ email, password })
      .then((res) => {
        localStorage.setItem('jwt', res.token);
        setIsLoggedIn(true);
        history('/katalog');
      })
      .catch((err) => {
        console.log(`Ошибка при авторизации: ${err}`);
      })
  }

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
              <SignUp onRegister={handleRegister} />} >
            </Route>
            <Route path="/signin" element={
              <SignIn onLogin={handleLogin} />} >
            </Route>

            <Route path="/katalog" element={<>
              <KatalogPatterns />
            </>} >
            </Route>
            <Route path="/details" element={<>
              <Author />
            </>} >
            </Route>
            <Route path="/author" element={<>
              <Details />
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
