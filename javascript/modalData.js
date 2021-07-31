const urlParams = new URLSearchParams(window.location.search);
const id = urlParams.get("id");
const tituloVino = document.querySelector("#nombre-vino");
let btnComprar = document.querySelectorAll(".show--modal");
const imagenVino = document.getElementById("imagen-vino");
const infoVino = document.getElementById("info-vino");
const precioUnitario = document.getElementById("precio-unitario");
const total = document.getElementById("precioTotal");

const getPrecioUnitario = function (data) {
  return `
    <span id="precio">${data.precio}</span>
    
      `;
};
const getPrecioTotal = function (data) {
  return `
    <span id="span-total">Precio Total: $${data.precio}</span>
  `;
};
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
const getdescriptionVino = function (data) {
  return `
  <tbody id="tbodyVino">
  <tr>
    <td class="table--data">Añada:</td>
    <td>${data.añada}</td>
  </tr>
  <tr>
    <td class="table--data">Varietal:</td>
    <td>${data.varietal}</td>
  </tr>
  <tr>
    <td class="table--data">Notas de Cata:</td>
    <td>${data.descripcion}</td>
  </tr>
</tbody>
    
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
          infoVino.insertAdjacentHTML(
            "beforeend",
            getdescriptionVino(elemento)
          );
          precioUnitario.insertAdjacentHTML(
            "beforeend",
            getPrecioUnitario(elemento)
          );
          total.insertAdjacentHTML("beforeend", getPrecioTotal(elemento));
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
    let precio = document.getElementById("precio");
    tituloVino.removeChild(etiquetaNombre);
    imagenVino.removeChild(imagen);
    infoVino.removeChild(tbodyVino);
    precioUnitario.removeChild(precio);
    let spanTotal = document.getElementById("span-total");
    total.removeChild(spanTotal);
  });
}
var overlay = document.querySelector(".overlay");
overlay.addEventListener("click", function () {
  let etiquetaNombre = document.getElementById("etiqueta-nombre");
  let imagen = document.getElementById("img");
  tituloVino.removeChild(etiquetaNombre);
  imagenVino.removeChild(imagen);
  infoVino.removeChild(tbodyVino);
  let precio = document.getElementById("precio");
  precioUnitario.removeChild(precio);
  let spanTotal = document.getElementById("span-total");
  total.removeChild(spanTotal);
});
