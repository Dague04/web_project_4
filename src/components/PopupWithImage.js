import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor({ popupSelector }) {
    super(popupSelector);
    this._image = this._popupSelector.querySelector(".modal__image");
    this._caption = this._popupSelector.querySelector(".modal__caption");
  }

  open({ name, link }) {
    super.open();

    this._image.src = link;
    // this._popupSelector.querySelector(".modal__image").alt = alt;
    this._caption.textContent = name;
  }
}
