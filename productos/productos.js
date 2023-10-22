

class Productos{

	constructor(marca,nombre,peso,cajaEmpaque){
		this.marca = marca
		this.nombre = nombre
		this.peso = peso
		this.cajaEmpaque = cajaEmpaque
	}
}

let producto1 = new Productos("Coca-Cola", "Coca-Cola",2.25,8)

let ProductosLista = [producto1]


function mostrar(){
		for( var producto of ProductosLista ){
		 document.querySelector(".productos1").innerHTML = "<p class = 'parrafo'>Cantidad de productos : "+ProductosLista[producto]+"</p>"
		}
}



class Pedidos{
	constructor(fecha,){
		this.fecha = fecha
	}
}



