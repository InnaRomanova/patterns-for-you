import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "../Header/Header";
import Main from "../Main/Main";
import Footer from "../Footer/Footer";

function App() {
  return (
    <div className="page">
      {/* <CurrentUserContext.Provider value={currentUser}> */}
      <div className="page__content">
        <Routes>
          <Route
            exac
            path="/"
            element={
              <>
                <Header />
                <Main />
                <Footer />
              </>
            }
          ></Route>
        </Routes>
      </div>
      {/* </CurrentUserContext.Provider> */}
    </div>
  );
}

export default App;
