import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";

export default function EditAvatar() {
  return (
    <form className="form popup__form" noValidate>
      <fieldset className="form__fieldset">
        <input
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
