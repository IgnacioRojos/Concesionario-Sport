let autosEnCarrito = JSON.parse(localStorage.getItem("enCarrito"));
const titulo = document.getElementById("tituloCarro"),
      contenedorParaCarrito = document.getElementById("prueba");
      
titulo.hidden = false;

console.log(autosEnCarrito);

if (autosEnCarrito) {
   carritoHTML();
   titulo.hidden = true;

} else {

    titulo.hidden = false;
}

function carritoHTML(){
    limpiarHTML();
    autosEnCarrito.forEach((a) => {
        const articulo = `
                <div class="col">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                        <div id="tarjeta" class="card h-100 card">
                            <img src="${a.img}" class="card-img-top perfilFoto" alt="">
                            <div class="card-body">
                                <h5 class="card-title">"${a.titulo}"</h5>
                                <h6 class ="card-title">"${this.marca}"</h6>
                                <p>${a.descripcion}</p>
                            </div>
                            <div class="card-footer">
                                <button id= "${a.id}" class="btn btn-danger">Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
                `;
        contenedorParaCarrito.innerHTML += articulo;
        
    });
}

function limpiarHTML(){
	contenedorParaCarrito.innerHTML = "";
}

function eliminarProducto(e) {
    if (e.target.classList.contains("btn-danger")) {
      let autoID = e.target.getAttribute("id");
      autosEnCarrito = autosEnCarrito.filter(
        (a) => a.id != autoID
      );
      localStorage.clear();
      carritoHTML();

    }
  }
  
  contenedorParaCarrito.addEventListener("click", eliminarProducto);
    



    
