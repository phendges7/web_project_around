import { Popup } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { Card } from "./Card.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__wrapper");
    this._inputElements = Array.from(
      this._form.querySelectorAll(".popup__input")
    );
  }

  //Metodo para pegar e atribuir valores dos campos do form
  _getInputValues() {
    const formData = {};
    this._inputElements.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    const formData = this._getInputValues();

    const profileNameElement = document.querySelector(".profile__name");
    const profileDescriptionElement = document.querySelector(
      ".profile__description"
    );
    profileNameElement.textContent = formData.firstInput || "Nome não definido";
    profileDescriptionElement.textContent =
      formData.secondInput || "Descrição não definida";

    this.close;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
    });
  }
}
