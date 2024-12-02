export class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelectorAll(popupSelector);
    this._overlay = document.querySelector(".overlay");
  }

  // Função para abrir popup e exibir overlay
  open() {
    this._overlay.classList.add("visible");
    this._popup.classList.add("popup__opened");
  }

  // Função para fechar popup e esconder overlay
  close() {
    this._overlay.classList.remove("visible");
    this._popup.classList.remove("popup__opened");
  }
  // Manipulador de pressionamento da tecla ESC
  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }

  // Manipulador de clique fora do popup
  setEventListeners() {
    this._popup
      .querySelector(".popupImage__close-button")
      .addEventListener("click", () => this.close());

    this._overlay.addEventListener("click", (event) => {
      if (!this._popup.contains(event.target)) {
        this.close;
      }
    });
  }
}
