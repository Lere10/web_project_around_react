import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";

export default function EditAvatar() {
  return (
    <form class="form popup__form" novalidate>
      <fieldset class="form__fieldset">
        <input
          id="avatarLink"
          type="url"
          class="form__input form__input-bio"
          minlength="2"
          maxlength="200"
          required
        />
        <span class="form__input-error-message form__avatarLink-error"></span>
      </fieldset>
      <button type="submit" class="form__button">
        Salvar
      </button>
    </form>
  );
}
