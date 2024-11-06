import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";

export default function NewCard() {
  return (
    <form class="form popup__form" novalidate>
      <fieldset class="form__fieldset">
        <input
          type="text"
          id="title"
          class="form__input form__input-name"
          placeholder="Título da postagem"
          name="title"
          minlength="2"
          maxlength="30"
          required
        />
        <span class="form__input-error-message form__title-error"></span>
        <input
          type="url"
          id="imageURL"
          class="form__input form__input-bio"
          name="imageLink"
          placeholder="URL da Imagem"
          required
        />
        <span class="form__input-error-message form__imageURL-error"></span>
      </fieldset>
      <button type="submit" class="form__button">
        Salvar
      </button>
    </form>
  );
}
