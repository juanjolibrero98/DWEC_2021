window.onload = iniciar;

function iniciar() {
    document.getElementById("enviar").addEventListener("click",validar, false);
}
/*
function validarFecha() {
    let fecha = document.getElementById("fecha");
    let regexFecha = new RegExp("");
    if(){
        return true;
    }else{
        return false;
    }
}
*/
function validarCocinero() {
    let cocinero = document.getElementById("cocinero").value;
    /*Cocinero: será un nombre en clave formado por 
    dos letras en mayúscula, 
    un  símbolo y cuatro dígitos (ej. WW$1234)*/
   // let regexCocinero = new RegExp("/^([A-Z]{2})(\W{1})(\d{4})$/");
    if(/^([A-Z]{2})(\W{1})(\d{4})$/.test(cocinero)){
        return true;
    }else{
        alert("COCINERO: Tiene que tener 2 Mayusculas, 1 Simbolo y 4 Números");
        return false;
    }
}
function validarDestinatario() {
    let destinatario = document.getElementById("destinatario").value;
    /*Destinatario: estará formado por dos o tres letras mayúsculas 
    correspondientes al estado, un guión bajo, el nombre 
    de la ciudad en minúsculas, dos puntos, y el  código 
    de distrito de 4 digitos (ej. NM_alburquerque:1234). 
    */
   // let regexDestinatario = new RegExp("/^([A-Z]{2,3})[_]([a-z]+)[:](\d{4})$/");
    if(/^([A-Z]{2,3})[_]([a-z]+)[:](\d{4})$/.test(destinatario)){
        return true;
    }else{
        alert("DESTINATARIO: Tiene que tener 2o3Mayusculas, 1 Guión bajo, nombre ciudad en minusculas, : y 4 números");
        return false;
    }
}
function validarGramos() {  
    let gramos = document.getElementById("gramos").value;
    //Gramos: será un número del 100 al 5000.
    ///(5000)|(^[1-4]+[0-9]{3})|(^[1-9]+[0-9]{2})/
    //let regexGramos = new RegExp("/^([1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]||5000)$/");
    if(/^([1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]||5000)$/.test(gramos)){
        return true;
    }else{
        alert("GRAMOS: Tiene que ser un número entre 100 y 5000");
        return false;
    }
}
function validarComposicion() { 
    let composicion = document.getElementById("composicion").value;
    /*Composición: estará formado por una cantidad en 
    gramos seguida de dos  conjuntos de una o dos letras 
    seguidas o no de un número. (ej. 200gC3OH7)*/
    //let regexComposicion = new RegExp("/^(([1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]||5000))(([a-zA-Z]{1,2})(\d{0,1})){2}$/");
    if(/^(([1-9][0-9][0-9]|[1-4][0-9][0-9][0-9]||5000))(([a-zA-Z]{1,2})(\d{0,1})){2}$/.test(composicion)){
        return true;
    }else{
        alert("COMPOSICION: Tiene que ser cantidad en gramos, conjunto de 1o2 letras y/o no de 1 número , esto 2 veces");
        return false;
    }
}
function validarCuentaEEUU() {
    let cuentaEEUU = document.getElementById("cuentaEEUU").value;
    /*•Dos letras: suponemos que el valor de cada letra es 
    del 1 al 26 (no hay ñ ni ll).
    •Dos dígitos: debe corresponderse con la suma de la 
    primera letra y la segunda:  en caso de que sea menor 
    que 10 se pone el 0 delante.
    •Un guión.
    •Doce dígitos de cuenta.
    •Un guión.
    •Dos dígitos de control: el primero deben ser la suma 
    de los 6 primeros  dígitos de la cuenta dividido entre 6 
    y extrayendo solamente su parte entera; y el último 
    exactamente igual, pero con los 6 siguientes.*/
    ///^([a-zA-Z]{2}?)(([1-9]{2})|[0-9][1-9])(-)([0-9]{12})(-)([0-9]{2}))$
    //let regexCuentaEEUU = new RegExp("/^([a-zA-Z]{2})(\d{2})[-](\d{12})[-](\d{2})$/");
    if(/^([a-zA-Z]{2})(\d{2})[-](\d{12})[-](\d{2})$/.test(cuentaEEUU)){
        let separacion = cuentaEEUU.split("-");
        let letras = "abcdefghijklmnopqrstuvwxyz";

        let letra2Num2 = separacion[0];
        //separación de las 2 primeras letras
        let letra1 = "";
        letra1 = letra2Num2.charAt(0);
        let letra2 = "";
        letra2 = letra2Num2.charAt(1);
        letra1.toLowerCase();
        letra2.toLowerCase();
        let posi1 = 0;
        let posi2 = 0;
        for (let i= 0; i< letras.length; i++) {
            if(letras.charAt(i) == letra1) {
                posi1 = i+1;
            }
            if(letras.charAt(i) == letra2) {
                posi2 = i+1;
            }
        }
        let sumaPosi = posi1 + posi2;
        let resultPosi = "";
        
        if(sumaPosi <10){
            resultPosi = "0"+sumaPosi;
        }else{
            resultPosi = sumaPosi;
        }
        
        //separacion de los 2 primeros números
        let num2 = "";
        num2 = letra2Num2.charAt(2)+""+letra2Num2.charAt(3);
        
        //digitos de la cuenta
        let digCuenta = separacion[1];
        let sum6FirstNum = 0;
        sum6FirstNum = (digCuenta.charAt(0)*1+digCuenta.charAt(1)*1+digCuenta.charAt(2)*1+digCuenta.charAt(3)*1+digCuenta.charAt(4)*1+digCuenta.charAt(5)*1)/6;
        let sum6SecondNum = 0;
        sum6SecondNum = (digCuenta.charAt(6)*1+digCuenta.charAt(7)*1+digCuenta.charAt(8)*1+digCuenta.charAt(9)*1+digCuenta.charAt(10)*1+digCuenta.charAt(11)*1)/6;

        //separacion 2 num de control
        let digControl = separacion[2];
        //num control 1
        let numControl1 = 0;
        numControl1 = digControl.charAt(0);
        //num control 2
        let numControl2 = 0;
        numControl2 = digControl.charAt(1);
        let numTrucn1 = "";
        numTrucn1 = Math.trunc(sum6FirstNum);
        let numTrunc2 = "";
        numTrunc2 = Math.trunc(sum6SecondNum);
    if( (resultPosi == num2) && (numTrucn1 == numControl1 && numTrunc2 == numControl2)){
        let solucCuentaEEUU = document.getElementById("solucCuenta").value = letra2Num2+digCuenta+digControl;
       // solucCuentaEEUU.document.write("<p>"+letra2Num2+digCuenta+digControl+"</p>");
        return true;
    }else{
        alert("CUENTAEEUU: error");
        return false;
    }
    }else{
        alert("CUENTAEEUU: error");
        return false;
    }
}
function validar(e){
    //validarFecha() &&
    if(
        validarCocinero() &&
        validarDestinatario() &&
        validarGramos() &&
        validarComposicion() &&
        validarCuentaEEUU() && 
        confirm("Pulsa aceptar si deseas enviar el formulario")
    ){
       return true;
    }else{
        e.preventDefault();
        return false;
    }
}