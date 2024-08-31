export class Card {
  constructor(name, link, templateSelector) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
  }

  // Método privado para obter o template do cartão
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Método privado para adicionar ouvintes de eventos
  _setEventListeners() {
    this._element
      .querySelector(".card__image")
      .addEventListener("click", () => this._handleImageClick());
    this._element
      .querySelector(".card__like-button")
      .addEventListener("click", () => this._handleLikeClick());
    this._element
      .querySelector(".card__delete-button")
      .addEventListener("click", (event) => this._handleDeleteClick(event));
  }

  // Método privado para manipulação do clique na imagem
  _handleImageClick() {
    debugger;
    openPopupImage({ target: this._element.querySelector(".card__image") });
  }

  // Método privado para manipulação do clique no botão de "curtir"
  _handleLikeClick() {
    this._element
      .querySelector(".card__like-button")
      .classList.toggle("active");
  }

  // Método privado para manipulação do clique no botão de "excluir"
  _handleDeleteClick(event) {
    event.target.closest(".card").remove();
  }

  // Método público que retorna o elemento de cartão completo e funcional
  generateCard() {
    this._element = this._getTemplate();

    this._element.querySelector(".card__image").src = this._link;
    this._element.querySelector(".card__image").alt = this._name;
    this._element.querySelector(".card__name").textContent = this._name;

    this._setEventListeners();

    return this._element;
  }
}
