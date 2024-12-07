export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    console.log(popupSelector);

    this._overlay = document.querySelector(".overlay");
  }

  // Função para abrir popup e exibir overlay
  open() {
    this._overlay.classList.add("visible");
    this._popup.classList.add("popup__opened");
    document.addEventListener("keydown", this._handleEscClose);
    this._overlay.addEventListener("click", this._handleOverlayClick);
  }

  // Função para fechar popup e esconder overlay
  close() {
    this._overlay.classList.remove("visible");
    this._popup.classList.remove("popup__opened");
    document.removeEventListener("keydown", this._handleEscClose);
    this._overlay.removeEventListener("click", this._handleOverlayClick);
  }

  // Ouvintes
  setEventListeners() {
    // Clicar botao FECHAR
    const closeButton = this._popup.querySelector(".popup__close-button");
    if (closeButton) {
      closeButton.addEventListener("click", () => this.close());
    }
    // Clicar fora do popup
    this._overlay.addEventListener("click", (event) => {
      if (!this._popup.contains(event.target)) {
        this.close();
      }
    });
  }

  // Manipuladores
  // Pressionar da tecla ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
}
