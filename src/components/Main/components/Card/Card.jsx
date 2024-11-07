import React, { Children, useState } from "react";
import "../../../../blocks/grid.css";
import trashIcon from "../../../../images/Trash_icon.svg";
import like from "../../../../images/grid__box-like.svg";
import Popup from "../Popup/Popup.jsx";
import ImagePopup from "../ImagePopup/ImagePopup.jsx";

export default function Card(props) {
  const { name, link, isLiked } = props.card;

  const [popup, setPopup] = useState(null);
  const ImageComponents = {
    name,
    link,
    children: <ImagePopup name={name} link={link} onClose={handleClosePopup} />,
  };

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <li id="grid">
      {popup && <Popup onClose={handleClosePopup}>{popup.children}</Popup>}
      <div className="grid__box">
        <div className="grid__box-portrait">
          <img
            onClick={() => {
              handleOpenPopup(ImageComponents);
            }}
            className="grid__box-portrait-photo"
            src={link}
            alt={name}
          />
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
