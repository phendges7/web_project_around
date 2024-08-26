import { getPopupElements, popupCard } from "./index.js";

/***********************************/
// VALIDACAO
// FUNCTION - Personalizar mensagem de erros
export function setCustomErrorMessages(popupElement) {
  debugger;
  // Verifique se o popupElement é o correto
  console.log("Popup Element:", popupElement);

  const result = getPopupElements(popupElement);
  const firstInputError = result.firstInputError;
  const secondInputError = result.secondInputError;

  // Verifique se secondInputError está definido
  console.log("First Input Error Element:", firstInputError);
  console.log("Second Input Error Element:", secondInputError);

  if (secondInputError) {
    if (popupElement === popupCard) {
      secondInputError.textContent = "Por favor, insira um endereço web.";
    }
  } else {
    console.error("Elemento de erro não encontrado.");
  }
}

// FUNCTION - Mostrar mensagem de erro
export const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  if (errorElement) {
    inputElement.classList.add("popup__input_type_error");
    errorElement.textContent = errorMessage;
    errorElement.classList.add("popup__input-error_visible");
  }
};

// FUNCTION - Ocultar mensagem de erro
export const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  inputElement.classList.remove("popup__input_type_error");
  errorElement.classList.remove("popup__input-error_visible");
  errorElement.textContent = "";
};

// FUNCTION - Checar validade dos INPUTS
const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

// FUNCTION - Verificar se tem INPUT invalido
const hasInvalidInput = (inputList) =>
  inputList.some((inputElement) => !inputElement.validity.valid);
export const renderSubmit = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.setAttribute("disabled", true);
    buttonElement.classList.add("disabled");
  } else {
    buttonElement.removeAttribute("disabled");
    buttonElement.classList.remove("disabled");
  }
};

// FUNCTION - Ativa Listeners de forma escalonavel
const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".popup__input"));
  const buttonElement = formElement.querySelector(".popup__submit-button");
  renderSubmit(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", () => {
      checkInputValidity(formElement, inputElement);
      renderSubmit(inputList, buttonElement);
    });
  });
};

// FUNCTION - Habilitar validacao nos formularios
export const enableValidation = () => {
  document.querySelectorAll(".popup__wrapper").forEach((formElement) => {
    formElement.addEventListener("submit", (evt) => evt.preventDefault());
    setEventListeners(formElement);
  });
};
