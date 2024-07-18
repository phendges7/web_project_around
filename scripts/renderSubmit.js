const popup = document.querySelector(".popup");
const submitButton = popup.querySelector(".popup__submit-button");

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

export { renderSubmit };
