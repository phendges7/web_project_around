import { Card } from "../components/Card.js";
import { renderCard } from "./index.js";
import { UserInfo } from "../components/UserInfo.js";

// FUNCTION - CRIAR CARD
export function createCard(data, handleCardClick) {
  const card = new Card(data.name, data.link, "#cardTemplate", handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

// FUNCTION - MANIPULAR SUBMIT DE PERFIL

const userInfo = new UserInfo(".profile__name", ".profile__description");

export function handleProfileFormSubmit(event, formData) {
  userInfo.setUserInfo({
    name: formData.firstInput,
    description: formData.secondInput,
  });
}

//FUNCTION - MANIPULAR SUBMIT DE CARD
export function handleCardFormSubmit(event, formData) {
  const cardName = formData.firstInput || "Título não definido";
  const cardLink = formData.secondInput || "Imagem não definida";

  renderCard({ name: cardName, link: cardLink });
}
