const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const tituloVino = document.querySelector("#nombre-vino");

const getTituloVino = function (data) {
  return `
    <h2>${data.nombre}</h2>
    `;
};

fetch("../json/dataVinos.json")
  .then((response) => response.json())
  .then((data) => {
    data.forEach((elemento) => {
      if (elemento.id == id) {
        tituloVino.insertAdjacentHTML("beforeend", getTituloVino(elemento));
      }
    });
  })

  .catch((err) => console.log(err));
