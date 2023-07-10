/*DOM que voy a utilizar*/
const autos = [];

let carrito = JSON.parse(localStorage.getItem("carrito")) || [];
const contenedor = document.getElementById("contenedorCards"),
	  contenedorBuscar = document.getElementById("contenedorTarjetas");

/*constructor */
class Auto{
	constructor(img,titulo,id,descripcion,marca){
		this.img = img,
		this.titulo = titulo,
		this.id = id,
		this.descripcion = descripcion,
		this.marca = marca;

	}

	mostrarAutos(){
		const tarjetas = `<div class="col">
							<div class="row row-cols-1 row-cols-md-3 g-4">
								<div class="card h-100 card tarjeta">
									<img src="${this.img}" class="card-img-top perfilFoto" alt="">
									<div class="card-body">
										<h5 class="card-title">"${this.titulo}"</h5>
										<h6 class ="card-title tituloMarca">"${this.marca}"</h6>
									</div>
									<div class="card-footer">
										<p>${this.descripcion}</p>
										<button  id="${this.id}" class= "btn btn-primary">Comprar</button>
									</div>
								</div>
							</div>
						</div>
		
		`

		contenedor.innerHTML += tarjetas
	}
	
	agregarEvent(){
		const botonComprar = document.getElementById(this.id);
		const encontrarAuto = autos.find(p => p.id == this.id);
		botonComprar.addEventListener("click", ()=> agregarAlCarro(encontrarAuto));


	}
	

}




fetch("../data.json")
	.then((res) => res.json())
	.then((data)=>{
		data.forEach(aut => {
			let newAuto = new Auto(aut.img, aut.titulo, aut.id,aut.descripcion,aut.marca)
			autos.push(newAuto)
		}),
		autos.forEach(e =>{
			e.mostrarAutos()
		})
		autos.forEach(e =>{
			e.agregarEvent()
		})

	})
	.catch(err => console.log(err));


function agregarAlCarro(auto){
	const enCarrito = carrito.find(aut => aut.id === autos.id);
	if(!enCarrito){
		carrito.push({...auto})
		localStorage.setItem("enCarrito",JSON.stringify(carrito))
	} else{
		let carritoFilt = carrito.filter(aut => aut.id != auto.id);
		carrito =[...carritoFilt]
	}
}

const botonesMarca = document.querySelectorAll(".botonMarca");





botonesMarca.forEach((boton)=>{
	boton.addEventListener("click",(e)=>{
		if(e.currentTarget.id != "todos"){
			limpiar();
			const buscarMarca = autos.filter(aut => aut.marca === e.currentTarget.id);
			console.log(e.currentTarget.id)
			mostrarAutos(buscarMarca);
		} else {
			limpiar();
			mostrarAutos(autos);
		}
	})
	 
	
})




function limpiar(){
	contenedor.innerHTML = "";
}

function mostrarAutos(autos){
	autos.forEach((auto)=>{
		const tarjeta = document.createElement("div");
		tarjeta.classList.add("col");
		tarjeta.innerHTML = `<div class="col">
								<div class="row row-cols-1 row-cols-md-3 g-4">
									<div class="card h-100 card">
										<img src="${auto.img}" class="card-img-top perfilFoto" alt="">
										<div class="card-body">
											<h5 class="card-title">"${auto.titulo}"</h5>
											<h6 class ="card-title tituloMarca">"${auto.marca}"</h6>
										</div>
										<div class="card-footer">
											<p>${auto.descripcion}</p>
											<button  id="${auto.id}" class= "btn btn-primary">Comprar</button>
										</div>
									</div>
								</div>
							</div>
	
	`
	
	contenedor.appendChild(tarjeta);
	})
	
}