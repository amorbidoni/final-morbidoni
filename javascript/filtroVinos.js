// filtro vinos

let todos = document.querySelectorAll(".todos");

let tintos = document.querySelectorAll(".tintos");
let malbec = document.querySelectorAll(".malbec");
let cabernetSauvignon = document.querySelectorAll(".cabernet-sauvignon");
let cabernetFranc = document.querySelectorAll(".cabernet-franc");
let blancosYRosados = document.querySelectorAll(".blancos-rosados");
let blend = document.querySelectorAll(".blend");
let otros = document.querySelectorAll(".otros");

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
    // btnsFiltro.forEach((elem) => {
    //   elem.classList.remove("active-item")
    // })
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
