import React from "react";
import pencil from "../../images/editPencil.svg";
import editButton from "../../images/button__edit.svg";
import addButton from "../../images/button__add-post.svg";
import closeIcon from "../../images/popup__closeicon.png";
//import like from "../../images/grid__box-like.svg";
//import trashIcon from "../../images/Trash_icon.svg";
import profilePhoto from "../../images/profile__photo-full.jpg";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar.jsx";

import Card from "./components/Card/Card.jsx";

import { useState } from "react";

const cards = [
  {
    isLiked: false,
    _id: "5d1f0611d321eb4bdcd707dd",
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_yosemite.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:10:57.741Z",
  },
  {
    isLiked: false,
    _id: "5d1f064ed321eb4bdcd707de",
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/web-code/moved_lake-louise.jpg",
    owner: "5d1f0611d321eb4bdcd707dd",
    createdAt: "2019-07-05T08:11:58.324Z",
  },
];

export default function Main() {
  const [popup, setPopup] = useState(null);
  const NewCardPopup = { title: "Novo lugar", children: <NewCard /> };
  const EditProfilePopup = {
    title: "Editar perfil",
    children: <EditProfile />,
  };
  const EditAvatarPopup = {
    title: "Alterar foto de perfil",
    children: <EditAvatar />,
  };

  // console.log(popup);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  return (
    <main>
      <section className="profile">
        <div className="profile__info">
          <div className="profile__info-photo-portrait">
            <img
              onClick={() => {
                handleOpenPopup(EditAvatarPopup);
              }}
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
                  onClick={() => {
                    handleOpenPopup(EditProfilePopup);
                  }}
                  src={editButton}
                  alt="Botão de editar perfil"
                  className="profile__button-open-form-img"
                />
              </button>
            </div>
            <p className="profile__info-bio">Explorar</p>
          </div>
        </div>

        <button
          onClick={() => {
            handleOpenPopup(NewCardPopup);
          }}
          type="button"
          className="profile__button-add-post"
        >
          <img
            src={addButton}
            className="profile__button-add-post-img"
            alt="caractere de adição"
          />
        </button>
      </section>

      <ul className="grid">
        {cards.map((card) => (
          <Card key={card._id} card={card} />
        ))}
      </ul>

      {popup && (
        <Popup onClose={handleClosePopup} title={popup.title}>
          {popup.children}
        </Popup>
      )}
    </main>
  );
}
