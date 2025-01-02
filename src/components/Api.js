class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _handleResponse(res) {
    if (res.ok) {
      return res.json();
    } else {
      console.error(
        `Erro na resposta da API: ${res.status} - ${res.statusText}`
      );
      return Promise.reject(`Error: ${res.status} ${res.statusText}`);
    }
  }

  _handleError(err) {
    if (err instanceof TypeError) {
      console.error("Erro de rede: Não foi possível se conectar ao servidor.");
      return {
        type: "network",
        message: "Erro de rede: Não foi possível se conectar ao servidor.",
      };
    } else if (err instanceof SyntaxError) {
      console.error("Erro de sintaxe na resposta da API.");
      return {
        type: "syntax",
        message: "Erro de sintaxe na resposta. Tente novamente mais tarde.",
      };
    } else {
      console.error("Erro desconhecido:", err.message || err);
      return {
        type: "unknown",
        message: err.message || "Ocorreu um erro desconhecido.",
      };
    }
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._handleResponse) // Processa resposta
      .catch((err) => {
        const processedError = this._handleError(err); // Processa erro
        throw processedError; // Propaga erro processado
      });
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  addCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  removeCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch((err) => {
        const processedError = this._handleError(err);
        throw processedError;
      });
  }

  fetchUserAndCards() {
    return Promise.all([this.getUserInfo(), this.getInitialCards()]);
  }
}

const api = new Api({
  baseUrl: "https://around-api.pt-br.tripleten-services.com/v1",
  headers: {
    authorization: "8308cb53-bc91-42d1-afda-3dc42a0181bf",
    "Content-Type": "application/json",
  },
});

export default api;
