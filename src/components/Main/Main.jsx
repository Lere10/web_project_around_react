import React from "react";
import pencil from "../../images/editPencil.svg";
import editButton from "../../images/button__edit.svg";
import addButton from "../../images/button__add-post.svg";
import closeIcon from "../../images/popup__closeicon.png";
import like from "../../images/grid__box-like.svg";
import trashIcon from "../../images/Trash_icon.svg";
import profilePhoto from "../../images/profile__photo-full.jpg";
// import "../../blocks/"

class Main extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <main>
        <section className="profile">
          <div className="profile__info">
            <div className="profile__info-photo-portrait">
              <img
                src={pencil}
                alt="Ícone de lápis"
                className="profile__edit-pencil"
              />
              <img
                src={profilePhoto}
                alt="Foto de perfil"
                className="profile__photo"
              />
            </div>
            <div>
              <div className="profile__info-content">
                <h1 className="profile__info-name">Jacques Cousteau</h1>
                <button type="button" className="profile__button-open-form">
                  <img
                    src={editButton}
                    alt="Botão de editar perfil"
                    className="profile__button-open-form-img"
                  />
                </button>
              </div>
              <p className="profile__info-bio">Explorar</p>
            </div>
          </div>

          <button type="button" className="profile__button-add-post">
            <img
              src={addButton}
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
                    src={closeIcon}
                    alt="Ícone para fechar popup"
                    className="grid__display-closer popup__closer"
                  />
                  <img className="grid__display-image" />
                  <p className="grid__display-title"></p>
                </div>
              </div>

              <div className="popup" id="popupDeletePost">
                <div className="popup popupWithConfirmation" id="popupOverlay">
                  <div className="popup__container">
                    <img
                      src={closeIcon}
                      alt="Ícone para fechar popup"
                      className="popup__closer"
                    />
                    <h2 className="popup__title">Tem certeza?</h2>
                    <form className="form popup__form" noValidate>
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
                    src={like}
                    className="grid__content-like"
                    alt="Icone de coração"
                  />
                  <span className="grid__content-likeNumber"></span>
                </div>
              </div>

              <img
                src={trashIcon}
                className="grid__delete-button"
                alt="Ícone de lixeira"
              />
            </div>
          </template>
        </section>
      </main>
    );
  }
}

export default Main;