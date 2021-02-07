import { imagePopupData } from "./index.js";

export class Card {
  constructor(data, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _createCardTemplate = () => {
    const cardTemplate = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);
    return cardTemplate;
  };

  generateCard() {
    this._cardElement = this._createCardTemplate();
    this._setEventListeners();
    const imageElement = this._cardElement.querySelector(".elements__item");

    imageElement.setAttribute("src", this._link);
    imageElement.setAttribute("alt", this._alt);
    this._cardElement.querySelector(".elements__text").textContent = this._name;

    return this._cardElement;
  }

  // deleteCard(evt) {
  //   evt.target.closest(".elements__list-item").remove();
  // }

  _setEventListeners() {
    this._imageElement = this._cardElement.querySelector(".elements__item");
    // const modalCaption = this._cardElement.querySelector(".modal__caption");

    // like a card
    this._buttonLikes = this._cardElement.querySelector(".elements__heart");
    this._buttonLikes.addEventListener("click", () => {
      buttonLikes.classList.toggle("elements__heart_theme_dark");
    });

    // delete a card
    this._buttonDelete = this._cardElement.querySelector(
      ".elements__delete-card"
    );
    this._buttonDelete.addEventListener("click", (evt) => {
      evt.target.closest(".elements__list-item").remove();
    });

    this._imageElement.addEventListener("click", () => {
      imagePopupData(this._name, this._link, this._alt);
    });
  }
}