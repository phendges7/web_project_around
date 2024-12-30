import { Card } from "../components/Card.js";
import { renderCard } from "../page/index.js";
import { UserInfo } from "../components/UserInfo.js";
import api from "../components/Api.js";

// FUNCTION - CRIAR CARD
export function createCard(data, handleCardClick, handleDeleteClick) {
  const card = new Card(
    data.name,
    data.link,
    data._id,
    data.isLiked,
    "#cardTemplate",
    handleCardClick,
    handleDeleteClick
  );
  const cardElement = card.generateCard();

  return cardElement;
}

// FUNCTION - MANIPULAR SUBMIT DE PERFIL

const userInfo = new UserInfo(".profile__name", ".profile__description");

export function handleProfileFormSubmit(formData) {
  api
    .updateUserInfo({
      name: formData.firstInput,
      about: formData.secondInput,
    })
    .then((updatedUserData) => {
      userInfo.setUserInfo({
        name: updatedUserData.name,
        description: updatedUserData.about,
      });
    })
    .catch((err) => {
      console.log("Erro ao atualizar os dados do perfil:", err);
    });
}

//FUNCTION - MANIPULAR SUBMIT DE CARD
export function handleCardFormSubmit(event, formData, cardSection) {
  debugger;
  const cardName = formData.firstInput || "Título não definido";
  const cardLink = formData.secondInput || "Imagem não definida";

  console.log("Dados do novo cartão BEFORE:", {
    name: cardName,
    link: cardLink,
  });

  addCard(cardName, cardLink)
    .then((newCardData) => {
      renderCard(newCardData, cardSection);
      console.log("Cartão adicionado com sucesso:", newCardData);
      event.target.reset();
    })
    .catch((err) => {
      console.error("Erro ao adicionar o cartão:", err);
    });
}

//FUNCTION - MANIPULAR CARD DELETE
export function handleDeleteCard(event, cardId) {
  const deleteButton = event.target;
  const cardElement = deleteButton.closest(".card");
  console.log(`Deletando o card com ID: ${cardId}`);

  if (cardElement) {
    api
      .deleteCard(cardId)
      .then(() => {
        cardElement.remove();
        cardElement = null;
      })
      .catch((err) => {
        console.error("Erro ao excluir o cartão:", err);
      });
  }
}
