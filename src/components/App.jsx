// import { useEffect, useState } from "react";

import Header from "./Header/Header.jsx";
import Main from "./Main/Main.jsx";
import Footer from "./Footer/Footer.jsx";

// import api from "../utils/api.jsx";
// import { CurrentUserContext } from "../contexts/CurrentUserContext.jsx";

function App() {
  return (
    <>
      <div className="page__content">
        <Header />
        <Main />
        <Footer />
      </div>
    </>
  );
}

export default App;
