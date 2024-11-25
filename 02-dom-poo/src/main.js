// 1- crear una clase para modelar un sistema de usuarios que puedan iniciar sesion, cerrar session
// y actualizar su perfil
// --------- SOLUCION CON FUNCIONES CONSTRUCTORAS -------------

// function Usuario(nombre, email, password){ //this significa el objeto que voy a crear cuando hago una instacia de esta funcion constructora
//     // variables de instacia publicas
//     this.nombre = nombre; 
//     this.email = email;
//     // variables de instacia privada
//     let _password = password;

//     // ---------- metodos publicos
//     this.login = function(email, password){ // no usar arrow function a no ser que dominemos el contexto del this
//         // quiero evaluar si email y password son correctos
//         if(this.email === email && _password === password){
//             return `Bienvenido ${this.nombre}`;
//         }
//         return "Email o password incorrectos";
//     };

//     this.updateEmail = function (newEmail){
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     };


// }

// // Crear un usuario
// const usuario1 = new Usuario("Juan", "juan@email.com", "123456");

// // --------- Lo mostramos en el Dom ---------
// const app = document.getElementById("app");

// // --------- creo una funcion renderUsuario

// function renderUsuario (){
//     // funcion que pinta en el app el usuario
//     app.innerHTML = `
//         <h2>Usuario: ${usuario1.nombre}</h2>
//         <p>Email: ${usuario1.email}</p>
//         <button id="btn-login">Login</button>
//     `;

//     // añadir el evento del boton
//     const btnLogin = document.getElementById("btnLogin");
//     btnLogin.addEventListener("click", ()=>{
//         alert(usuario1.login("pepe@email.com", "123456"));
//     });
// }

// // --------- SOLUCION CON CLASES -------------

// class UsuarioClases {
//     // las variables privadas se declaran anteponiendo una # al nombre
//     #password;

//     constructor(nombre, email, password){
//         this.nombre = nombre;
//         this.email = email;
//         this.#password = password;
//     }

//     login(email, password) {
//         if(this.email === email && this.#password=== password){
//             return `Bienvenido: ${this.nombre}`;
//         }
//         return "Email o password incorrectos";
//     }

//     updateEmail(newEmail){
//         this.email = newEmail;
//         return `Email actualizado a ${this.email}`;
//     }
// }

// const usuario2 = new UsuarioClases("pepe", "pepe@email.com", "123456");

// Implementar un modelo de producto con funciones constructoras y clases que permita:
// Obtener informacion del producto, actualizar el stock, debiendo registrar o guardar o almacenar
// el nombre, el precio y el stock

import { Producto } from "./components/Producto";

const productos = [
    new Producto("Portatil", 500, 10),
    new Producto("Movil", 1200, 20),
    new Producto("Tablet", 300, 5),
]

// renderizamos los productos
const app = document.getElementById("app");

// ${productos.map((producto) => `<li> ${producto.obtenerInfo()} </li>`).join("")}
app.innerHTML = `
    <h2>Gestion de Productos</h2>
    ${productos.map((producto, index) => {
        return `<li> 
            ${producto.obtenerInfo()}
            <button class="btn-actualizar-stock" data-index="${index}">Actualizar Stock </button>;    
            
        </li>`;
    }).join("")}
`;

// ------ escuchador de eventos click en los botones de actualizar stock

document.querySelectorAll(".btn-actualizar-stock")
    .forEach((btn) => {
        btn.addEventListener("click", () => {
            alert("Actualizar Stock");
        });
    });