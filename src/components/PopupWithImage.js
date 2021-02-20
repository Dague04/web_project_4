import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
  }

  open({ name, link }) {
    super.open();

    this._popupSelector.querySelector(".modal__image").src = link;
    // this._popupSelector.querySelector(".modal__image").alt = alt;
    this._popupSelector.querySelector(".modal__caption").textContent = name;
  }
}
