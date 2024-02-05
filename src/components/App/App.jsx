import "./App.css";
import { Route, Routes } from "react-router-dom";
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

function App() {
  const [cards, setCards] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

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
