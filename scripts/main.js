/*Popup Variaveis*/
let page = document.querySelector(".page");
let editProfileButton = page.querySelector(".profile__edit-profile-button");
let popup = page.querySelector(".popup");
let closeButton = popup.querySelector(".popup__close-button");

/*Popup Funcoes*/
export function closePopup() {
  popup.classList.remove("visible");
  console.log("FECHOU");
}
export function openPopup() {
  popup.classList.add("visible");
  console.log("CLICOU");
}

/*Ativando funcoes*/
editProfileButton.addEventListener("click", openPopup);
closeButton.addEventListener("click", closePopup);
