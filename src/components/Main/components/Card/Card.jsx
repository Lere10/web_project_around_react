import React from "react";
import "../../../../blocks/grid.css";
import trashIcon from "../../../../images/Trash_icon.svg";
import like from "../../../../images/grid__box-like.svg";

export default function Card(props) {
  const { name, link, isLiked } = props.card;
  return (
    <li id="grid">
      <div className="grid__box">
        <div className="grid__box-portrait">
          <img className="grid__box-portrait-photo" src={link} alt={name} />
        </div>
        <div className="grid__content">
          <h2 className="grid__content-title">{name}</h2>
          <div>
            <img
              src={like}
              className="grid__content-like"
              alt="Icone de coração"
            />
            <span className="grid__content-likeNumber">0</span>
          </div>
        </div>

        <img
          src={trashIcon}
          className="grid__delete-button"
          alt="Ícone de lixeira"
        />
      </div>
    </li>
  );
}

{
  /* <div className="grid__display" id="popupOverlay">
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
          </div> */
}
