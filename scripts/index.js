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
  modal.classList.add("visible");

  modalUsername.value = username.textContent;
  modalProfession.value = profession.textContent;
};

const closeModal = function () {
  // modal.classList.remove("hidden");
  modal.classList.toggle("visible");
  //modal.style.opacity = 0;
  modal.style.transition = "all 1s ease-in-out";
};

btnEditProfile.addEventListener("click", openEditProfile);

btncloseModal.addEventListener("click", closeModal);

profileModalForm.addEventListener("submit", function (e) {
  e.preventDefault();
  username.textContent = modalUsername.value;
  profession.textContent = modalProfession.value;

  closeModal();
});
