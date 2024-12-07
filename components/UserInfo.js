export class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContext,
      description: this._descriptionElement.textContext,
    };
  }

  setUserInfo({ name, description }) {
    if (name) {
      this._nameElement.textContent = name;
    }

    if (description) {
      this._descriptionElement.textContext = description;
    }
  }
}
