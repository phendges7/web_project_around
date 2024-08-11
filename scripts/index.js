/***********************************/
// POPUP //
// Variaveis Globais POPUP
const overlay = document.querySelector(".overlay");
const editProfileButton = document.querySelector(
  ".profile__edit-profile-button"
);
const popup = document.querySelector(".popup");
let submitButton;

// FUNCTION - construir popup
function buildPopup(
  titleValue,
  firstInputPlaceholder,
  secondInputPlaceholder,
  buttonLabel
) {
  popup.innerHTML = ""; //LIMPAR QQ POPUP EXISTENTE
  popup.classList.add("popup_opened");

  const popupPosition = document.createElement("div");
  popupPosition.classList.add("popup__position");

  const popupCloseButton = document.createElement("img");
  popupCloseButton.setAttribute("src", "./images/closeIcon.svg");
  popupCloseButton.setAttribute("alt", "Fechar");
  popupCloseButton.classList.add("popup__close-button");

  const popupForm = document.createElement("form");
  popupForm.classList.add("popup__wrapper");

  const popupTitle = document.createElement("h3");
  popupTitle.classList.add("popup__title");
  popupTitle.textContent = titleValue;

  const popupFirstInput = document.createElement("input");
  popupFirstInput.type = "text";
  popupFirstInput.classList.add("popup__input");
  popupFirstInput.setAttribute("placeholder", firstInputPlaceholder);
  popupFirstInput.setAttribute("id", "firstInput");

  const popupSecondInput = document.createElement("input");
  popupSecondInput.type = "text";
  popupSecondInput.classList.add("popup__input");
  popupSecondInput.setAttribute("placeholder", secondInputPlaceholder);
  popupSecondInput.setAttribute("id", "secondInput");

  const popupSubmitButton = document.createElement("button");
  popupSubmitButton.type = "submit";
  popupSubmitButton.classList.add("popup__submit-button");
  popupSubmitButton.textContent = buttonLabel;

  //Constroi FORM
  popupForm.append(popupTitle);
  popupForm.append(popupFirstInput);
  popupForm.append(popupSecondInput);
  popupForm.append(popupSubmitButton);

  popupPosition.append(popupCloseButton);
  popupPosition.append(popupForm);

  popup.append(popupPosition);
}

// FUNCTION - Renderizar submitButton
function renderSubmit() {
  if (firstInput.value.trim() == "" || secondInput.value.trim() == "") {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("disabled");
  } else {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled");
  }
}

// FUNCTION - Fechar popup
function closePopup() {
  overlay.classList.remove("visible");
  popup.classList.remove("popup_opened");
}

/***********************************/
// CARDS //
// Variaveis Globais
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

// Popular CARDS iniciais
initialCards.forEach((element) => {
  createCard(element.name, element.link);
});

// FUNCTION - criar objeto CARD
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

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("active");
  });
  cardContainer.prepend(objectImageLink, objectName, likeButton, deleteButton);
  cardGrid.prepend(cardContainer);
}

// FUNCTION - Adicionar novo CARD
function addNewCard(event) {
  event.preventDefault();
  createCard(firstInput.value, secondInput.value);
  closePopup();
}

function removeCardElement(event) {
  console.log(event);
}

// FUNCTION - Deletar CARD
function deleteCard() {
  let deleteButton = document.querySelectorAll("#delete-button");
  allDeleteButtons = Array.from(deleteButton);
  console.log(allDeleteButtons);
}
deleteCard();

// FUNCTION - Abrir Popup CARD
function openPopupCard() {
  overlay.classList.add("visible");

  const titleValue = "NOVO LOCAL";
  const firstInputPlaceholder = "Titulo";
  const secondInputPlaceholder = "Link da imagem";
  const buttonLabel = "CRIAR";

  buildPopup(
    titleValue,
    firstInputPlaceholder,
    secondInputPlaceholder,
    buttonLabel
  );

  // Atualize as referências após a construção do popup
  const popupFirstInput = popup.querySelector("#firstInput");
  const popupSecondInput = popup.querySelector("#secondInput");
  submitButton = document.querySelector(".popup__submit-button");
  const closeButton = popup.querySelector(".popup__close-button");

  // Validar campos popup
  renderSubmit();
  popupFirstInput.addEventListener("input", renderSubmit);
  popupSecondInput.addEventListener("input", renderSubmit);
  closeButton.addEventListener("click", closePopup);
  submitButton.addEventListener("click", addNewCard);
}

addPlaceButton.addEventListener("click", openPopupCard);

/***********************************/
//PROFILE

//Variaveis editUser
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

// FUNCTION - Abrir Popup USER
function openPopupUser() {
  overlay.classList.add("visible");

  const titleValue = "EDITAR PERFIL";
  const firstInputPlaceholder = "Nome";
  const secondInputPlaceholder = "Sobre mim";
  const buttonLabel = "SALVAR";

  buildPopup(
    titleValue,
    firstInputPlaceholder,
    secondInputPlaceholder,
    buttonLabel
  );

  // Atualize as referências após a construção do popup
  const popupFirstInput = popup.querySelector("#firstInput");
  const popupSecondInput = popup.querySelector("#secondInput");
  submitButton = document.querySelector(".popup__submit-button");
  const closeButton = popup.querySelector(".popup__close-button");

  // Validar campos popup
  renderSubmit();
  popupFirstInput.addEventListener("input", renderSubmit);
  popupSecondInput.addEventListener("input", renderSubmit);
  closeButton.addEventListener("click", closePopup);
  submitButton.addEventListener("click", editUser);
}

// FUNCTION - Editar Perfil do Usuario
function editUser(event) {
  event.preventDefault();
  profileName.textContent = firstInput.value;
  profileDescription.textContent = secondInput.value;
  closePopup();
}

editProfileButton.addEventListener("click", openPopupUser);
