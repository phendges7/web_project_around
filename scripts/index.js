import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import {
  createCard,
  handleProfileFormSubmit,
  handleCardFormSubmit,
} from "./utils.js";

// Vetor com cards iniciais
const initialCards = [
  {
    name: "New York, NY",
    link: "https://images.unsplash.com/photo-1492666673288-3c4b4576ad9a?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Miami, FL",
    link: "https://images.unsplash.com/photo-1476984251899-8d7fdfc5c92c?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Los Angeles, CA",
    link: "https://images.unsplash.com/photo-1580655653885-65763b2597d0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Chicago, IL",
    link: "https://images.unsplash.com/photo-1596250410216-1ac77dc208e3?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Boston, MA",
    link: "https://images.unsplash.com/photo-1563840111261-8b096fb63b65?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    name: "Washington, DC",
    link: "https://images.unsplash.com/photo-1583176689170-990094dcd953?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

/***********************************/
// Instancia popup para editar PERFIL
const popupProfileForm = new PopupWithForm(
  "#popupProfile",
  handleProfileFormSubmit
);
popupProfileForm.setEventListeners();

// Instancia popup para ADICIONAR CARD
const popupCardForm = new PopupWithForm("#popupCard", handleCardFormSubmit);
popupCardForm.setEventListeners();

// Instancia popup de IMAGEM EXPANDIDA
const popupImage = new PopupWithImage(".popupImage");
popupImage.setEventListeners();

// Controle de popup aberto atualmente
export let currentPopup = null;

/***********************************/
//CARDS
// Manipula clique no cards
export const handleCardClick = (name, link) => {
  popupImage.open(link, name);
  currentPopup = popupImage;
  console.log(currentPopup);
};

// Renderiza card
export const renderCard = (data) => {
  debugger;
  const cardElement = createCard(data, handleCardClick);
  cardSection.addItem(cardElement);
};

// Cria nova secao - secao de cards
const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".card-grid"
);

// Renderiza secao
cardSection.renderItems();

/***********************************/
// POPUPS
// Instancia UserInfo
const userInfo = new UserInfo(".profile__name", ".profile__description");

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => {
  popupProfileForm.open();
  currentPopup = popupProfileForm;
  console.log(currentPopup);
});

const addCardButton = document.querySelector(".profile__add-place-button");
addCardButton.addEventListener("click", () => {
  popupCardForm.open();
  currentPopup = popupCardForm;
  console.log(currentPopup);
});

/**********************************/
