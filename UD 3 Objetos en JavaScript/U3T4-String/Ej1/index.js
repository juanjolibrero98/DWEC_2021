let nombre = prompt("Dime tu nombre");
let apellidos = prompt("Dime tus apellidos");
let guardarDatos ="";
let nomCompletoSinEspacios = guardarDatos.concat(nombre,apellidos);
nomCompletoSinEspacios.trim();
alert("El tamaño de la suma de la longitud del nombre: "+nombre+" más los apellidos: "+apellidos+" es : "+nomCompletoSinEspacios.length);
alert("La cadena del nombre + apellidos en minúsculas es: "+nomCompletoSinEspacios.toLowerCase());
alert("La cadena del nombre + apellidos en mayúsculas es: "+nomCompletoSinEspacios.toUpperCase());
alert("Nombre en 3 lineas es: "+"\n"+nombre+"\n"+apellidos.split(" ")[0]+"\n"+apellidos.split(" ")[1]);
alert("La propuesta de nombre para ti es: "+(nombre.charAt(0)+apellidos.split(" ")[0]+apellidos.split(" ")[1].charAt(0)).toLowerCase());
alert("La propuesta del nombre de usuario es: "+(nombre.slice(0,3)+apellidos.split(" ")[0].slice(0,3)+apellidos.split(" ")[1].slice(0,3)).toLowerCase());