import { addCardLike, removeCardLike, deleteCard } from "./Api.js";
import { PopupWithConfirmation } from "./PopupWithConfirmation.js";

export class Card {
  constructor(
    name,
    link,
    id,
    isLiked,
    templateSelector,
    handleCardClick,
    handleDeleteClick
  ) {
    this._name = name;
    this._link = link;
    this._id = id;
    this._isLiked = isLiked;
    this._templateSelector = templateSelector;
    this._handleCardClick = handleCardClick;
    this._handleDeleteClick = handleDeleteClick;
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
    deleteButton.addEventListener("click", (event) =>
      this._handleDeleteClick(event, this._id)
    );
  }

  // Manipula clique no botão de "curtir"
  _handleLikeClick(likeButton) {
    const isActive = likeButton.classList.contains("active");
    if (isActive) {
      removeCardLike(this._id)
        .then((updatedCard) => {
          likeButton.classList.remove("active");
          this._isLiked = false;
        })
        .catch((err) => {
          console.error("Erro ao remover curtida:", err);
        });
    } else {
      addCardLike(this._id)
        .then((updatedCard) => {
          likeButton.classList.add("active");
          this._isLiked = true;
        })
        .catch((err) => {
          console.error("Erro ao add curtida:", err);
        });
    }
  }

  // Manipulação clique "excluir"
  _handleDeleteClick(event, cardId) {
    console.log(event);
    console.log(cardId);

    this.popupDeleteCard.open(cardId);
  }

  // retorna elemento card completo
  generateCard() {
    this._element = this._getTemplate();

    const image = this._element.querySelector(".card__image");
    const nameElement = this._element.querySelector(".card__name");
    const likeButton = this._element.querySelector(".card__like-button");

    image.src = this._link;
    image.alt = this._name;
    nameElement.textContent = this._name;

    if (this._isLiked) {
      likeButton.classList.add("active");
    }

    this._setEventListeners();

    return this._element;
  }
}
