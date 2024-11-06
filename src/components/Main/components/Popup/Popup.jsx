import React from "react";
import "../../../../blocks/popup.css";
import closeIcon from "../../../../images/popup__closeicon.png";

export default function Popup(props) {
  const { onClose, title, children } = props;
  return (
    <>
      <section class="popup" id="popupUser">
        <div class="popup__container" id="popupOverlay">
          <img
            onClick={onClose}
            src={closeIcon}
            id="closeIcon"
            alt="Ícone para fechar popup"
            class="popup__closer"
          />
          <h2 class="popup__title">{title}</h2>
          {children}
        </div>
      </section>
    </>
  );
}

// Codigo de "children"

//    <form class="form popup__form" novalidate>
//             <fieldset class="form__fieldset">
//               <input
//                 id="name"
//                 type="text"
//                 class="form__input form__input-name"
//                 minlength="2"
//                 maxlength="40"
//                 required
//               />
//               <span class="form__input-error-message form__name-error"></span>
//               <input
//                 id="bio"
//                 type="text"
//                 class="form__input form__input-bio"
//                 minlength="2"
//                 maxlength="200"
//                 required
//               />
//               <span class="form__input-error-message form__bio-error"></span>
//             </fieldset>
//             <button type="submit" class="form__button">
//               Salvar
//             </button>
//           </form>
