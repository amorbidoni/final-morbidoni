"use strict";

// MODAL
// creo variables con las clases que necesito
var myModal = document.querySelector(".myModal");
var btnCloseModal = document.querySelector(".close--modal");
var overlay = document.querySelector(".overlay");
var showModal = document.querySelectorAll(".show--modal");
var hidden = document.querySelector(".hidden");

//creo la funcion para abrir el modal (agregando clase hidden)

const openModal = function () {
  myModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
// creo la funcion para cerrar el modal (eliminando clase hidden)

const closeModal = function () {
  myModal.classList.add("hidden");
  overlay.classList.add("hidden");
};

// creo unn bucle para que se abra el modal en todos los botones "comprar" llamando la funcion

for (let i = 0; i < showModal.length; i++)
  showModal[i].addEventListener("click", openModal);

//  llamo la funcion para cerrar el modal clickeando el boton cerrar o sobre el overlay

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);

// llamo la funcion para cerrar el modal en caso de tocar la tecla escape.

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape" && !myModal.classList.contains("hidden")) {
    closeModal();
  }
});

// CALCULADOR DE PRECIO

var btnCalcular = document.querySelector(".btn--calcular");
var precioTotal = document.querySelector(".precio--total");

btnCalcular.addEventListener("click", function () {
  var cantidadProducto = Number(
    document.querySelector(".cantidad--producto").value
  );
  var precioUnitario = 650;
  var descuento = document.querySelector(".descuento");

  if (cantidadProducto < 6 && cantidadProducto >= 1) {
    precioTotal.textContent = `Precio Total: $${
      cantidadProducto * precioUnitario
    }.`;
    descuento.textContent = "10% de descuento desde 6 unidades.";
  } else if (cantidadProducto >= 6) {
    precioTotal.textContent = `Precio Total: $${
      cantidadProducto * precioUnitario -
      (cantidadProducto * precioUnitario * 10) / 100
    }.`;
    descuento.textContent = `Descuento = -$${
      (cantidadProducto * precioUnitario * 10) / 100
    }`;
  }
});

// filtro vinos

let todos = document.querySelectorAll(".todos");

let tintos = document.querySelectorAll(".tintos");
let malbec = document.querySelectorAll(".malbec");
let cabernetSauvignon = document.querySelectorAll(".cabernet-sauvignon");
let cabernetFranc = document.querySelectorAll(".cabernet-franc");
let blancosYRosados = document.querySelectorAll(".blancos-rosados");
let blend = document.querySelectorAll(".blend");
let otros = document.querySelectorAll(".otros");

console.log(tintos.length);

const btnTodos = document.getElementById("btn-filtro-todos");
const btnTintos = document.getElementById("btn-filtro-tintos");
const btnMalbec = document.getElementById("btn-filtro-malbec");
const btnCabernetSauvignon = document.getElementById("btn-filtro-cs");
const btnCabernetFranc = document.getElementById("btn-filtro-cf");
const btnBlend = document.getElementById("btn-filtro-blend");
const btnBlancosYRosados = document.getElementById("btn-filtro-byr");
const btnOtros = document.getElementById("btn-filtro-otros");

const btnsFiltro = [
  btnTintos,
  btnTodos,
  btnMalbec,
  btnCabernetSauvignon,
  btnCabernetFranc,
  btnBlancosYRosados,
  btnBlend,
  btnOtros,
];

const filtroVinos = function (btn, variedad) {
  btn.addEventListener("click", function () {
    for (let i = 0; i < btnsFiltro.length; i++) {
      btnsFiltro[i].classList.remove("active-item");
    }
    for (let i = 0; i < todos.length; i++) {
      todos[i].classList.add("hidden");
    }
    for (let i = 0; i < variedad.length; i++) {
      variedad[i].classList.remove("hidden");
    }
    btn.classList.add("active-item");
  });
};

filtroVinos(btnTodos, todos);
filtroVinos(btnMalbec, malbec);
filtroVinos(btnTintos, tintos);
filtroVinos(btnCabernetFranc, cabernetFranc);
filtroVinos(btnCabernetSauvignon, cabernetSauvignon);
filtroVinos(btnBlancosYRosados, blancosYRosados);
filtroVinos(btnBlend, blend);
filtroVinos(btnOtros, otros);

// filtro mobile

const selectFiltroMb = document.getElementById("select--vinos-mb");
const selectTodos = document.getElementById("select-todos");
const selectTintos = document.getElementById("select-tintos");
const selectMalbec = document.getElementById("select-malbec");
const selectCabernetSauvignon = document.getElementById(
  "select-cabernetSauvignon"
);
const selectCabernetFranc = document.getElementById("select-cabernetFranc");
const selectBlend = document.getElementById("select-blend");
const selectBlancosYRosados = document.getElementById("select-blancosYRosados");
const selectOtros = document.getElementById("select-otros");

const selectFiltroOptions = [
  selectTodos,
  selectTintos,
  selectMalbec,
  selectCabernetSauvignon,
  selectCabernetFranc,
  selectBlend,
  selectBlancosYRosados,
  selectOtros,
];

// selectFiltroMb.addEventListener("change", function () {
//   for (let i = 0; i < todos.length; i++) {
//     todos[i].classList.add("hidden");
//   }
//   if (selectFiltroMb.value === selectTodos.value) {
//     for (let i = 0; i < todos.length; i++) {
//       todos[i].classList.remove("hidden");
//     }
//   } else if (selectFiltroMb.value === selectMalbec.value) {
//     for (let i = 0; i < malbec.length; i++) {
//       malbec[i].classList.remove("hidden");
//     }
//   }
// });

const selectFiltroMobile = function (option, variedad) {
  selectFiltroMb.addEventListener("change", function () {
    if (selectFiltroMb.value == option.value) {
      for (let i = 0; i < todos.length; i++) {
        todos[i].classList.add("hidden");
      }
      for (let i = 0; i < variedad.length; i++) {
        variedad[i].classList.remove("hidden");
      }
    }
  });
};

selectFiltroMb.addEventListener("change", function () {
  console.log(selectFiltroMb.value);
});

selectFiltroMobile(selectTodos, todos);
selectFiltroMobile(selectTintos, tintos);
selectFiltroMobile(selectMalbec, malbec);
selectFiltroMobile(selectCabernetSauvignon, cabernetSauvignon);
selectFiltroMobile(selectCabernetFranc, cabernetFranc);
selectFiltroMobile(selectBlend, blend);
selectFiltroMobile(selectBlancosYRosados, blancosYRosados);
selectFiltroMobile(selectOtros, otros);
