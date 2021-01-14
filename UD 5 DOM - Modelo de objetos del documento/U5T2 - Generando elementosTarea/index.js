/*document.getElementsByTagName("ul") esto lo que se guarda un array con todos los ul del html, para poner uno lo de abajo
o si no cojerlo por id*/
let ul = document.getElementsByTagName("ul")[0];

/*
window.onload = iniciar;
function iniciar() {
    document.getElementById("nuevo").addEventListener("click", nuevo , false);
}
*/
document.getElementById("nuevo").addEventListener("click", nuevo,false);
document.getElementById("borrarPrimero").addEventListener("click", borrarPrimero,false);
document.getElementById("borrarUltimo").addEventListener("click", borrarUltimo,false);

/*
document.getElementById("nuevo").addEventListener('click', (e) =>{
    let valor = prompt("Dime un valor a añadir");
    let nuevoValor = document.createElement("li");
    let valorr = document.createTextNode(valor);
    nuevoValor.appendChild(valorr);
    ul.appendChild(nuevoValor);
});
*/

function nuevo(){
    let valor = prompt("Dime un valor a añadir");
    let nuevoValor = document.createElement("li");
    let valorr = document.createTextNode(valor);
    nuevoValor.appendChild(valorr);
    ul.appendChild(nuevoValor);
}
function borrarPrimero(){
    //ul.removeChild(ul.childNodes[0]);
    ul.removeChild(ul.firstElementChild);
}
function borrarUltimo(){
    //ul.removeChild(ul.lastChild);
    ul.removeChild(ul.lastElementChild);
}