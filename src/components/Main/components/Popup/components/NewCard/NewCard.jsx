import React from "react";
import "../../../../../../blocks/form.css";
import "../../../../../../blocks/popup.css";

export default function NewCard() {
  return (
    <form className="form popup__form">
      <fieldset className="form__fieldset">
        <input
          type="text"
          id="title"
          className="form__input form__input-name"
          placeholder="Título da postagem"
          name="title"
          minLength="2"
          maxLength="30"
          required
        />
        <span className="form__input-error-message form__title-error"></span>
        <input
          type="url"
          id="imageURL"
          className="form__input form__input-bio"
          name="imageLink"
          placeholder="URL da Imagem"
          required
        />
        <span className="form__input-error-message form__imageURL-error"></span>
      </fieldset>
      <button type="submit" className="form__button">
        Salvar
      </button>
    </form>
  );
}
