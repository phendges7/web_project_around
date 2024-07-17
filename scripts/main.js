let page = document.querySelector(".page");
let editButton = page.querySelector(".profile__edit-profile-button");

function openPopup() {
  page.insertAdjacentHTML(
    "afterbegin",
    `<form class="profile popup">
            <img
              src="./images/closeIcon.svg"
              alt="Fechar"
              class="popup__close-button"
            />
            <div class="popup__wrapper">
              <h3 class="popup__title">EDITAR PERFIL</h3>
              <input
                type="text"
                class="popup__input popup__user-name"
                placeholder="Nome"
              />
              <input
                type="text"
                class="popup__input popup__user-description"
                placeholder="Sobre mim"
              />
              <button type="submit" class="popup__submit-button">
                SALVAR
              </button>
            </div>
          </form>`
  );
  alert("CLICOU");
}

editButton.addEventListener("click", openPopup);
