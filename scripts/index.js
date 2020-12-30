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
  {
    name: "Lago di Braies",
    link: "https://code.s3.yandex.net/web-code/lago.jpg",
  },
];
let container = document.querySelector(".content");
let modal = document.querySelector(".modal");
let btncloseModal = modal.querySelector(".modal__closebtn");
let btnEditProfile = document.querySelector(".profile__edit-button");
let profileModalForm = document.querySelector(".modal__profile-form");
let username = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__profession");
let modalUsername = profileModalForm.querySelector(".modal__input-name");
let modalProfession = profileModalForm.querySelector(
  ".modal__input-profession"
);
let profileInfo = document.querySelector(".profile__info");

const openEditProfile = function () {
  modal.classList.add("modal_is-visible");

  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;
};

const closeModal = function () {
  modal.classList.toggle("modal_is-visible");
};

btnEditProfile.addEventListener("click", openEditProfile);

btncloseModal.addEventListener("click", closeModal);

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal();
});

initialCards.forEach((user) => {
  let elementsContainer = container.querySelector(".elements");
  let elementsUL = document.querySelector(".elements__list");

  let cardTemplate = document.querySelector("#elements-template").content;
  let cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector(".elements__item").setAttribute("src", user.link);
  cardElement.querySelector(".elements__text").textContent = user.name;
  elementsUL.append(cardElement);
  // elementsContainer.append(cardElement);
});
