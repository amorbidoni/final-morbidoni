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
let malbec = document.querySelectorAll(".malbec");
let cabernetSauvignon = document.querySelectorAll(".cabernet-sauvignon");
let blend = document.querySelectorAll(".blend");
let otros = document.querySelectorAll(".otros");
