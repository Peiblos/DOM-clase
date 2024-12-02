export class Producto {
    // propiedades privadas y publicas
    #precio;
    // constructor
    constructor(nombre, cantidad, precio){
        this.nombre = nombre;
        this.cantidad = cantidad;
        this.#precio = precio;
    }

    //metodos
    getNombre(){
        return this.nombre;
    }
    setNombre(newNombre){
        this.nombre = newNombre;
    }

    getPrecio(){
        return this.#precio;
    }
    setPrecio(newPrecio){
        this.#precio = newPrecio;
    }

    getCantidad(){
        return this.cantidad;
    }
    setCantidad(newCantidad){
        this.cantidad = newCantidad;
    }


    calcularTotal(){
        return this.#precio * this.cantidad;
    }
    obtenerInfo(){
        return `Nombre: ${this.nombre}, Cantidad: ${this.cantidad}, Precio: ${this.#precio} --- Total: ${this.calcularTotal()}`;
    }

}