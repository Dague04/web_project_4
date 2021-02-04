import { imagePopupData, openModal } from "./index.js";

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
    // const link = card.link;
    // const name = card.name;
    // const alt = card.alt;

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
    const imageElement = this._cardElement.querySelector(".elements__item");
    // const modalCaption = this._cardElement.querySelector(".modal__caption");
    const imagePopup = document.querySelector(".image-view");

    // like a card
    const buttonLikes = this._cardElement.querySelector(".elements__heart");
    buttonLikes.addEventListener("click", () => {
      buttonLikes.classList.toggle("elements__heart_theme_dark");
    });

    // delete a card
    const buttonDelete = this._cardElement.querySelector(
      ".elements__delete-card"
    );
    buttonDelete.addEventListener("click", (evt) => {
      evt.target.closest(".elements__list-item").remove();
    });

    imageElement.addEventListener("click", () => {
      openModal(imagePopup);
      imagePopupData(this._name, this._link, this._alt);
    });
  }
}
