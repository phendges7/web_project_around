import { Card } from "../components/Card.js";
import { renderCard } from "../page/index.js";
import { UserInfo } from "../components/UserInfo.js";
import api from "../components/Api.js";

// FUNCTION - MANIPULAR SUBMIT DE PERFIL
const userInfo = new UserInfo(".profile__name", ".profile__description");

export function handleProfileFormSubmit(params) {
  const { formData } = params;

  const submitButton = document.querySelector(
    "#popupProfile .popup__submit-button"
  );
  submitButton.textContent = "Salvando...";
  submitButton.disabled = true;
  submitButton.classList.add("disabled");

  api
    .updateUserInfo({
      name: formData.firstInput,
      about: formData.secondInput,
    })
    .then((updatedUserData) => {
      submitButton.textContent = "SALVAR";
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
      userInfo.setUserInfo({
        name: updatedUserData.name,
        description: updatedUserData.about,
      });
    })
    .catch((err) => {
      console.error("Erro ao atualizar os dados do perfil:", err);
    });
}

// FUNCTION - MANIPULAR SUBMIT DE CARD
export function handleCardFormSubmit(params) {
  const { event, formData, cardSection } = params;

  const submitButton = document.querySelector(
    "#popupCard .popup__submit-button"
  );
  submitButton.textContent = "Salvando...";
  submitButton.disabled = true;
  submitButton.classList.add("disabled");

  const cardName = formData.firstInput || "Título não definido";
  const cardLink = formData.secondInput || "Imagem não definida";

  api
    .addCard({ name: cardName, link: cardLink })
    .then((newCardData) => {
      renderCard(newCardData, cardSection);

      submitButton.textContent = "CRIAR";
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
      event.target.reset();
    })
    .catch((err) => {
      console.error("Erro ao adicionar o cartão:", err);
      if (err.response) {
        console.error("Detalhes do erro:", err.response);
      }
    });
}

// FUNCTION - MANIPULAR UPDATE AVATAR
export function handleAvatarFormSubmit(params) {
  const { formData } = params;
  const submitButton = document.querySelector(
    "#popupAvatar .popup__submit-button"
  );

  submitButton.textContent = "Salvando...";
  submitButton.disabled = true;
  submitButton.classList.add("disabled");

  api
    .updateAvatar(formData.firstInput)
    .then(() => {
      const avatarImage = document.querySelector(".profile__picture");
      avatarImage.src = formData.firstInput;

      submitButton.textContent = "SALVAR";
      submitButton.disabled = false;
      submitButton.classList.remove("disabled");
    })
    .catch((err) => {
      console.error("Erro ao atualizar o avatar:", err);
    });
}

// FUNCTION - MANIPULAR CARD DELETE
export function handleDeleteCard(event, cardId) {
  const deleteButton = event.target;
  const cardElement = deleteButton.closest(".card");

  if (cardElement) {
    api
      .deleteCard(cardId)
      .then(() => {
        cardElement.remove();
      })
      .catch((err) => {
        console.error("Erro ao excluir o cartão:", err);
      });
  }
}
