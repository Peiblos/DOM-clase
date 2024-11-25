
// -------- FUNCION CONSTRUCTORA ---------
export function Producto(nombre, precio, stock) {
    // Variables privadas
    _nombre = nombre;
    _precio = precio;
    _stock = stock;
    
    //------ Metodos publicos ------
    //------ Setter y getter
    this.setNombre = function (nombre){
        _nombre = nombre;
    };
    this.getNombre = function (){
        return _nombre;
    };

    this.setPrecio = function (precio){
        _precio = precio;
    };
    this.getPrecio = function (){
        return _precio;
    };


    this.setStock = function (stock){
        _stock = stock;
    };
    this.getStock = function (){
        return _stock;
    };


    this.actualizarStock = function (cantidad){
        _stock += cantidad;
        return `Stock actualizado a ${this.getStock()}`;
    };

    this.obtenerInfo = function () {
        return `Nombre: ${this.getNombre()} Precio: ${this.getPrecio()} Stock: ${this.getStock()}`;
    }
}