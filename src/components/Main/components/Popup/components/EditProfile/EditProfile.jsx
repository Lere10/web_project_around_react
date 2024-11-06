import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";

export default function EditProfile() {
  return (
    <form class="form popup__form" novalidate>
      <fieldset class="form__fieldset">
        <input
          id="name"
          type="text"
          class="form__input form__input-name"
          minlength="2"
          maxlength="40"
          required
        />
        <span class="form__input-error-message form__name-error"></span>
        <input
          id="bio"
          type="text"
          class="form__input form__input-bio"
          minlength="2"
          maxlength="200"
          required
        />
        <span class="form__input-error-message form__bio-error"></span>
      </fieldset>
      <button type="submit" class="form__button">
        Salvar
      </button>
    </form>
  );
}
