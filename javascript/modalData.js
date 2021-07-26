const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const tituloVino = document.querySelector("#nombre-vino");
let btnComprar = document.querySelectorAll(".show--modal");
const imagenVino = document.getElementById("imagen-vino");

const getTituloVino = function (data) {
  return `
    <h2 id="etiqueta-nombre">${data}</h2>
    `;
};
const getImagenVino = function (data) {
  return `
   <img id="img" src="${data}" alt="">
  `;
};

const getDataModal = function (id) {
  fetch(`../json/dataVinos.json`)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((elemento) => {
        if (elemento.id == id) {
          tituloVino.insertAdjacentHTML(
            "beforeend",
            getTituloVino(elemento.nombre)
          );
          imagenVino.insertAdjacentHTML(
            "beforeend",
            getImagenVino(elemento.imagen)
          );
        }
      });
    });
};

for (let i = 0; i < btnComprar.length; i++) {
  btnComprar[i].addEventListener("click", function () {
    getDataModal(btnComprar[i].id);
  });
}

// reset modal

let btnResetModal = document.querySelectorAll(".close--modal");

for (let i = 0; i < btnResetModal.length; i++) {
  btnResetModal[i].addEventListener("click", function () {
    let etiquetaNombre = document.getElementById("etiqueta-nombre");
    let imagen = document.getElementById("img");
    tituloVino.removeChild(etiquetaNombre);
    imagenVino.removeChild(imagen);
  });
}
overlay.addEventListener("click", function () {
  let etiquetaNombre = document.getElementById("etiqueta-nombre");
  let imagen = document.getElementById("img");
  tituloVino.removeChild(etiquetaNombre);
  imagenVino.removeChild(imagen);
});
