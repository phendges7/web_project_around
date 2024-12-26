const API_URL_User =
  "https://around-api.pt-br.tripleten-services.com/v1/users/me";
const API_URL_Cards =
  "https://around-api.pt-br.tripleten-services.com/v1/cards/";
const TOKEN = "85c48676-c5af-4b92-ba2f-91e81208dca6";

export function fetchUserInfo() {
  return fetch(API_URL_User, {
    method: "GET",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // se o servidor retornar um erro, rejeite a promessa
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("Mensagem de erro no CATCH:", err);
      throw err; // Repassa o erro para tratamento posterior, se necessário
    });
}

export function fetchCards() {
  return fetch(API_URL_Cards, {
    method: "GET",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // se o servidor retornar um erro, rejeite a promessa
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("Mensagem de erro no CATCH:", err);
      throw err; // Repassa o erro para tratamento posterior, se necessário
    });
}

export function updateUserInfo({ name, about }) {
  debugger;
  fetch(API_URL_User, {
    method: "PATCH",
    headers: {
      authorization: TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: name,
      about: about,
    }),
  })
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      // se o servidor retornar um erro, rejeite a promessa
      return Promise.reject(`Error: ${res.status}`);
    })
    .catch((err) => {
      console.error("Mensagem de erro no CATCH:", err);
      throw err; // Repassa o erro para tratamento posterior, se necessário
    });
}
