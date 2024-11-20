import React, { useEffect } from "react";
import pencil from "../../images/editPencil.svg";
import editButton from "../../images/button__edit.svg";
import addButton from "../../images/button__add-post.svg";
// import profilePhoto from "../../images/profile__photo-full.jpg";

import Popup from "./components/Popup/Popup.jsx";
import NewCard from "./components/Popup/components/NewCard/NewCard.jsx";
import EditProfile from "./components/Popup/components/EditProfile/EditProfile.jsx";
import EditAvatar from "./components/Popup/components/EditAvatar/EditAvatar.jsx";

import api from "../../utils/api.jsx";
import { CurrentUserContext } from "../../contexts/CurrentUserContext.jsx";
import { useContext } from "react";

import Card from "./components/Card/Card.jsx";

import { useState } from "react";

const NewCardPopup = { title: "Novo lugar", children: <NewCard /> };
const EditProfilePopup = {
  title: "Editar perfil",
  children: <EditProfile />,
};
const EditAvatarPopup = {
  title: "Alterar foto de perfil",
  children: <EditAvatar />,
};

export default function Main() {
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);
  const [popup, setPopup] = useState(null);

  useEffect(() => {
    api.getInitialCards().then((res) => {
      setCards(res);
    });
  }, []);

  useEffect(() => {
    api.getUser().then((res) => {
      setCurrentUser(res);
    });
  }, []);

  function handleOpenPopup(popup) {
    setPopup(popup);
  }
  function handleClosePopup() {
    setPopup(null);
  }

  async function handleCardLike(card) {
    const isLiked = card.likes.some((like) => like._id === currentUser._id);
    if (!isLiked) {
      api
        .apiLike(card._id)
        .then((updatedCard) => {
          setCards((cardState) =>
            cardState.map((currentCard) =>
              currentCard._id === card._id ? updatedCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    } else {
      api
        .apiDislike(card._id)
        .then((updatedCard) => {
          console.log(updatedCard);
          setCards((cardState) =>
            cardState.map((currentCard) =>
              currentCard._id === card._id ? updatedCard : currentCard
            )
          );
        })
        .catch((error) => console.error(error));
    }
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
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
                src={currentUser.avatar}
                alt="Foto de perfil"
                className="profile__photo"
              />
            </div>
            <div>
              <div className="profile__info-content">
                <h1 className="profile__info-name">{currentUser.name}</h1>
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
              <p className="profile__info-bio">{currentUser.about}</p>
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
            <Card
              key={card._id}
              card={card}
              handleCardLike={() => handleCardLike(card)}
              isLiked={card.likes.some((like) => like._id === currentUser._id)}
            />
          ))}
        </ul>

        {popup && (
          <Popup onClose={handleClosePopup} title={popup.title}>
            {popup.children}
          </Popup>
        )}
      </main>
    </CurrentUserContext.Provider>
  );
}
