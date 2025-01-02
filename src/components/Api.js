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
    // Tratamento - ERRO DE REDE
    if (err instanceof TypeError) {
      console.error("Erro de rede: Não foi possível se conectar ao servidor.");
      alert(
        "Erro de rede: Não foi possível se conectar ao servidor. Tente novamente mais tarde."
      );
    } else if (err instanceof SyntaxError) {
      // Tratamento - ERRO DE SINTAXE
      console.error("Erro de sintaxe na resposta da API.");
      alert("Erro de sintaxe na resposta. Tente novamente mais tarde.");
    } else {
      // Tratamento - ERROS GERAIS
      console.error("Erro desconhecido:", err.message || err);
      alert("Ocorreu um erro desconhecido. Tente novamente mais tarde.");
    }
    // Log do erro no console
    console.error("Detalhes do erro:", err);
    throw err;
  }

  getUserInfo() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  getInitialCards() {
    return fetch(`${this._baseUrl}/cards`, {
      method: "GET",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  updateUserInfo({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ name, about }),
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  updateAvatar(avatar) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({ avatar }),
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  addCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({ name, link }),
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  addCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "PUT",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  removeCardLike(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleError);
  }

  deleteCard(cardId) {
    return fetch(`${this._baseUrl}/cards/${cardId}`, {
      method: "DELETE",
      headers: this._headers,
    })
      .then(this._handleResponse)
      .catch(this._handleError);
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
