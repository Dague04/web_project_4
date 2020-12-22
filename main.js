let modal = document.querySelector(".modal");
let overlay = document.querySelector(".modal__overlay");
let btncloseModal = document.querySelector(".modal__closebtn");
let btnEditProfile = document.querySelector(".profile__edit-button");
let profileModalForm = document.querySelector(".modal__profile-form");
let username = document.querySelector(".profile__name");
let profession = document.querySelector(".profile__profession");
let modalUsername = document.querySelector(".modal__input-name");
let modalProfession = document.querySelector(".modal__input-profession");
let profileInfo = document.querySelector(".profile__info");

const openEditProfile = function () {
  modal.classList.remove("modal__hidden");
};

const closeModal = function () {
  modal.classList.add("modal__hidden");
};

btnEditProfile.addEventListener("click", openEditProfile);

btncloseModal.addEventListener("click", closeModal);

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal();
});
