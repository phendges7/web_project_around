import {
  openOverlayAndPopup,
  closeOverlayAndPopup,
  handleClickOutside,
  handleEscapeKey,
  getPopupElements,
} from "./utils.js";
import { enableValidation, renderSubmit } from "./FormValidator.js";
import { Card } from "./Card.js";

// Variáveis Globais
export const popupProfile = document.querySelector("#popupProfile");
export const popupCard = document.querySelector("#popupCard");
const popupImage = document.querySelector(".popupImage");
const overlay = document.querySelector(".overlay");

const addPlaceButton = document.querySelector(".profile__add-place-button");
const cardGrid = document.querySelector(".card-grid");
const editProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

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
// Funções de Cartões
function addInitialCards() {
  initialCards.forEach((card) => {
    const cardInstance = new Card(card.name, card.link, "#cardTemplate");
    const cardElement = cardInstance.generateCard();
    cardGrid.prepend(cardElement);
  });
}

function addNewCard(event) {
  event.preventDefault();
  const { firstInput, secondInput } = getPopupElements(popupCard);
  const cardInstance = new Card(
    firstInput.value,
    secondInput.value,
    "#cardTemplate"
  );
  const cardElement = cardInstance.generateCard();
  cardGrid.prepend(cardElement);
  closeOverlayAndPopup(popupCard);
}

function removeCardElement(event) {
  event.target.closest(".photo-grid__item").remove();
}

// FUNCTION - Abrir Popup CARD
function openPopupCard() {
  debugger;
  openOverlayAndPopup(popupCard);
  enableValidation();

  const { firstInput, secondInput, submitButton, closeButton } =
    getPopupElements(popupCard);
  renderSubmit([firstInput, secondInput], submitButton);

  firstInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );
  secondInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );

  closeButton.addEventListener("click", () => closeOverlayAndPopup(popupCard));
  submitButton.addEventListener("click", addNewCard);

  // Adicionar os event listeners
  overlay.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

/***********************************/
// PROFILE
// FUNCTION - Abrir popup PROFILE
function openPopupUser() {
  openOverlayAndPopup(popupProfile);

  const { firstInput, secondInput, submitButton, closeButton } =
    getPopupElements(popupProfile);
  renderSubmit([firstInput, secondInput], submitButton);

  firstInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );
  secondInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );

  closeButton.addEventListener("click", () =>
    closeOverlayAndPopup(popupProfile)
  );
  submitButton.addEventListener("click", editUser);
  enableValidation();
}

// FUNCTION - Editar PROFILE
function editUser(event) {
  event.preventDefault();
  const { firstInput, secondInput } = getPopupElements(popupProfile);
  profileName.textContent = firstInput.value;
  profileDescription.textContent = secondInput.value;
  closeOverlayAndPopup(popupProfile);
}

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

/***********************************/
// Função de Inicialização
function init() {
  addInitialCards();
  editProfileButton.addEventListener("click", openPopupUser);
  addPlaceButton.addEventListener("click", openPopupCard);

  overlay.addEventListener("click", handleClickOutside);
  document.addEventListener("keydown", handleEscapeKey);
}

// Inicia funções
init();
