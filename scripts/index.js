import { Section } from "../components/Section.js";
import { Card } from "../components/Card.js";
import { Popup } from "../components/Popup.js";
import { PopupWithForm } from "../components/PopupWithForm.js";
import { popupImage } from "../components/PopupWithImage.js";
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
// Popular cartoes iniciais
const renderCard = (data) => {
  const card = new Card(data.name, data.link, "#cardTemplate");
  const cardElement = card.generateCard();
  cardSection.addItem(cardElement);
};

const cardSection = new Section(
  {
    items: initialCards,
    renderer: renderCard,
  },
  ".card-grid"
);

/***********************************/
// PROFILE
const profilePopup = new PopupWithForm();

// FUNCTION - Editar PROFILE

/***********************************/
//EXPANDIR IMAGEM
// FUNCTION - construir popup imagem grande
export function openPopupImage(event) {
  const imgElement = event.target;
  openOverlayAndPopup(popupImage);

  const imageCloseButton = popupImage.querySelector(
    ".popupImage__close-button"
  );
  const imageExpanded = popupImage.querySelector(".popupImage__big");
  const imageTitle = popupImage.querySelector(".popupImage__title");

  imageExpanded.src = imgElement.src;
  imageExpanded.alt = imgElement.alt;
  imageTitle.textContent = imgElement.alt;

  imageCloseButton.addEventListener("click", () =>
    closeOverlayAndPopup(popupImage)
  );
  overlay.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

cardSection.renderItems();

/**********************************
// Função de Inicialização
function init() {
 addInitialCards();
  editProfileButton.addEventListener("click", openPopupUser);
  addPlaceButton.addEventListener("click", openPopupCard);

  overlay.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

// Inicia funções
init();*/
