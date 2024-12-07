import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { PopupWithImage } from "../components/PopupWithImage.js";
import { UserInfo } from "../components/UserInfo.js";
import { enableValidation, renderSubmit } from "../components/FormValidator.js";

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
// POPUPS
// Instancia popup para editar PERFIL
const popupProfileForm = new PopupWithForm("#popupProfile");
popupProfileForm.setEventListeners();

// Instancia popup para ADICIONAR CARD
const popupCardForm = new PopupWithForm("#popupCard");
popupCardForm.setEventListeners();

// Instancia popup de IMAGEM EXPANDIDA
const imagePopup = new PopupWithImage(".popupImage");
imagePopup.setEventListeners();

/***********************************/
//CARDS
// Manipula clique no card
const handleCardClick = (name, link) => {
  imagePopup.open(link, name);
};

// Renderiza card
const renderCard = (data) => {
  const card = new Card(data.name, data.link, "#cardTemplate", handleCardClick);
  const cardElement = card.generateCard();
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
// PERFIL
// Instancia UserInfo
const userInfo = new UserInfo(".profile__name", ".profile__description");

const editProfileButton = document.querySelector(".profile__edit-button");
editProfileButton.addEventListener("click", () => this.open());

/**********************************/
