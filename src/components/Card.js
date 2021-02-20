// import { imagePopupData } from "../pages/index.js";

export default class Card {
  constructor({ data, handleCardClick }, cardTemplateSelector) {
    this._name = data.name;
    this._link = data.link;
    this._alt = data.alt;
    this._handleCardClick = handleCardClick;
    this._cardTemplateSelector = cardTemplateSelector;
  }

  _createCardTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplateSelector)
      .content.querySelector(".elements__list-item")
      .cloneNode(true);

    return cardElement;
  }

  generateCard() {
    this._cardElement = this._createCardTemplate();
    console.log("fggg", this._cardElement);
    this._setEventListeners();
    const imageElement = this._cardElement.querySelector(".elements__item");

    imageElement.src = this._link;

    imageElement.setAttribute("alt", this._alt);
    this._cardElement.querySelector(".elements__text").textContent = this._name;

    return this._cardElement;
  }

  // deleteCard(evt) {
  //   evt.target.closest(".elements__list-item").remove();
  // }

  _setEventListeners() {
    this._imageElement = this._cardElement.querySelector(".elements__item");

    // like a card
    this._buttonLikes = this._cardElement.querySelector(".elements__heart");
    this._buttonLikes.addEventListener("click", () => {
      this._buttonLikes.classList.toggle("elements__heart_theme_dark");
    });

    // delete a card
    this._buttonDelete = this._cardElement.querySelector(
      ".elements__delete-card"
    );
    this._buttonDelete.addEventListener("click", (evt) => {
      evt.target.closest(".elements__list-item").remove();
    });

    this._imageElement.addEventListener("click", () => {
      this._handleCardClick({
        name: this._name,
        link: this._link,
      });
    });
  }
}
