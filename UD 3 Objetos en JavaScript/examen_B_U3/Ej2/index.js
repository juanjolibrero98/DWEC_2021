let cadena = prompt("Dime la cadena");
cadena.trim();
cadenaSinEspacion = "";
for (let i = 0; i < cadena.length; i++) {
    if(cadena[i] != " "){
        cadenaSinEspacion += cadena[i];
    }
}

let cadenaArray = "";
for (let i = 0; i < cadenaSinEspacion.length-1; i++) {
    let numAle = Math.round(Math.random());    
    if(numAle == 0){
        cadenaArray += cadenaSinEspacion[i].toUpperCase()+"-";
    }else{
        cadenaArray += cadenaSinEspacion[i].toLowerCase()+"-";
    }

    if(i == cadenaSinEspacion.length-1){
        if(numAle == 0){
            cadenaArray += cadenaSinEspacion[i].toUpperCase()+"-";
        }else{
            cadenaArray += cadenaSinEspacion[i].toLowerCase()+"-";
        }
    }
    
}
cadenaArray += cadenaSinEspacion[cadenaSinEspacion.length-1];


let resultado = document.getElementById("resultado");
resultado = document.write('<p>"'+cadenaArray+'"</p>');
