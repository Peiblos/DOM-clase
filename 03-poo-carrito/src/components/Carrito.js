import { Producto } from "./Producto";

export class Carrito {

    constructor (){
        // creamos un array de productos
        this.productos = [];
    }

    // metodos
    agregarProducto(nombre, cantidad, precio){
        this.productos.push(new Producto(nombre, cantidad, precio));
        // lo guardamos tambien en el localStorage
        this.guardaLocalStorage();
    }

    /**
     * 
     * @param {Number} index 
     * @returns <void>
     */
    borrarProducto(index){
        this.productos.splice(index, 1);
        // lo guardamos en el localstorage
        this.guardaLocalStorage();
    }

    editarProducto(index, newCantidad){
        if(newCantidad > 0){
            this.productos[index].cantidad = newCantidad;
            // actualizar el LocalStorage
            this.guardaLocalStorage();
        }
    }

    calcularTotalCarrito(){
        return this.productos.reduce((total, producto)=> total + producto.calcularTotal() ,0);
    }

    guardaLocalStorage(){
        localStorage.setItem("carrito", JSON.stringify(this.productos));
    }

    cargarLocalStorage(){
        // localStorage.hasOwnProperty(clave) ? 
        const datosCarrito = JSON.parse(localStorage.getItem("carrito"));
        if(datosCarrito){
            this.productos = datosCarrito.map((producto)=> new Producto(producto.nombre, producto.cantidad, producto.precio));
        }
    }
}