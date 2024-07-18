/*Popup Variaveis*/
let page = document.querySelector(".page");
let overlay = document.querySelector(".overlay");
let editProfileButton = page.querySelector(".profile__edit-profile-button");
let popup = page.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close-button");

/* Abrir/Fechar */
function openPopup() {
  overlay.classList.add("visible");
  popup.classList.add("visible");
  console.log("CLICOU");
}

function closePopup() {
  popup.classList.remove("visible");
  overlay.classList.remove("visible");
  console.log("FECHOU");
}

/* Ativando funcoes */
editProfileButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
