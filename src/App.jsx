import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="page__content">
        <header className="header">
          <img
            src="./images/header__logo.svg"
            alt="Logo Around the USA"
            className="header__logo"
          />
          <hr className="header__line" />
        </header>
        <main>
          <section className="profile">
            <div className="profile__info">
              <div className="profile__info-photo-portrait">
                <img
                  src="./images/editPencil.svg"
                  alt="Ícone de lápis"
                  className="profile__edit-pencil"
                />
                <img alt="Foto de perfil" className="profile__photo" />
              </div>
              <div>
                <div className="profile__info-content">
                  <h1 className="profile__info-name"></h1>
                  <button type="button" className="profile__button-open-form">
                    <img
                      src="./images/button__edit.svg"
                      alt="Botão de editar perfil"
                      className="profile__button-open-form-img"
                    />
                  </button>
                </div>
                <p className="profile__info-bio"></p>
              </div>
            </div>

            <button type="button" className="profile__button-add-post">
              <img
                src="./images/button__add-post.svg"
                className="profile__button-add-post-img"
                alt="caractere de adição"
              />
            </button>
          </section>
          <section className="grid">
            <template id="grid">
              <div className="grid__box">
                <div className="grid__display" id="popupOverlay">
                  <div className="grid__display-container">
                    <img
                      src="./images/popup__closeicon.png"
                      alt="Ícone para fechar popup"
                      className="grid__display-closer popup__closer"
                    />
                    <img className="grid__display-image" />
                    <p className="grid__display-title"></p>
                  </div>
                </div>

                <div className="popup" id="popupDeletePost">
                  <div
                    className="popup popupWithConfirmation"
                    id="popupOverlay"
                  >
                    <div className="popup__container">
                      <img
                        src="./images/popup__closeicon.png"
                        alt="Ícone para fechar popup"
                        className="popup__closer"
                      />
                      <h2 className="popup__title">Tem certeza?</h2>
                      <form className="form popup__form" novalidate>
                        <button
                          type="submit"
                          className="form__button form__deleteConfirmation"
                        >
                          Sim
                        </button>
                      </form>
                    </div>
                  </div>
                </div>

                <div className="grid__box-portrait">
                  <img className="grid__box-portrait-photo" />
                </div>
                <div className="grid__content">
                  <h2 className="grid__content-title"></h2>
                  <div>
                    <img
                      src="./images/grid__box-like.svg"
                      className="grid__content-like"
                      alt="Icone de coração"
                    />
                    <span className="grid__content-likeNumber"></span>
                  </div>
                </div>

                <img
                  src="./images/Trash_icon.svg"
                  className="grid__delete-button"
                  alt="Ícone de lixeira"
                />
              </div>
            </template>
          </section>
        </main>
        <footer className="footer">
          <p className="footer__copyright">© 2024 Around The U.S.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
