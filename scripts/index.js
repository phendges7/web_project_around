// Variaveis popup
const page = document.querySelector(".page");
const overlay = document.querySelector(".overlay");
const editProfileButton = page.querySelector(".profile__edit-profile-button");
const popup = document.querySelector(".popup");
const submitButton = popup.querySelector(".popup__submit-button");
const closeButton = popup.querySelector(".popup__close-button");

//Variaveis editUser
const profileName = document.querySelector(".profile__name");
const profileDescription = document.querySelector(".profile__description");
const popupName = popup.querySelector(".popup__name");
const popupDescription = popup.querySelector(".popup__description");

//Renderizar submitButton
function renderSubmit() {
  const popupName = popup.querySelector(".popup__name");
  const popupDescription = popup.querySelector(".popup__description");

  if (popupName.value.trim() === "" || popupDescription.value.trim() === "") {
    submitButton.setAttribute("disabled", true);
    submitButton.classList.add("disabled");
  } else {
    submitButton.removeAttribute("disabled");
    submitButton.classList.remove("disabled");
  }
}

// Abrir Popup
function openPopup() {
  overlay.classList.add("visible");
  popup.classList.add("popup_opened");
  renderSubmit();

  popupName.addEventListener("input", renderSubmit);
  popupDescription.addEventListener("input", renderSubmit);
}

// Fechar popup
function closePopup() {
  overlay.classList.remove("visible");
  popup.classList.remove("popup_opened");
}

// Validar campos popup
popupName.addEventListener("input", renderSubmit);
popupDescription.addEventListener("input", renderSubmit);

// Editar usuario
function editUser(event) {
  event.preventDefault();

  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;

  closePopup();
}

// Acionar Functions
closeButton.addEventListener("click", closePopup);
editProfileButton.addEventListener("click", openPopup);
submitButton.addEventListener("click", editUser);

//Acionar LIKE
const likeButtons = document.querySelectorAll(".photo-grid__like-button");
likeButtons.forEach((button) => {
  button.addEventListener("click", function () {
    button.classList.toggle("active");
  });
});
