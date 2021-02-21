import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  btnAddCard,
  btnEditProfile,
  profileModalForm,
  cardModalForm,
  username,
  profession,
  modalUsername,
  modalProfession,
  elementsUL,
  cardSelectorTemplate,
} from "../utils/constants.js";
import { initialCards } from "../data/data.js";
import PopupWithForm from "../components/PopupWithForm.js";
import UserInfo from "../components/UserInfo.js";
import Card from "../components/Card.js";
import PopupWithImage from "../components/PopupWithImage.js";

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

const cardPopup = new PopupWithImage({ popupSelector: ".image-view" });
cardPopup.setEventListeners();

const createCard = (data) => {
  const newCard = new Card(
    {
      data,
      handleCardClick: (card) => {
        cardPopup.open(card);
      },
    },
    cardSelectorTemplate
  );

  const cardElement = newCard.generateCard();
  return cardElement;
};

const initialCardList = new Section(
  {
    items: initialCards,
    renderer: (cardData) => {
      const cardElement = createCard(cardData);
      initialCardList.addItem(cardElement);
    },
  },
  elementsUL
);

initialCardList.renderCards();

const userInfo = new UserInfo(".profile__name", ".profile__profession");

const addCardForm = new PopupWithForm({
  popupSelector: ".add-card",

  handleFormSubmit: (data) => {
    const cardData = {
      name: data.titleInput,
      link: data.urlInput,
    };

    const card = createCard(cardData);

    initialCardList.addItem(card);
    addCardForm.close();
  },
});

const editProfileForm = new PopupWithForm({
  popupSelector: ".edit-profile",
  handleFormSubmit: (data) => {
    const obj = { name: data.nameInput, job: data.professionInput };
    userInfo.setUserInfo(obj);
    editProfileForm.close();
  },
});

editProfileForm.setEventListeners();

btnEditProfile.addEventListener("click", () => {
  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;
  editProfileValidate.resetValidation();

  editProfileForm.open();
});

addCardForm.setEventListeners();

btnAddCard.addEventListener("click", () => {
  addCardValidate.resetValidation();
  addCardForm.open();
});
