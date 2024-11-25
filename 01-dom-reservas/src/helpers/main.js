document.addEventListener("DOMContentLoaded", ()=>{
    const app = document.getElementById("app");

    // crear un elemento h1
    const h1 = document.createElement("h1");
    h1.textContent = "hello World";
    app.appendChild(h1);

    // crear un div
    const divCard = document.createElement("div");
    divCard.id = "card";
    divCard.classList.add("principal card");

    // crear un parrafo
    const p = document.createElement("p");
    p.textContent = "hola soy un parrafo";
    divCard.appendChild(p);

    const mensajeBtn = document.createElement("button");
    mensajeBtn.textContent = "Mostrar mensaje";
    divCard.appendChild(mensajeBtn);

    app.appendChild(divCard);
})