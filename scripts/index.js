const container = document.querySelector(".content");
const modalProfile = document.querySelector(".edit-profile");
const modalCard = document.querySelector(".add-card");
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
const modalArray = Array.from(document.querySelectorAll(".modal"));
const imagePopup = document.querySelector(".image-view");
const imagePopupImage = document.querySelector(".modal__image");
const modalCaption = document.querySelector(".modal__caption");
const elementsUL = document.querySelector(".elements__list");

const createCardTemplate = () => {
  const cardTemplate = document
    .querySelector("#elements-template")
    .content.cloneNode(true);
  return cardTemplate;
};

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

  openModal(modalProfile);
};

// make modal card form visible
const openAddCard = function () {
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

const deleteCard = (evt) => {
  evt.target.closest(".elements__list-item").remove();
};

const renderCard = (card) => {
  const link = card.link;
  const name = card.name;
  const alt = card.alt;

  const cardElement = createCardTemplate();
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

  imageElement.addEventListener("click", () => {
    openModal(imagePopup);
    imagePopupImage.src = link;
    imagePopupImage.alt = alt;
    modalCaption.textContent = name;
  });

  return cardElement;
};

const loadCards = (data) => {
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
  cardModalForm.reset();
});

initialCards.forEach((card) => {
  loadCards(card);
});
