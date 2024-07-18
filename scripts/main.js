import { openPopup } from "./popup.js";
import { editUser } from "./editUser.js";
import { renderSubmit } from "./renderSubmit.js";

// Variaveis popup
const page = document.querySelector(".page");
const editProfileButton = page.querySelector(".profile__edit-profile-button");
const popup = document.querySelector(".popup");
const submitButton = popup.querySelector(".popup__submit-button");

// Abrir/Fechar Popup
editProfileButton.addEventListener("click", openPopup);
submitButton.addEventListener("click", editUser);

// Validar campos popup
const popupName = popup.querySelector(".popup__name");
const popupDescription = popup.querySelector(".popup__description");

popupName.addEventListener("input", renderSubmit);
popupDescription.addEventListener("input", renderSubmit);
