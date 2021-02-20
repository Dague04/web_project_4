// import { loadOneCard } from "../utils/utils.js";
import "./index.css";
import FormValidator from "../components/FormValidator.js";
import Section from "../components/Section.js";
import {
  modalProfile,
  modalCard,
  btnAddCard,
  btnEditProfile,
  profileModalForm,
  cardModalForm,
  username,
  profession,
  modalUsername,
  modalProfession,
  imagePopup,
  modalCardTitle,
  modalImageLink,
  modalArray,
  imagePopupImage,
  modalCaption,
  elementsUL,
  cardSelectorTemplate,
} from "../utils/constants.js";
import { initialCards } from "../data/data.js";
// import { createCard } from "../utils/utils.js";
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
  handleFormSubmit: ({ data }) => {
    const userInfo = new UserInfo(modalUsername, modalProfession);
    userInfo.setUserInfo(data);
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

// const addCardForm = new PopupWithForm({popupSelector:'.add-card', handleFormSubmit: })

// function closeByEscape(evt) {
//   if (evt.key === "Escape") {
//     const openedModal = document.querySelector(".modal_is-visible");
//     closeModal(openedModal);
//   }
// }

// Edit Profile

// const closeModal = (modal) => {
//   modal.classList.remove("modal_is-visible");
//   document.removeEventListener("keydown", closeByEscape);
// };

// const openModal = (modal) => {
//   modal.classList.add("modal_is-visible");
//   document.addEventListener("keydown", closeByEscape);
// };

// const openEditProfile = function () {
//   modalUsername.value = username.textContent;
//   modalProfession.value = profession.textContent;
//   editProfileValidate.resetValidation();
//   openModal(modalProfile);
// };

// make modal card form visible
// const openAddCard = function () {
//   cardModalForm.reset();
//   addCardValidate.resetValidation();
//   // openModal(modalCard);
// };
// btnAddCard.addEventListener("click", openAddCard);

// btnEditProfile.addEventListener("click", openEditProfile);

// Close modal by clicking on overlay and on cross
// modalArray.forEach((modal) => {
//   modal.addEventListener("click", (e) => {
//     if (e.target.classList.contains("modal")) {
//       closeModal(modal);
//     }
//     if (e.target.classList.contains("modal__closebtn")) {
//       closeModal(modal);
//     }
//   });
// });

// profileModalForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   username.textContent = modalUsername.value;
//   profession.textContent = modalProfession.value;

//   closeModal(modalProfile);
// });

// const imagePopupData = (name, link, alt) => {
//   openModal(imagePopup);

//   imagePopupImage.src = link;
//   imagePopupImage.alt = alt;
//   modalCaption.textContent = name;
// };

// upload a card
// cardModalForm.addEventListener("submit", function (e) {
//   e.preventDefault();
//   loadOneCard({
//     link: modalImageLink.value,
//     name: modalCardTitle.value,
//   });

//   // closeModal(modalCard);
//   cardModalForm.reset();
// });

// export { imagePopupData, openModal };
