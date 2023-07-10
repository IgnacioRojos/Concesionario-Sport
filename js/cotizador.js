const anios = [
  { anio: 2023 },
  { anio: 2022 },
  { anio: 2021 },
  { anio: 2020 },
  { anio: 2019 },
  { anio: 2018 },
  { anio: 2017 },
];

const marcas = [
  { marca: "fiat", id: 1 },
  { marca: "chevrolet", id: 2 },
  { marca: "ford", id: 3 },
  { marca: "wolsvagen", id: 4 },
  { marca: "jeep", id: 5 },
  { marca: "toyota", id: 6 },
];

const botones = document.getElementById("checkBoxAños");

function cotizarAuto() {
  anios.forEach((a) => {
    const boton = `<div class="form-check anios">
                            <input class="form-check-input btnAnios" value = ${a.anio} type="radio" name="flexRadioDefault" id="flexRadioDefault2">
                            <label class="form-check-label" for="flexRadioDefault2">
                                ${a.anio}
                            </label>
                            
                        </div>

        `;
    botones.innerHTML += boton;
  });
  botonAnio();
}

cotizarAuto();

const botonParaCotizar = document.getElementById("btnCotizar"),
  checksAnios = document.querySelectorAll(".btnAnios"),
  cotizarBoton = document.getElementById("marcaCotizador"),
  botonDeMarca = document.getElementById("botonDeLasMarcas");

cotizarBoton.hidden = true;
function paraCotizar(){
    botonParaCotizar.addEventListener("click", function () {
        checksAnios.forEach((e) => {
          if (e.checked == true) {
            const precioPorAnio = e.value;
            limpiarCotizador();
            flipper();
            setTimeout(() => {
              limpiarCotizador();
            }, 1000);
            setTimeout(() => {
              cotizarBoton.hidden = false;
              MostrarMarca(precioPorAnio);
            }, 1000);
          }
        });
      });
}
paraCotizar();

cotizarBoton.addEventListener("click", () => {
  limpiarCotizador();
  cotizarBoton.hidden = true;
  cotizarAuto();



});

function limpiarCotizador() {
  botones.innerHTML = "";
}

function flipper() {
  const rueda = `<div class="spinner-border text-primary" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div>`;
  botones.innerHTML += rueda;
}

function botonAnio() {
  const boot = `<button type="button" id="btnCotizar" class="btn btn-dark botonSiguiente"> Siguiente </button>`;
  botones.innerHTML += boot;
}

function MostrarMarca(anio) {
  marcas.forEach((p) => {
    const btn = `<div class= "row">
                        <p>Se selecciono el año ${anio}, el precio de la marca ${p.marca} es de: </p>
                     </div>

        `;
    botones.innerHTML += btn;
  });
}
