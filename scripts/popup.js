import { renderSubmit } from "./renderSubmit.js";

const page = document.querySelector(".page");
const overlay = document.querySelector(".overlay");
const popup = document.querySelector(".popup");
const closeButton = popup.querySelector(".popup__close-button");

function openPopup() {
  const popupName = popup.querySelector(".popup__name");
  const popupDescription = popup.querySelector(".popup__description");

  overlay.classList.add("visible");
  popup.classList.add("visible");
  renderSubmit();

  popupName.addEventListener("input", renderSubmit);
  popupDescription.addEventListener("input", renderSubmit);
}

function closePopup() {
  popup.classList.remove("visible");
  overlay.classList.remove("visible");
}

closeButton.addEventListener("click", closePopup);

export { openPopup, closePopup };
