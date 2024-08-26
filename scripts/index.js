import { renderSubmit, enableValidation } from "./validate.js";

// Variáveis Globais
export const popupProfile = document.querySelector("#popupProfile");
export const popupCard = document.querySelector("#popupCard");
const popupImage = document.querySelector(".popupImage");
const overlay = document.querySelector(".overlay");

const addPlaceButton = document.querySelector(".profile__add-place-button");
const cardGrid = document.querySelector(".photo-grid");
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
// Funções de Popup
export function getPopupElements(popupElement) {
  return {
    firstInput: popupElement.querySelector("[name='firstInput']"),
    secondInput: popupElement.querySelector("[name='secondInput']"),
    closeButton: popupElement.querySelector(".popup__close-button"),
    submitButton: popupElement.querySelector(".popup__submit-button"),
    formElement: popupElement.querySelector(".popup__wrapper"),
    formErrors: {
      firstInputError: popupElement.querySelector(".firstInput-error"),
      secondInputError: popupElement.querySelector(".secondInput-error"),
    },
  };
}

// FUNCTION - Ativa/Desativa Overlay e modifica classe popup
function openOverlayAndPopup(popupElement) {
  overlay.classList.add("visible");
  popupElement.classList.add("popup__opened");
}
function closeOverlayAndPopup(popupElement) {
  overlay.classList.remove("visible");
  popupElement.classList.remove("popup__opened");
}

// FUNCTION - fecha popup com clique fora
function handleClickOutside(event) {
  const popups = [popupProfile, popupCard, popupImage];

  // Verifica se o clique foi fora do popup (e não no botão de fechar, por exemplo)
  popups.forEach((popupElement) => {
    if (
      popupElement.classList.contains("popup__opened") &&
      !popupElement.contains(event.target)
    ) {
      closeOverlayAndPopup(popupElement);
    }
  });
}

// FUNCTION - fecha popup com ESC
function handleEscapeKey(event) {
  if (event.key === "Escape") {
    const popups = [popupProfile, popupCard, popupImage]; // Array contendo todos os popups

    popups.forEach((popupElement) => {
      if (popupElement.classList.contains("popup__opened")) {
        closeOverlayAndPopup(popupElement);
      }
    });
  }
}

/***********************************/
// Funções de Cartões
function createCard(name, link) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("photo-grid__item");

  const objectImageLink = document.createElement("img");
  objectImageLink.classList.add("photo-grid__item-img");
  objectImageLink.src = link;
  objectImageLink.alt = name;

  const objectName = document.createElement("p");
  objectName.classList.add("photo-grid__item-name");
  objectName.textContent = name;

  const likeButton = document.createElement("button");
  likeButton.classList.add("photo-grid__like-button");

  const deleteButton = document.createElement("img");
  deleteButton.classList.add("photo-grid__delete-button");
  deleteButton.src = "../images/deleteButton.svg";
  deleteButton.alt = "Delete";

  objectImageLink.addEventListener("click", openPopupImage);
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("active")
  );
  deleteButton.addEventListener("click", removeCardElement);

  cardContainer.prepend(objectImageLink, objectName, likeButton, deleteButton);
  cardGrid.prepend(cardContainer);
}

function addInitialCards() {
  initialCards.forEach((card) => createCard(card.name, card.link));
}

function addNewCard(event) {
  event.preventDefault();
  const { firstInput, secondInput } = getPopupElements(popupCard);
  createCard(firstInput.value, secondInput.value);
  closeOverlayAndPopup(popupCard);
}

function removeCardElement(event) {
  event.target.closest(".photo-grid__item").remove();
}

// FUNCTION - Abrir Popup CARD
function openPopupCard() {
  openOverlayAndPopup(popupCard);
  enableValidation();

  const { firstInput, secondInput, submitButton, closeButton } =
    getPopupElements(popupCard);
  renderSubmit([firstInput, secondInput], submitButton);

  // Valida os campos do popup de novo local
  firstInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );
  secondInput.addEventListener("input", () =>
    renderSubmit([firstInput, secondInput], submitButton)
  );

  closeButton.addEventListener("click", () => closeOverlayAndPopup(popupCard));
  submitButton.addEventListener("click", addNewCard);
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
function openPopupImage(event) {
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
