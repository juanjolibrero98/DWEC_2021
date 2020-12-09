window.onload = iniciar;
document.cookie = "Tirada = 0;";


function iniciar() {
    document.getElementById("enviar").addEventListener("click",validar,false);

}
//habilidades tirada herir y psw obligatorio para regex
function validarAnho() {
    let anho = document.getElementById("anho");
    //let regexAnho = new RegExp(/^$/);
    limpiarError(anho);
    if(!isNaN(anho.value)){//si es un numero entra
        if(anho.value >=700 && anho.value<=8000){
            okey(anho);
            return true;
        }else{
            document.getElementById("errores").innerHTML ="ERROR! El campo Año tiene que ser un número entre 700 y 8000";
            error(anho);
            return false;
        }
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Año tiene que ser un número entre 700 y 8000";
        error(anho);
        return false;
    }
}
function validarHabilidades(){
    let habilidades = document.getElementById("habilidad");
    /*La regex de Habilidades dice: 
    ^ tiene que comenzar por el siguiente caracter,
    (M|WS|BS|S|T|W|A|Ls|Sv) significa que la cadena puede ser una de estas combinaciones
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexHabilidades = new RegExp(/^(M|WS|BS|S|T|W|A|Ls|Sv)$/);
    limpiarError(habilidades);
    if(regexHabilidades.test(habilidades.value)){
        okey(habilidades);
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Habilidades tiene que ser una de estas combinaciones -> M|WS|BS|S|T|W|A|Ls|Sv";
        error(habilidades);
        return false;
    }
}
function validarHerir(){
    let herir = document.getElementById("herir");
    /*La regex de Herir dice: 
    ^ tiene que comenzar por el siguiente caracter,
    (F) tiene que comenzar con la letra F y en mayusculas exactamente
    ((x2)|(>)|(=)|(<)), después de la F tiene que incluir 1 de estas combinaciones,
    (R) después de la combinación tiene que incluir la R en mayusculas exactamente,
    ([0-9]{2}) después de la R tiene que tener 2 números , {2} significa que se repite lo anterior 2 veces, y como lo anterior es 1 número, pues son 2 números del 0 al 9
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexHerir = new RegExp(/^(F)((x2)|(>)|(=)|(<))(R)([0-9]{2})$/);
    limpiarError(herir);
    if(regexHerir.test(herir.value)){
        okey(herir);
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Herir tiene que estar formado por: La letra F, una combinación (x2)|(>)|(=)|(<), la letra R y 2 números";
        error(herir);
        return false;
    }
}
function validarRol(){
    let rol = document.getElementById("rol");
    //let regexRol = new RegExp(/^$/);
    limpiarError(rol);
    if(rol.value != 0){
        okey(rol);
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Rol tiene que seleccionar una opcion entre -> Líder,Combate,Comunicaciones,Demoliciones,Fanático";
        error(rol);
        return false;
    }
}
function validarPsw() {
    let psw = document.getElementById("psw");
    /*La regex de Password dice: 
    ^ tiene que comenzar por el siguiente caracter,
    ([A-Z]{2}) tiene que empezar por 2 letras en mayusculas
    (\W[^:]) después de las 2 letras tiene que incluir 1 caracter no alfanumérico y que no pueda ser :
    ([a-z]{8,}) después del caracter tiene que escribir mínimo 8 letras en minusculas
    ([#]) después de las letras tiene que incluir el caracter # 
    ([0-9]{2}) después del caracter tiene que incluir 2 números 
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexPsw = new RegExp(/^([A-Z]{2})(\W[^:])([a-z]{8,})([#])([0-9]{2})$/);
    limpiarError(psw);
    if(regexPsw.test(psw.value)){
        okey(psw);
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo PSW tiene que estar formado por: 2 letras mayusculas, 1 caracter no alfanumérico que no sea :, 1 palabra de longitud mínima 8, el caracter # y 2 números";
        error(psw);
        return false;
    }
}
 
function validar(e){
    let numAleCookies = Math.round(Math.random() * (7 - 1) + 1);

    document.cookie = "Tirada = "+numAleCookies+";";
    document.getElementById("ultima_Tirada").innerHTML = document.cookie;
    if(
        validarAnho() &&
        validarHabilidades() &&
        validarHerir() &&
        validarRol() &&
        validarPsw() &&
        confirm("¿Desea enviar el formulario?")
    ){
        return true;
    }else{
        e.preventDefault();
        alert("Ha habido un error en uno de los campos");
        return false;
    }
}

function error(element){
    element.className = "error";
    element.focus();
}
function limpiarError(element){
    element.className = "";
    //para limpiar errores;
    document.getElementById("errores").innerHTML ="";
}
function okey(element){
    element.className = "okey";
}