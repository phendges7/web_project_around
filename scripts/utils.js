// Seletores comuns para todos os popups e a overlay
const overlay = document.querySelector(".overlay");
const popups = Array.from(document.querySelectorAll(".popup"));

// Função para selecionar elementos dentro de um popup
export function getPopupElements(popupElement) {
  return {
    firstInput: popupElement.querySelector("[name='firstInput']"),
    secondInput: popupElement.querySelector("[name='secondInput']"),
    closeButton: popupElement.querySelector(".popup__close-button"),
    submitButton: popupElement.querySelector(".popup__submit-button"),
    formElement: popupElement.querySelector(".popup__wrapper"),
    formErrors: {
      firstInputError: popupElement.querySelector(".firstInput-error"),
      secondInputError: popupElement.querySelector(".secondInput-error"),
    },
  };
}

// Função para abrir popup e exibir overlay
export function openOverlayAndPopup(popupElement) {
  overlay.classList.add("visible");
  popupElement.classList.add("popup__opened");
}

// Função para fechar popup e esconder overlay
export function closeOverlayAndPopup(popupElement) {
  overlay.classList.remove("visible");
  popupElement.classList.remove("popup__opened");
}

// Manipulador de clique fora do popup
export function handleClickOutside(event) {
  popups.forEach((popupElement) => {
    if (
      popupElement.classList.contains("popup__opened") &&
      !popupElement.contains(event.target)
    ) {
      closeOverlayAndPopup(popupElement);
    }
  });
}

// Manipulador de pressionamento da tecla ESC
export function handleEscapeKey(event) {
  if (event.key === "Escape") {
    popups.forEach((popupElement) => {
      if (popupElement.classList.contains("popup__opened")) {
        closeOverlayAndPopup(popupElement);
      }
    });
  }
}
