import { Card } from "../components/Card.js";
import { handleCardClick, renderCard } from "./index.js";

// FUNCTION - CRIAR CARD
export function createCard(data, handleCardClick) {
  const card = new Card(data.name, data.link, "#cardTemplate", handleCardClick);
  return card.generateCard();
}

// FUNCTION - MANIPULAR SUBMIT DE PERFIL
export function handleProfileFormSubmit(event, formData) {
  const profileNameElement = document.querySelector(".profile__name");
  const profileDescriptionElement = document.querySelector(
    ".profile__description"
  );

  profileNameElement.textContent = formData.firstInput || "Nome não definido";
  profileDescriptionElement.textContent =
    formData.secondInput || "Descrição não definida";
}

//FUNCTION - MANIPULAR SUBMIT DE CARD
export function handleCardFormSubmit(event, formData) {
  const cardName = formData.firstInput || "Título não definido";
  const cardLink = formData.secondInput || "Imagem não definida";

  debugger;
  const newCardElement = createCard(
    { name: cardName, link: cardLink },
    "#cardTemplate",
    handleCardClick
  );

  renderCard(newCardElement);
}
