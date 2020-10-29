var peso;
var estatura;
function lmcFormula(){
     peso = document.getElementById("peso").value;
     estatura = document.getElementById("estatura").value;
    let esta = estatura/100;
    let resultado = "Su índice de masa corporal es de: "+(peso)/(Math.pow(esta,2));
    return alert(resultado);
}

var edad;
function fcmFormula(){
    edad = document.getElementById("edad").value;
    let resultado = "Su frecuencia cardíaca máxima es de "+(208.75-(0.73*edad));
    return alert(resultado);

}