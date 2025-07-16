export class UserInfo {
  constructor(nameSelector, descriptionSelector, avatarSelector) {
    this._nameSelector = nameSelector;
    this._descriptionSelector = descriptionSelector;
    this._avatarSelector = avatarSelector;
  }

  getUserInfo() {
    return {
      name: document.querySelector(this._nameSelector)?.textContent || "",
      description:
        document.querySelector(this._descriptionSelector)?.textContent || "",
      avatar: document.querySelector(this._avatarSelector)?.src || "",
    };
  }

  setUserInfo({ name, description, avatar }) {
    const nameElement = document.querySelector(this._nameSelector);
    const descElement = document.querySelector(this._descriptionSelector);
    const avatarElement = document.querySelector(this._avatarSelector);

    if (name && nameElement) nameElement.textContent = name;
    if (description && descElement) descElement.textContent = description;
    if (avatar && avatarElement) avatarElement.src = avatar;
  }
}
