window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click", validar, false);
}

function validarNombre(){
    //nombre de disco
    let name = document.getElementById("name");
    limpiarError(name);
    if(name.value.length <20){
        alert("Tiene que tener el nombre 20 caracteres mínimo");
        error(name);
        return false;
    }
    return true;
}
function validarGrupo(){
    //grupo de musica
    let grupo = document.getElementById("grupo");
    limpiarError(grupo);
    if(grupo.value.length <20){
        alert("Tiene que tener el nombre del grupo 20 caracteres mínimo");
        error(grupo);
        return false;
    }
    return true;
}
function validarAnho(){
    //año publicacion
    let anho = document.getElementById("anho");
    if( (!isNaN(anho.value)) && anho.value.length == 4 ){
        return true;
    }
    alert("Tiene que tener el año 4 números");
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
    if( (!isNaN(estanteria.value)) || estanteria.value === "" ){
        return true;
    }
    alert("Tiene que tener un número o estar vacío");
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
  
  function limpiarError(elemento) {
    elemento.className = "";
}