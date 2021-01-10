const container = document.querySelector(".content");
const modalProfile = document.querySelector(".edit-profile");
const modalCard = document.querySelector(".add-card");
const btnCloseProfileModal = modalProfile.querySelector(".profile-close-btn");
const btnCloseCardModal = modalCard.querySelector(".card-close-btn");
const btnEditProfile = document.querySelector(".profile__edit-button");
const btnAddCard = document.querySelector(".profile__add-button");
const profileModalForm = document.querySelector(".modal__profile-form");
const cardModalForm = document.querySelector(".modal__card-form");
const username = document.querySelector(".profile__name");
const profession = document.querySelector(".profile__profession");
const elementsTemplate = document.querySelector("#elements-template").content;
const cardTitle = elementsTemplate.querySelector(".elements__text");
const cardImageLink = elementsTemplate.querySelector(".elements__item");
const modalUsername = profileModalForm.querySelector(".modal__input-name");
const modalProfession = profileModalForm.querySelector(
  ".modal__input-profession"
);
const modalCardTitle = cardModalForm.querySelector(".modal__input-title");
const modalImageLink = cardModalForm.querySelector(".modal__input-image-link");
const profileInfo = document.querySelector(".profile__info");
const imageModal = document.querySelector(".image-view");
const btnImageClosemodal = document.querySelector(".image-popup__closebtn");

const createCardTemplate = () => {
  const cardTemplate = document
    .querySelector("#elements-template")
    .content.cloneNode(true);
  return cardTemplate;
};

// Edit Profile

const closeModal = (modal) => {
  modal.classList.toggle("modal_is-visible");
};

const openModal = (modal) => {
  modal.classList.add("modal_is-visible");
};

const openEditProfile = function () {
  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;

  openModal(modalProfile);
};

// make modal card form visible
const openAddCard = function () {
  openModal(modalCard);
};
btnAddCard.addEventListener("click", openAddCard);

btnEditProfile.addEventListener("click", openEditProfile);

// Close Profile modal
btnCloseProfileModal.addEventListener("click", () => closeModal(modalProfile));

// Close image modal
btnImageClosemodal.addEventListener("click", () => closeModal(imageModal));

// close card modal
btnCloseCardModal.addEventListener("click", () => closeModal(modalCard));

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal(modalProfile);
});

const deleteCard = (evt) => {
  evt.target.closest(".elements__list-item").remove();
};

const renderCard = (card) => {
  const link = card.link;
  const name = card.name;
  const alt = card.alt;

  const cardElement = createCardTemplate();

  card = cardElement;

  const imageElement = cardElement.querySelector(".elements__item");

  imageElement.setAttribute("src", link);
  imageElement.setAttribute("alt", alt);
  cardElement.querySelector(".elements__text").textContent = name;

  // like a card
  const buttonLikes = cardElement.querySelector(".elements__heart");
  buttonLikes.addEventListener("click", () => {
    buttonLikes.classList.toggle("elements__heart_theme_dark");
  });

  // delete a card
  const buttonDelete = cardElement.querySelector(".elements__delete-card");
  buttonDelete.addEventListener("click", deleteCard);

  // create image modal
  const modalImage = cardElement.querySelector(".elements__item");
  const imagePopup = document.querySelector(".image-popup");
  const imagePopup_img = document.querySelector(".image-popup__img");
  const modalCaption = document.querySelector(".image-popup__caption");

  modalImage.addEventListener("click", () => {
    openModal(imagePopup);
    imagePopup_img.src = link;
    imagePopup_img.alt = alt;
    modalCaption.textContent = name;
  });

  return card;
};

const loadCards = (data) => {
  const elementsUL = document.querySelector(".elements__list");

  elementsUL.prepend(renderCard(data));
};

// upload a card
cardModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  loadCards({
    link: modalImageLink.value,
    name: modalCardTitle.value,
  });

  closeModal(modalCard);
});

initialCards.forEach((card) => {
  loadCards(card);
});
