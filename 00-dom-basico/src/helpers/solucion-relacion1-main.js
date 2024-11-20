const init = () =>{

};


// --------------- Inicio de la aplicacion ----------------

document.addEventListener("DOMContentLoaded", ()=>{
    // Ejercicio 1:
    // Selecciona el elemento `h1` por su ID.
    // forma lenta
    const elementDiv = document.getElementById("contenedorPrincipal");
    const elementH1 = elementDiv.querySelector("h1"); // se trae la primera ocurrencia
    console.log(elementH1);
    console.log(elementH1.textContent);
    // forma rapida
    const elementH1v2 = document
        .getElementById("contenedorPrincipal")
        .querySelector("h1");
    console.log(elementH1v2);
});

// Ejercicio 2:
// Selecciona todos los parrafos con la clase "parrafo" dentro del "contenedorPrincipal"
const parrafosDiv = document.querySelectorAll("#contenedorPrincipal .parrafo");
console.log(parrafosDiv);

// Ejercicio 3:
// Selecciona el elemento `img` por su atributo `src`.

const elementImg = document.querySelector('img[src="imagen.png"]');
console.log(elementImg);

// Ejercicio 4
// Selecciona todos los elementos `<span>` dentro del `contenedorSecundario`.

const elementsSpan = document.querySelectorAll("#contenedorSecundario span");
console.log(elementsSpan);

// Ejercicio 5
// Selecciona el primer párrafo con la clase "importante".

const element1Parrafo = document.querySelector(".parrafo.importante");
console.log(element1Parrafo);

// Ejercicio 6
// Selecciona todos los párrafos que están dentro de un elemento con el `id` "contenedorPrincipal".

const elementParrafos = document.querySelectorAll("#contenedorPrincipal p");
console.log(elementParrafos);

// Ejercicio 7
// Selecciona todos los elementos que tienen el atributo `data-atributo` con valor "valor1".

const elementsAtributo = document.querySelectorAll("[data-atributo='valor1']");
console.log(elementsAtributo);

// Ejercicio 8
// Selecciona el segundo párrafo que está dentro de un elemento con la clase "importante".

const elementParrafosImportantes = document.querySelectorAll(".parrafo.importante");
// return elementParrafosImportantes.length >1 ? elementParrafosImportantes[1] : null;
elementParrafosImportantes.length >1 ? console.log(elementParrafosImportantes[1]) : null;


// Ejercicio 9 
// Selecciona todos los elementos `<span>` que están dentro de cualquier elemento con la clase "contenedorSecundario".

const elementsSpanInContenedor = document.querySelectorAll("#contenedorSecundario span");
console.log(elementsSpanInContenedor);

// Ejercicio 10
// Selecciona el tercer párrafo dentro del `contenedorPrincipal` que tiene la clase "parrafo".
const element3Parrafo = document.querySelectorAll("#contenedorPrincipal .parrafo");
element3Parrafo.length >2 ?element3Parrafo[2] : null;

