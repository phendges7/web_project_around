import { closePopup } from "./popup.js";

const popup = document.querySelector(".popup");
const submitButton = popup.querySelector(".popup__submit-button");

function editUser(event) {
  event.preventDefault();

  const profileName = document.querySelector(".profile__name");
  const profileDescription = document.querySelector(".profile__description");
  const popupName = popup.querySelector(".popup__name");
  const popupDescription = popup.querySelector(".popup__description");

  profileName.textContent = popupName.value;
  profileDescription.textContent = popupDescription.value;

  closePopup();
}

submitButton.addEventListener("click", editUser);

export { editUser };
