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

const createCardTemplate = () => {
  const cardTemplate = document
    .querySelector("#elements-template")
    .content.cloneNode(true);
  return cardTemplate;
};

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

// make modal card form visible
const openAddCard = function () {
  modalCard.classList.add("modal_is-visible");
};
btnAddCard.addEventListener("click", openAddCard);

// close card modal
btnCloseCardModal.addEventListener("click", () => closeModal(modalCard));

// Open an image pop-up

// upload a card

cardModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  // let elementsUL = document.querySelector(".elements__list");
  // const cardElement = createCardTemplate();
  // cardElement.querySelector(".elements__text").textContent =
  //   modalCardTitle.value;
  // cardElement
  //   .querySelector(".elements__item")
  //   .setAttribute("src", modalImageLink.value);
  // elementsUL.prepend(cardElement);
  renderCards({
    link: modalImageLink.value,
    name: modalCardTitle.value,
  });

  closeModal(modalCard);
});

const cardEvents = () => {
  const card = createCardTemplate();

  let buttonLikes = card.querySelector(".elements__heart");
  // buttonLikes.forEach((like) => {
  //   like.addEventListener("click", () => {
  //     like.classList.toggle("elements__heart_theme_dark");
  //   });
  // });
  buttonLikes.addEventListener("click", () => {
    buttonLikes.classList.toggle("elements__heart_theme_dark");
  });
  // delete card
  let buttonDelete = document.querySelectorAll(".elements__delete-card");
  buttonDelete.forEach((btn) => {
    btn.addEventListener("click", (evt) => {
      evt.target.closest(".elements__list-item").remove();
    });
  });
};

const renderCards = (data) => {
  const link = data.link;
  const name = data.name;
  let elementsUL = document.querySelector(".elements__list");

  const cardElement = createCardTemplate();
  cardElement.querySelector(".elements__item").setAttribute("src", link);
  cardElement.querySelector(".elements__text").textContent = name;

  // like a card
  let buttonLikes = cardElement.querySelector(".elements__heart");
  buttonLikes.addEventListener("click", () => {
    buttonLikes.classList.toggle("elements__heart_theme_dark");
  });

  // delete a card
  let buttonDelete = cardElement.querySelector(".elements__delete-card");
  buttonDelete.addEventListener("click", (evt) => {
    evt.target.closest(".elements__list-item").remove();
  });

  // create image modal
  let modalImage = cardElement.querySelector(".elements__item");
  let imagePopup = document.querySelector(".image-popup");
  let imagePopup_img = document.querySelector(".image-popup__img");
  let modalCaption = document.querySelector(".image-popup__caption");

  modalImage.addEventListener("click", () => {
    imagePopup.classList.add("modal_is-visible");
    imagePopup_img.src = link;
    modalCaption.textContent = name;
  });

  elementsUL.prepend(cardElement);
};

initialCards.forEach((card) => {
  renderCards(card);
});
// image Likes

// let buttonLikes = document.querySelectorAll(".elements__heart");
// buttonLikes.forEach((like) => {
//   like.addEventListener("click", () => {
//     like.classList.toggle("elements__heart_theme_dark");
//   });
// });

// delete card
// let buttonDelete = document.querySelectorAll(".elements__delete-card");
// buttonDelete.forEach((btn) => {
//   btn.addEventListener("click", (evt) => {
//     evt.target.closest(".elements__list-item").remove();
//   });
// });

// Open an image modal
// let imagePopup = document.querySelector(".image-popup");
// let previews = document.querySelectorAll(".elements__item");
// let original = document.querySelector(".image-popup__img");

// let modalCaption = document.querySelector(".image-popup__caption");
// previews.forEach((image) => {
//   image.addEventListener("click", () => {
//     imagePopup.classList.add("modal_is-visible");
//     original.src = image.src;
//     modalCaption.textContent = image.alt;
//   });
// });

// Close image modal
let imageModal = document.querySelector(".image-view");
let btnImageClosemodal = document.querySelector(".image-popup__closebtn");
btnImageClosemodal.addEventListener("click", () => closeModal(imageModal));
