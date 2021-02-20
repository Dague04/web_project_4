// import { initialCards } from "../data/data.js";
import { elementsUL } from "./constants.js";
import Card from "../components/Card.js";

export const createCard = (data) => {
  const card = new Card(data, "#elements-template");
  return card;
};

export const loadOneCard = (data) => {
  const card = createCard(data);
  elementsUL.prepend(card.generateCard());
};

// const loadCards = (data) => {
//   const card = createCard(data);
//   elementsUL.prepend(card.generateCard());
// };

// export const renderCard = () => {
//   elementsUL.innerHTML = "";
//   initialCards.forEach((card) => {
//     loadCards(card);
//   });
// };
