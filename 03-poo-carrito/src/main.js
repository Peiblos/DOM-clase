import { Carrito } from "./components/Carrito";

const carrito = new Carrito();
// cargamos los datos del localstorage al carrito
// carrito.cargarLocalStorage();


function pintarInterfazWeb(){
    // selecciono el APP
    const app = document.getElementById("app");

    function pintarCarrito(){
        const lista = document.getElementById("lista-productos");
        // !carrito.productos
        lista.innerHTML = carrito.productos
            .map((producto, index)=> `
            <li data-id="${index}">${producto.obtenerInfo()}
            <button class="btn-editar" data-id="${index}">Editar</button>
            <button class="btn-borrar" data-id="${index}">Borrar</button>
            </li>`
        ).join("");
        //calcular el total
    }

    const handlerSubmit = (e) =>{
        e.preventDefault();
        const inputNombre = document.getElementById("nombre-producto").value.trim();
        const inputCantidad = Number(document.querySelector("#cantidad-producto").value);
        const inputPrecio = Number(document.querySelector("#precio-producto").value);
        // validaciones del formulario basicas
        if( !inputNombre || inputCantidad < 0 || inputPrecio < 0 ){
            alert("Debes insertar valores correctos");
        }
        // añadimos el nombre, cantidad y precio a un producto del carrito
        carrito.agregarProducto(inputNombre, inputCantidad, inputPrecio)
        // ahora pintamos el carrito
        pintarCarrito();
    }

    const opcionesProducto = (e) => {
        // target es el componente donde he hecho click o lo que sea
        const indice = Number(e.target.dataset.id); // cuando pulso click obtengo el componente
        // e.target.classList.contains()
        if(e.target.classList.contains("btn-borrar")){
            carrito.borrarProducto(indice);
            // console.log(carrito);
            // alert("borrando");
            pintarCarrito();
        }
        if(e.target.classList.contains("btn-editar")){
            
        }
    }

    app.innerHTML = `
        <h1> Carrito de la compra de productos</h1>
        <form id="form-producto">
            <input id="nombre-producto" type="text" placeholder="Nombre del producto" >
            <input id="cantidad-producto" type="number" placeholder="cantidad" >
            <input id="precio-producto" type="number" placeholder="precio" >
            <button type="submit">Agregar producto</button>
        </form>

        <div id="lista-productos"></div>
    `;

    document
        .getElementById("form-producto")
        .addEventListener("submit", handlerSubmit);

    document
        .getElementById("lista-productos")
        .addEventListener("click", opcionesProducto);//sin parentesis porque no queremos que lo ejecute cuando lea el codigo, sino cuando hagamos click
}







// ---------- INICIO DE LA APLICACION -------------

pintarInterfazWeb();