// Variaveis globais
const page = document.querySelector(".page");
const overlay = document.querySelector(".overlay");
const editProfileButton = page.querySelector(".profile__edit-profile-button");
const addPlaceButton = page.querySelector(".profile__add-place-button");
const popup = document.querySelector(".popup");
const submitButton = popup.querySelector(".popup__submit-button");
const closeButton = popup.querySelector(".popup__close-button");

//Variaveis editUser
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");

//Renderizar submitButton
function renderSubmit() {
  const firstInput = document.querySelector(".popup__input");
  const secondInput = document.querySelector(".popup__second-input");

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

  renderSubmit();

  // Validar campos popup
  popupFirstInput.addEventListener("input", renderSubmit);
  popupSecondInput.addEventListener("input", renderSubmit);

  closeButton.addEventListener("click", closePopup);
  submitButton.addEventListener("click", editUser);
}

// Fechar popup
function closePopup() {
  overlay.classList.remove("visible");
  popup.classList.remove("popup_opened");
}

// Editar usuario
function editUser(event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;

  closePopup();
}

// FUNCTION - Abrir popup LUGAR
function openPopupPlace() {
  overlay.classList.add("visible");
  debugger;
  const titleValue = "NOVO LUGAR";
  const firstInputValue = "Titulo";
  const secondInputValue = "URL da imagem";
  buildPopup(titleValue, firstInputValue, secondInputValue);
  debugger;
  renderSubmit();
  closeButton.addEventListener("click", closePopup);
  submitButton.addEventListener("click", editUser);
}

// Acionar Functions

editProfileButton.addEventListener("click", openPopupUser);
