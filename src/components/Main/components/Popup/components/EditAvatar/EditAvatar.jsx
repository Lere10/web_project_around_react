import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";
import { useContext, useState } from "react";

export default function EditAvatar() {
  const { currentUser, handleUpdateAvatar } = useContext(CurrentUserContext);
  const [avatar, setAvatar] = useState(currentUser.avatar);

  const handleAvatarChange = (e) => {
    setAvatar(e.target.value);
  };

  function handleSubmit(e) {
    e.preventDefault();
    handleUpdateAvatar({ link: avatar });
  }

  return (
    <form className="form popup__form" onSubmit={handleSubmit}>
      <fieldset className="form__fieldset">
        <input
          onChange={handleAvatarChange}
          id="avatarLink"
          type="url"
          className="form__input form__input-bio"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error-message form__avatarLink-error"></span>
      </fieldset>
      <button type="submit" className="form__button">
        Salvar
      </button>
    </form>
  );
}
