"use strict";

// MODAL
// creo variables con las clases que necesito
var myModal = document.querySelector(".myModal");
var btnCloseModal = document.querySelector(".close--modal");
var overlay = document.querySelector(".overlay");
var showModal = document.querySelectorAll(".show--modal");
var hidden = document.querySelector(".hidden");

let getCantidadProducto = document.querySelector(".cantidad--producto");

//creo la funcion para abrir el modal (agregando clase hidden)

const openModal = function () {
  myModal.classList.remove("hidden");
  overlay.classList.remove("hidden");
  resetInput();
};
const resetInput = function () {
  getCantidadProducto.value = 1;
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
    let etiquetaNombre = document.getElementById("etiqueta-nombre");
    let imagen = document.getElementById("img");
    tituloVino.removeChild(etiquetaNombre);
    imagenVino.removeChild(imagen);
    infoVino.removeChild(tbodyVino);
    let precio = document.getElementById("precio");
    precioUnitario.removeChild(precio);
    let spanTotal = document.getElementById("span-total");
    total.removeChild(spanTotal);
  }
});

// CALCULADOR DE PRECIO

var precioTotal = document.querySelector(".precio--total");

getCantidadProducto.addEventListener("change", function () {
  let cantidadProducto = Number(getCantidadProducto.value);
  let precioUnitario = Number(document.getElementById("precio").innerText);
  var descuento = document.querySelector(".descuento");
  let spanTotal = document.getElementById("span-total");

  if (cantidadProducto < 6 && cantidadProducto >= 1) {
    spanTotal.textContent = `Precio Total: $${
      cantidadProducto * precioUnitario
    }.`;
    descuento.textContent = "10% de descuento desde 6 unidades.";
  } else if (cantidadProducto >= 6) {
    spanTotal.textContent = `Precio Total: $${
      cantidadProducto * precioUnitario -
      (cantidadProducto * precioUnitario * 10) / 100
    }.`;
    descuento.textContent = `Descuento = -$${
      (cantidadProducto * precioUnitario * 10) / 100
    }`;
  }
});

// reset total

// btn agregar al carrito

let btnAgregarAlCarrito = document.querySelectorAll(".btn--agregar");
console.log(btnAgregarAlCarrito.length);
const modalCarrito = document.querySelector(".container__modal--carrito");
for (let i = 0; i < btnAgregarAlCarrito.length; i++) {
  btnAgregarAlCarrito[i].addEventListener("click", function () {
    closeModal();
    modalCarrito.classList.remove("hidden");

    setTimeout(function () {
      modalCarrito.classList.add("hidden");
    }, 3000);
    setTimeout(function () {
      modalCarrito.classList.add("animate__fadeOut");
    }, 2000);
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
}
