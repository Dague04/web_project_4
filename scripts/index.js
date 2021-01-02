const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://code.s3.yandex.net/web-code/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://code.s3.yandex.net/web-code/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://code.s3.yandex.net/web-code/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://code.s3.yandex.net/web-code/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://code.s3.yandex.net/web-code/vanoise.jpg",
  },
  // {
  //   name: "Lago di Braies",
  //   link: "https://code.s3.yandex.net/web-code/lago.jpg",
  // },
];
let container = document.querySelector(".content");
let modalProfile = document.querySelector(".edit-profile");
let modalCard = document.querySelector(".add-card");
let btnCloseProfileModal = modalProfile.querySelector(".profile-close-btn");
let btnCloseCardModal = modalCard.querySelector(".card-close-btn");
let btnEditProfile = document.querySelector(".profile__edit-button");
let btnAddCard = document.querySelector(".profile__add-button");
let profileModalForm = document.querySelector(".modal__profile-form");
let cardModalForm = document.querySelector(".modal__card-form");
let username = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__profession");
let elementsTemplate = document.querySelector("#elements-template").content;
let cardTitle = elementsTemplate.querySelector(".elements__text");
let cardImageLink = elementsTemplate.querySelector(".elements__item");
let modalUsername = profileModalForm.querySelector(".modal__input-name");
let modalProfession = profileModalForm.querySelector(
  ".modal__input-profession"
);
let modalCardTitle = cardModalForm.querySelector(".modal__input-title");
let modalImageLink = cardModalForm.querySelector(".modal__input-image-link");
let profileInfo = document.querySelector(".profile__info");

// Edit Profile

const openEditProfile = function () {
  modalProfile.classList.add("modal_is-visible");

  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;
};

const closeModal = (modal) => {
  modal.classList.toggle("modal_is-visible");
};

btnEditProfile.addEventListener("click", openEditProfile);

btnCloseProfileModal.addEventListener("click", () => closeModal(modalProfile));

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal(modalProfile);
});

// Add Card
const openAddCard = function () {
  modalCard.classList.add("modal_is-visible");
};
btnAddCard.addEventListener("click", openAddCard);

btnCloseCardModal.addEventListener("click", () => closeModal(modalCard));

// upload a card
cardModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  let elementsUL = document.querySelector(".elements__list");
  let cardTemplate = document.querySelector("#elements-template").content;
  let cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__text").textContent =
    modalCardTitle.value;
  cardElement
    .querySelector(".elements__item")
    .setAttribute("src", modalImageLink.value);
  elementsUL.prepend(cardElement);

  closeModal(modalCard);
});

initialCards.forEach((user) => {
  let elementsUL = document.querySelector(".elements__list");

  let cardTemplate = document.querySelector("#elements-template").content;
  let cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__item").setAttribute("src", user.link);
  cardElement.querySelector(".elements__text").textContent = user.name;
  elementsUL.append(cardElement);
});

// image Likes

let buttonLikes = document.querySelectorAll(".elements__heart");
buttonLikes.forEach((like) => {
  like.addEventListener("click", () => {
    like.classList.toggle("elements__heart_theme_dark");
  });
});

// delete card
let buttonDelete = document.querySelectorAll(".elements__delete-card");
buttonDelete.forEach((btn) => {
  btn.addEventListener("click", (evt) => {
    evt.target.closest(".elements__list-item").remove();
  });
});
