window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre(){
    //nombre de disco
    let name = document.getElementById("name");
    //label disco
    let name2 = document.getElementById("name2");
    limpiarError(name);
    limpiarError(name2);
    if(name.value.length <20){
        alert("Tiene que tener el nombre 20 caracteres mínimo");
        error(name);
        errorLabel(name2);
        return false;
    }
    return true;
}
function validarGrupo(){
    //grupo de musica
    let grupo = document.getElementById("grupo");
    //label musica
    let grupo2 = document.getElementById("grupo2");
    limpiarError(grupo);
    limpiarError(grupo2);
    if(grupo.value.length <20){
        alert("Tiene que tener el nombre del grupo 20 caracteres mínimo");
        error(grupo);
        errorLabel(grupo2);
        return false;
    }
    return true;
}
function validarAnho(){
    //año publicacion
    let anho = document.getElementById("anho");
    //label año 
    let anho2 = document.getElementById("anho2");
    limpiarError(anho);
    limpiarError(anho2);
    if( (!isNaN(anho.value)) && anho.value.length == 4 ){
        return true;
    }
    alert("Tiene que tener el año 4 números");
    error(anho);
    errorLabel(anho2);
    return false;
}
/*
function validarTMusica(){
    //tipo música
    let tMusica = document.getElementById('tipoMusica').value;
}
*/
function validarLocalizacion(){
    //localizacion
    let estanteria = document.getElementById("nEstanteria");
    //label localizacion
    let estanteria2 = document.getElementById("nEstanteria2");
    limpiarError(estanteria);
    limpiarError(estanteria2);
    if( (!isNaN(estanteria.value)) || estanteria.value === "" ){
        return true;
    }
    alert("Tiene que tener un número o estar vacío");
    error(estanteria);
    errorLabel(estanteria2);
    return false;
}
/*
function validarPrestado(){
    //prestado
    let presta = document.getElementById('presta').value;
}
*/

function validar(e){
    if (
        validarNombre() &&
        validarGrupo() &&
        validarAnho() &&
        validarLocalizacion() &&
        confirm("Pulsa aceptar si deseas enviar el formulario")
      ) {
        return true;
      } else {
        e.preventDefault();
        return false;
      }
}

function error(elemento) {
    elemento.className = "error";
    elemento.focus();
}
function errorLabel(elemento) {
    elemento.className = "errorLabel";
    elemento.focus();
}
  
function limpiarError(elemento) {
    elemento.className = "";
}