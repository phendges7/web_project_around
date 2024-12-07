export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // Método privado para obter o template do cartão
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Ouvintes de eventos
  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () =>
        this._handleCardClick(this._name, this._link)
      );
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeClick());
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (event) => this._handleDeleteClick(event));
  }

  // Manipula clique no botão de "curtir"
  _handleLikeClick() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("active");
  }

  // Manipulação clique "excluir"
  _handleDeleteClick(event) {
    event.target.closest(".card").remove();
  }

  // retorna elemento card completo
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
