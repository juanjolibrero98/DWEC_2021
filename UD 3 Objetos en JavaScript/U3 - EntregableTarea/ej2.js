let cadena = prompt("Dime la cadena con los datos, separados por :"+"\n"+"Un ejemplo decadena sería --> 'nombre:apellidos:telefono:email:codigopostal'");


function mostrarDatos(){
    let puntos = ":";
    let cadenaDividida = cadena.split(puntos);
    let arroba = "@";
    let separarServidor = cadenaDividida[3].split(arroba);

    alert("El código postal que has introducido es: "+cadenaDividida[4]+"\n"+
            "Los apellidos son: "+cadenaDividida[1]+"\n"+
            "EL email es: "+cadenaDividida[3]+"\n"+
            "La parte del servidor el email es: "+separarServidor[1]);
}
mostrarDatos();