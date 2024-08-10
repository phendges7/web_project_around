// CARDS //
const cardGrid = document.querySelector(".photo-grid");

// Vetor objetos iniciais
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

// Popular cartoes iniciais
initialCards.forEach((element) => {
  createCard(element.name, element.link);
});

// FUNCTION - criar cartao
function createCard(nameValue, linkValue) {
  const cardContainer = document.createElement("div");
  cardContainer.classList.add("photo-grid__item");

  const objectImageLink = document.createElement("img");
  objectImageLink.classList.add("photo-grid__item-img");
  objectImageLink.src = linkValue;

  const objectName = document.createElement("p");
  objectName.classList.add("photo-grid__item-name");
  objectName.textContent = nameValue;

  const likeButton = document.createElement("button");
  likeButton.classList.add("photo-grid__like-button");

  likeButton.addEventListener("click", function () {
    likeButton.classList.toggle("active");
  });

  cardContainer.append(objectImageLink, objectName, likeButton);
  cardGrid.append(cardContainer);
}

/***********************************/

// POPUP //
const page = document.querySelector(".page");
const overlay = document.querySelector(".overlay");
const editProfileButton = page.querySelector(".profile__edit-profile-button");

// FUNCTION - construir popup
function buildPopup(titleValue, firstInputPlaceholder, secondInputPlaceholder) {
  popup.innerHTML = ""; //LIMPAR QQ POPUP EXISTENTE

  popup.classList.add("popup_opened");

  const popupPosition = document.createElement("div");
  popupPosition.classList.add("popup__position");

  const popupCloseButton = document.createElement("img");
  popupCloseButton.src = "./images/closeIcon.svg";
  popupCloseButton.alt = "Fechar";
  popupCloseButton.classList.add("popup__close-button");

  const popupForm = document.createElement("form");
  popupForm.classList.add("popup__wrapper");

  const popupTitle = document.createElement("h3");
  popupTitle.classList.add("popup__title");
  popupTitle.textContent = titleValue;

  const popupFirstInput = document.createElement("input");
  popupFirstInput.type = "text";
  popupFirstInput.classList.add("popup__input");
  popupFirstInput.placeholder = firstInputPlaceholder;

  const popupSecondInput = document.createElement("input");
  popupSecondInput.type = "text";
  popupSecondInput.classList.add("popup__input", ".popup__second-input");
  popupSecondInput.placeholder = secondInputPlaceholder;

  const popupSubmitButton = document.createElement("button");
  popupSubmitButton.type = "submit";
  popupSubmitButton.classList.add("popup__submit-button");
  popupSubmitButton.textContent = "SALVAR";

  //Constroi FORM
  popupForm.append(popupTitle);
  popupForm.append(popupFirstInput);
  popupForm.append(popupSecondInput);
  popupForm.append(popupSubmitButton);

  popupPosition.append(popupCloseButton);
  popupPosition.append(popupForm);

  popup.append(popupPosition);

  page.append(popup);
}

// FUNCTION - Renderizar submitButton
function renderSubmit() {
  const firstInput = document.querySelector(".popup__input");
  const secondInput = document.querySelector(".popup__second-input");
  const submitButton = document.querySelector(".popup__submit-button");

  if (firstInput.value.trim() === "" || secondInput.value.trim() === "") {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("disabled");
  } else {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled");
  }
}

// FUNCTION - Abrir Popup USER
function openPopupUser() {
  overlay.classList.add("visible");

  const titleValue = "EDITAR PERFIL";
  const firstInputPlaceholder = "Nome";
  const secondInputPlaceholder = "Sobre mim";

  buildPopup(titleValue, firstInputPlaceholder, secondInputPlaceholder);

  // Atualize as referências após a construção do popup
  const popupFirstInput = document.querySelector(".popup__input");
  const popupSecondInput = document.querySelector(".popup__second-input");
  const submitButton = document.querySelector(".popup__submit-button");
  const closeButton = document.querySelector(".popup__close-button");

  // Debugging
  console.log("popupFirstInput:", popupFirstInput);
  console.log("popupSecondInput:", popupSecondInput);
  console.log("submitButton:", submitButton);
  console.log("closeButton:", closeButton);

  // Verifique se os elementos existem antes de adicionar os listeners
  if (popupFirstInput && popupSecondInput && submitButton && closeButton) {
    popupFirstInput.addEventListener("input", renderSubmit);
    popupSecondInput.addEventListener("input", renderSubmit);
    closeButton.addEventListener("click", closePopup);
    submitButton.addEventListener("click", editUser);
  } else {
    console.error("Um ou mais elementos do popup não foram encontrados.");
  }
}

//RUNNING FUNCTIONS
editProfileButton.addEventListener("click", openPopupUser);
