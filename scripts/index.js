import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import { initialCards } from "../data/data.js";

const modalProfile = document.querySelector(".edit-profile");
const modalCard = document.querySelector(".add-card");
const btnEditProfile = document.querySelector(".profile__edit-button");
const btnAddCard = document.querySelector(".profile__add-button");
const profileModalForm = document.querySelector(".modal__profile-form");
const cardModalForm = document.querySelector(".modal__card-form");
const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const modalUsername = profileModalForm.querySelector(".modal__input-name");
const modalProfession = profileModalForm.querySelector(
  ".modal__input-profession"
);
const imagePopup = document.querySelector(".image-view");
const modalCardTitle = cardModalForm.querySelector(".modal__input-title");
const modalImageLink = cardModalForm.querySelector(".modal__input-image-link");
const modalArray = Array.from(document.querySelectorAll(".modal"));
const imagePopupImage = document.querySelector(".modal__image");
const modalCaption = document.querySelector(".modal__caption");
const elementsUL = document.querySelector(".elements__list");

const settings = {
  inputSelector: ".form__input",
  submitButtonSelector: ".modal__button",
  inactiveButtonClass: "modal__button_is-inactive",
  inputErrorClass: "form__input_type_error",
  errorClass: "form__input-error_active",
};

const editProfileValidate = new FormValidator(settings, profileModalForm);
const addCardValidate = new FormValidator(settings, cardModalForm);

editProfileValidate.enableValidation();
addCardValidate.enableValidation();

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-visible");
    closeModal(openedModal);
  }
}

// Edit Profile

const closeModal = (modal) => {
  modal.classList.remove("modal_is-visible");
  document.removeEventListener("keydown", closeByEscape);
};

const openModal = (modal) => {
  modal.classList.add("modal_is-visible");
  document.addEventListener("keydown", closeByEscape);
};

const openEditProfile = function () {
  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;
  editProfileValidate.resetValidation();
  openModal(modalProfile);
};

// make modal card form visible
const openAddCard = function () {
  cardModalForm.reset();
  addCardValidate.resetValidation();
  openModal(modalCard);
};
btnAddCard.addEventListener("click", openAddCard);

btnEditProfile.addEventListener("click", openEditProfile);

// Close modal by clicking on overlay and on cross
modalArray.forEach((modal) => {
  modal.addEventListener("click", (e) => {
    if (e.target.classList.contains("modal")) {
      closeModal(modal);
    }
    if (e.target.classList.contains("modal__closebtn")) {
      closeModal(modal);
    }
  });
});

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal(modalProfile);
});

const imagePopupData = (name, link, alt) => {
  openModal(imagePopup);

  imagePopupImage.src = link;
  imagePopupImage.alt = alt;
  modalCaption.textContent = name;
};

const createCard = (data) => {
  const card = new Card(data, "#elements-template");
  return card;
};

const loadCards = (data) => {
  const card = createCard(data);
  elementsUL.prepend(card.generateCard());
};

// upload a card
cardModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loadCards({
    link: modalImageLink.value,
    name: modalCardTitle.value,
  });

  closeModal(modalCard);
  cardModalForm.reset();
});

initialCards.forEach((card) => {
  loadCards(card);
});

export { imagePopupData, openModal };
