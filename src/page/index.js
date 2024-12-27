import { Section } from "../components/Section.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { PopupWithConfirmation } from "../components/PopupWithConfirmation.js";
import { UserInfo } from "../components/UserInfo.js";

import { fetchUserInfo, fetchCards } from "../components/Api.js";

import {
  createCard,
  handleProfileFormSubmit,
  handleCardFormSubmit,
  handleDeleteCard,
} from "../scripts/utils.js";

//CONTAINERS UTEIS
const pageContainer = document.querySelector(".page");
const cardSectionContainer = document.querySelector(".card-grid");

//SELETOR DE ELEMENTOS DOM
const nameSelector = ".profile__name";
const descriptionSelector = ".profile__description";
const avatarSelector = ".profile__picture";

//INSTANCIA OBJETO USERINFO
const userInfo = new UserInfo(
  nameSelector,
  descriptionSelector,
  avatarSelector
);

// FUNCTION - Renderiza card
export const renderCard = (data, cardSection) => {
  const cardElement = createCard(data, handleCardClick, handleDeleteClick);
  cardSection.addItem(cardElement);
};

//GARANTE PAGINA ESTAR DEVIDAMENTE CARREGADA
document.addEventListener("DOMContentLoaded", () => {
  loadPageData();
});

// INICIA APLICACAO
function loadPageData() {
  pageContainer.style.display = "none"; //OCULTA PAGINA ENQUANTO REQUESTS FINALIZAM
  fetchUserInfo()
    .then((userData) => {
      console.log("Dados do usuário recebidos da API:", userData); //TESTE LOG OBJETO - USER
      userInfo.setUserInfo({
        name: userData.name,
        description: userData.about,
        avatar: userData.avatar,
      });
    })
    .then(() => fetchCards())
    .then((cardData) => {
      console.log("Dados do usuário recebidos da API:", cardData); //TESTE LOG OBJETO - CARDS

      // Cria nova secao - secao de cards
      const cardSection = new Section(
        {
          items: cardData,
          renderer: (data) => renderCard(data, cardSection),
        },
        cardSectionContainer
      );
      console.log(cardSection); //TESTE LOG OBJETO - SECTION

      // Renderiza os cartões na seção
      cardSection.renderItems();
    })
    .then(() => {
      pageContainer.style.display = "flex"; //EXIBE PAGINA AFTER FULLY LOADED
    })
    .catch((error) => {
      console.error("Erro ao inicializar a aplicação:", error);
    });
}

/***********************************/
// Instancia popup para editar PERFIL
const popupProfileForm = new PopupWithForm(
  "#popupProfile",
  handleProfileFormSubmit
);
popupProfileForm.setEventListeners();

// Instancia popup para ADICIONAR CARD
const popupCardForm = new PopupWithForm(
  "#popupCard",
  handleCardFormSubmit,
  cardSectionContainer
);
popupCardForm.setEventListeners();

//Instancia popup para DELETAR CARD
const popupDeleteCard = new PopupWithConfirmation(
  "#popupDeleteCard",
  handleDeleteCard
);
popupDeleteCard.setEventListeners();

// Instancia popup de IMAGEM EXPANDIDA
const popupImage = new PopupWithImage(".popupImage");
popupImage.setEventListeners();

/***********************************/
//CARDS
// Manipula clique no cards
export const handleCardClick = (name, link) => {
  popupImage.open(link, name);
};

// Manipula click na lixeira
export const handleDeleteClick = (event, cardId) => {
  popupDeleteCard.open(event, cardId);
};

/***********************************/
//EVENT LISTENERS PARA POPUPS
const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => {
  popupProfileForm.open();
});

const addCardButton = document.querySelector(".profile__add-place-button");
addCardButton.addEventListener("click", () => {
  popupCardForm.open();
});

/**********************************/
