let municipio = document.getElementById("municipio");
let parcela = document.getElementById("parcela");
let nombre = document.getElementById("nombre");
let apellidos = document.getElementById("apellidos");

let cadena = prompt("Dime la cadena");
let separa1 = cadena.split(":");
let restoCadena = separa1[1];
let separa2 = restoCadena.split("@");
let restoCadena2 = separa2[1];
let separa3 = restoCadena2.split("|");

let parcel = separa2[0];
let parcelaLetras = "";
let parcelaNumeros = "";
for (const i in parcel) {
    if(isNaN(parcel[i])){
        parcelaLetras += parcel[i];
    }else{
        parcelaNumeros += parcel[i];
    }
}


let municip = separa1[0];
municipio = document.write("<p>El municipio es : "+municip+" \n "+"</p>");
parcela = document.write("<p>El codigo de la parcela es : "+parcelaLetras+" y los números son : "+parcelaNumeros+" \n "+"</p>")
let nom = separa3[0];
nombre = document.write("<p>El nombre es: "+nom+" \n "+"</p>")
let apell = separa3[1]+" "+separa3[2];
apellidos = document.write("<p>Los apellidos son : "+apell+"</p>");