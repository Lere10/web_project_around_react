import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";
import { CurrentUserContext } from "../../../../../../contexts/CurrentUserContext";
import { useContext } from "react";

export default function EditProfile() {
  const currentUser = useContext(CurrentUserContext);

  return (
    <form className="form popup__form">
      <fieldset className="form__fieldset">
        <input
          id="name"
          type="text"
          className="form__input form__input-name"
          minLength="2"
          maxLength="40"
          required
        />
        <span className="form__input-error-message form__name-error"></span>
        <input
          id="bio"
          type="text"
          className="form__input form__input-bio"
          minLength="2"
          maxLength="200"
          required
        />
        <span className="form__input-error-message form__bio-error"></span>
      </fieldset>
      <button type="submit" className="form__button">
        Salvar
      </button>
    </form>
  );
}
