// -------------- RELACION II -------------

// --------------declaracion de variables-----------
// --------------declaracion de funciones----------- 
const handleClickSpan = (e) => {
    const span = e.target
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    // cambio el estilo inline
    span.style.backgroundColor = `#${randomColor}`;
}

const handleAlert = (e) =>{
    const parrafo = e.target;
    alert(parrafo.textContent);
}


document.addEventListener("DOMContentLoaded", function(){
    
    // Ejercicio 1
    // Añade un evento de clic a todos los elementos `<span>` dentro del `contenedorSecundario`. 
    // Cuando se haga clic, cambia el color de fondo del elemento al azar.

    // document.querySelectorAll("#contenedorSecundario span")
    //     .forEach(span =>{
    //         //tengo que asignar un evento al click de ese span
    //         span.addEventListener("click", handleClickSpan);
    //     });


    // Ejercicio 2 - NO FUNCIONA con "dblclick" pero si con "click"
    // Crea una función que muestre una alerta con el contenido de cualquier párrafo
    // que tenga la clase "parrafo" cuando se haga doble clic en él.

    document.querySelectorAll(".parrafo")
        .forEach((parrafo) =>{
            parrafo.addEventListener("click", handleAlert);
        });
    
    // Ejercicio 4 - 
    // Crea una función que cambie el contenido de todos los párrafos dentro del `contenedorSecundario` cuando se presione la tecla "Enter".
    // El nuevo contenido debe ser un texto aleatorio (por ejemplo, "Nuevo contenido").

    // document.addEventListener("keydown", (event) =>{
    //     if( event.key === "Enter") {
    //         alert();
    //         document
    //             .querySelectorAll("#contenedorSecundario p")
    //             .forEach((parrafo) => {
    //                 parrafo.textContent="HJollasdfasdf"
    //             })
    // }
    // });

    //Ejercicio 5
    // Añade un evento de clic a cualquier elemento con la clase "etiqueta".
    // Cuando se haga clic, elimina el elemento del DOM.

    // document.querySelectorAll(".etiqueta")
    //     .forEach((etiqueta) => {
    //         etiqueta.addEventListener("click", () => {
    //             etiqueta.remove();
    //         });
    //     });

    // Ejercicio 6 
    // Crea una función que cambie el color de todos los elementos `<span>`
    // dentro del `contenedorSecundario` cuando se mueva el mouse sobre ellos. 
    // El nuevo color debe ser azul.

    // document.querySelectorAll("#contenedorSecundario span")
    //     .forEach((span) => {
    //         span.addEventListener("mouseover", ()=>{
    //             span.style.color = "blue";
    //         });
    //         span.addEventListener("mouseout", () => {
    //             span.style.color = "black";
    //         });
    //     });
        
    // Ejercicio 8
    // Crea una función que cambie el tamaño del texto de todos los párrafos 
    // dentro del `contenedorPrincipal` cuando se haga clic en el elemento `img`.
    // El nuevo tamaño debe ser el doble del tamaño actual.

    // document
    //     .querySelector("#contenedorPrincipal img")
    //     .addEventListener("click", () => {
    //         // alert();
    //         document.querySelectorAll("#contenedorPrincipal p")
    //             .forEach((parrafo)=>{
    //                 const currentSize = window.getComputedStyle(parrafo).fontSize;
    //                 parrafo.style.fontSize = `${parseInt(currentSize)*2}px`;
    //             });
    //     });
});