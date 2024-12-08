import { Card } from "../components/Card.js";
import { handleCardClick, renderCard } from "./index.js";

// FUNCTION - CRIAR CARD
export function createCard(data, handleCardClick) {
  console.log("Dados recebidos para criação do card:", data);
  const card = new Card(data.name, data.link, "#cardTemplate", handleCardClick);
  const cardElement = card.generateCard();
  console.log("Card gerado:", cardElement);
  return cardElement;
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

  renderCard({ name: cardName, link: cardLink });
}
