export class UserInfo {
  constructor(nameSelector, descriptionSelector) {
    this._nameElement = document.querySelector(nameSelector);
    this._descriptionElement = document.querySelector(descriptionSelector);
  }

  getUserInfo() {
    return {
      name: this._nameElement.textContent,
      description: this._descriptionElement.textContent,
    };
  }

  setUserInfo({ name, description }) {
    debugger;
    console.log(this._descriptionElement);

    if (name) {
      this._nameElement.textContent = name;
    }

    if (description) {
      this._descriptionElement.textContent = description;
    }
  }
}
