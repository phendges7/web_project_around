import { Card } from "../components/Card.js";
import { renderCard } from "../page/index.js";
import { UserInfo } from "../components/UserInfo.js";
import { updateUserInfo } from "../components/Api.js";

// FUNCTION - CRIAR CARD
export function createCard(data, handleCardClick) {
  const card = new Card(data.name, data.link, "#cardTemplate", handleCardClick);
  const cardElement = card.generateCard();

  return cardElement;
}

// FUNCTION - MANIPULAR SUBMIT DE PERFIL

const userInfo = new UserInfo(".profile__name", ".profile__description");

export function handleProfileFormSubmit(event, formData) {
  debugger;
  event.preventDefault();

  updateUserInfo(formData.firstInput, formData.secondInput)
    .then((updatedUserData) => {
      userInfo.setUserInfo({
        name: updatedUserData.name,
        description: updatedUserData.about,
        avatar: updatedUserData.avatar,
      });
    })
    .catch((err) => {
      console.log("Erro ao atualizar os dados do perfil:", err);
    });
}

//FUNCTION - MANIPULAR SUBMIT DE CARD
export function handleCardFormSubmit(event, formData) {
  const cardName = formData.firstInput || "Título não definido";
  const cardLink = formData.secondInput || "Imagem não definida";

  renderCard({ name: cardName, link: cardLink });

  event.target.reset();
}
