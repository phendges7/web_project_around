/***********************************/
// Variaveis Globais POPUP
// FUNÇÃO - Seleciona e retorna os elementos do popup
function getPopupElements(popupElement) {
  return {
    firstInput: popupElement.querySelector(".popup__input:nth-child(2)"),
    secondInput: popupElement.querySelector(".popup__input:nth-child(3)"),
    closeButton: popupElement.querySelector(".popup__close-button"),
    submitButton: popupElement.querySelector(".popup__submit-button"),
  };
}

// Selecionando os popups
const popupProfile = document.querySelector("#popupProfile");
const popupCard = document.querySelector("#popupCard");

// Obtendo os elementos dos popups
const profileElements = getPopupElements(popupProfile);
const cardElements = getPopupElements(popupCard);

const overlay = document.querySelector(".overlay");

// Variaveis Globais CARDS
const addPlaceButton = document.querySelector(".profile__add-place-button");
const cardGrid = document.querySelector(".photo-grid");
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

//Variaveis globais PROFILE
const editProfileButton = document.querySelector(".profile__edit-button");
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//Variaveis globais POPUP IMAGEM
const popupImage = document.querySelector(".popupImage");

/***********************************/
// POPUP //
// FUNCTION - Ativa/Desativa Overlay e modifica classe popup
function openOverlayAndPopup(popupElement) {
  overlay.classList.add("visible");
  popupElement.classList.add("popup__opened");
}
function closeOverlayAndPopup(popupElement) {
  overlay.classList.remove("visible");
  popupElement.classList.remove("popup__opened");
}

//Renderizar submitButton
function renderSubmit(firstInput, secondInput, submitButton) {
  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("disabled");
  } else {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled");
  }
}

/***********************************/
// CARDS //
// FUNCTION - Popular CARDS iniciais
function addInitialCards() {
  initialCards.forEach((card) => createCard(card.name, card.link));
}

// FUNCTION - Criar objeto CARD
function createCard(nameValue, linkValue) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("photo-grid__item");

  const objectImageLink = document.createElement("img");
  objectImageLink.classList.add("photo-grid__item-img");
  objectImageLink.src = linkValue;
  objectImageLink.alt = nameValue;

  const objectName = document.createElement("p");
  objectName.classList.add("photo-grid__item-name");
  objectName.textContent = nameValue;

  const likeButton = document.createElement("button");
  likeButton.classList.add("photo-grid__like-button");

  const deleteButton = document.createElement("img");
  deleteButton.classList.add("photo-grid__delete-button");
  deleteButton.setAttribute("src", "../images/deleteButton.svg");
  deleteButton.setAttribute("alt", "Delete");
  deleteButton.setAttribute("id", "delete-button");

  objectImageLink.addEventListener("click", openPopupImage);
  likeButton.addEventListener("click", () =>
    likeButton.classList.toggle("active")
  );
  deleteButton.addEventListener("click", deleteCard);

  cardContainer.prepend(objectImageLink, objectName, likeButton, deleteButton);
  cardGrid.prepend(cardContainer);
  deleteCard();
}

// FUNCTION - Adicionar novo CARD
function addNewCard(event) {
  event.preventDefault();
  createCard(cardElements.firstInput.value, cardElements.secondInput.value);
  closeOverlayAndPopup(popupCard);
}

// FUNCTION - aponta qual CARD deve ser removido
function removeCardElement(event) {
  event.target.parentElement.remove();
}

// FUNCTION - Deletar CARD
function deleteCard() {
  const deleteButton = document.querySelectorAll("#delete-button");
  let allDeleteButtons = Array.from(deleteButton);
  allDeleteButtons.forEach((button) =>
    button.addEventListener("click", removeCardElement)
  );
}

// FUNCTION - Abrir Popup CARD
function openPopupCard() {
  openOverlayAndPopup(popupCard);

  // Valida os campos do popup de novo local
  renderSubmit(
    cardElements.firstInput,
    cardElements.secondInput,
    cardElements.submitButton
  );
  cardElements.firstInput.addEventListener("input", () =>
    renderSubmit(
      cardElements.firstInput,
      cardElements.secondInput,
      cardElements.submitButton
    )
  );
  cardElements.secondInput.addEventListener("input", () =>
    renderSubmit(
      cardElements.firstInput,
      cardElements.secondInput,
      cardElements.submitButton
    )
  );

  cardElements.closeButton.addEventListener("click", () =>
    closeOverlayAndPopup(popupCard)
  );
  cardElements.submitButton.addEventListener("click", addNewCard);
}

// FUNCTION - Valida existencia de CARDS
function checkCardContainer() {}

/***********************************/
//PROFILE
// FUNCTION - Abrir Popup USER
function openPopupUser() {
  openOverlayAndPopup(popupProfile);

  // Validar campos do popup
  renderSubmit(
    profileElements.firstInput,
    profileElements.secondInput,
    profileElements.submitButton
  );
  profileElements.firstInput.addEventListener("input", () =>
    renderSubmit(
      profileElements.firstInput,
      profileElements.secondInput,
      profileElements.submitButton
    )
  );
  profileElements.secondInput.addEventListener("input", () =>
    renderSubmit(
      profileElements.firstInput,
      profileElements.secondInput,
      profileElements.submitButton
    )
  );

  profileElements.closeButton.addEventListener("click", () =>
    closeOverlayAndPopup(popupProfile)
  );
  profileElements.submitButton.addEventListener("click", editUser);
}

// FUNCTION - Editar Perfil do Usuario
function editUser(event) {
  event.preventDefault();

  profileName.textContent = profileElements.firstInput.value;
  profileDescription.textContent = profileElements.secondInput.value;

  closeOverlayAndPopup(popupProfile);
}

/***********************************/
//EXPANDIR IMAGEM

// FUNCTION - construir popup imagem grande
function openPopupImage(event) {
  const imgElement = event.target;
  openOverlayAndPopup(popupImage); // Verifique se esta função adiciona a classe 'popup__opened'

  const imageCloseButton = popupImage.querySelector(
    ".popupImage__close-button"
  );
  const imageExpanded = popupImage.querySelector(".popupImage__big");
  const imageTitle = popupImage.querySelector(".popupImage__title");

  imageExpanded.src = imgElement.src;
  imageExpanded.alt = imgElement.alt;
  imageTitle.textContent = imgElement.alt;

  console.log(popupImage.classList); // Deve incluir 'popup__opened'

  imageCloseButton.addEventListener("click", () =>
    closeOverlayAndPopup(popupImage)
  );
}

// FUNCTION - Inicializa funcoes
function init() {
  addInitialCards();
  deleteCard();
  editProfileButton.addEventListener("click", openPopupUser);
  addPlaceButton.addEventListener("click", openPopupCard);
}

// Inicia functions
init();
