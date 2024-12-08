export class Card {
  constructor(name, link, templateSelector, handleCardClick) {
    this._name = name;
    this._link = link;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
  }

  // Metodo privado para obter o template do cartão
  _getTemplate() {
    const cardElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(".card")
      .cloneNode(true);

    return cardElement;
  }

  // Ouvintes de eventos
  _setEventListeners() {
    const image = this._element.querySelector(".card__image");
    const likeButton = this._element.querySelector(".card__like-button");
    const deleteButton = this._element.querySelector(".card__delete-button");

    image.addEventListener("click", () =>
      this._handleCardClick(this._name, this._link)
    );
    likeButton.addEventListener("click", () =>
      this._handleLikeClick(likeButton)
    );
    deleteButton.addEventListener("click", () => this._handleDeleteClick());
  }

  // Manipula clique no botão de "curtir"
  _handleLikeClick(likeButton) {
    likeButton.classList.toggle("active");
  }

  // Manipulação clique "excluir"
  _handleDeleteClick() {
    this._element.remove();
    this._element = null;
  }

  // retorna elemento card completo
  generateCard() {
    console.log("Gerando card para:", this._name, this._link);
    this._element = this._getTemplate();

    const image = this._element.querySelector(".card__image");
    const nameElement = this._element.querySelector(".card__name");

    image.src = this._link;
    image.alt = this._name;
    nameElement.textContent = this._name;

    this._setEventListeners();

    console.log("Card criado com sucesso:", this._element);
    return this._element;
  }
}
