import { Popup } from "./Popup.js";
import { UserInfo } from "./UserInfo.js";
import { Card } from "./Card.js";
import { enableValidation } from "./FormValidator.js";
import {
  handleProfileFormSubmit,
  handleCardFormSubmit,
} from "../scripts/utils.js";

export class PopupWithForm extends Popup {
  constructor(popupSelector, handleSubmit) {
    super(popupSelector);
    this._form = this._popup.querySelector(".popup__wrapper");
    this._inputElements = Array.from(
      this._form.querySelectorAll(".popup__input")
    );
    this._handleSubmit = handleSubmit;

    enableValidation();
  }

  //Metodo para pegar e atribuir valores dos campos do form
  _getInputValues() {
    const formData = {};
    this._inputElements.forEach((input) => {
      formData[input.name] = input.value;
    });
    return formData;
  }

  setEventListeners() {
    super.setEventListeners();

    this._form.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = this._getInputValues();
      this._handleSubmit(event, formData);
      this.close();
    });
  }
}
