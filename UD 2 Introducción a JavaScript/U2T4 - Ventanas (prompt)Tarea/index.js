//Ejercicio1
var respuesta = prompt("¿Está seguro de que quiere hacer esto?");
if (respuesta != null) {
  console.log("Ha respondido " + respuesta);
  alert("Ha respondido  " + respuesta);
} else {
  console.log("Ha reusado contestar");
  alert("Ha reusado contestar");
}

//Ejercicio2
var frase = "Ejemplos de densidades:";
var hielo = 0.92;
var aluminio = 2.7;
var oro = 19.3;
var aceite = 0.92;
alert(
  frase +
    "\n" +
    "Hielo=" +
    hielo +
    ";Aluminio=" +
    aluminio +
    ";Oro=" +
    oro +
    ";Aceite de Oliva=" +
    aceite
);

var respuesta = prompt("¿Qué densidad tiene el material elegido (g/cm3)?");
if (respuesta < 1) {
  alert("Flota en el agua");
} else {
  alert("Se hunde en el agua");
}

//Ejercicio3
var radio =
  prompt("Introduce el radio de la circunferencia de la base en cm") * 1;
var altura =
  prompt("Introduce la altura de la circunferencia de la base en cm") * 1;
alert("El volumen es: " + Math.PI * radio * radio * altura);

//Ejercicio4
var nombre = prompt("¿Cómo te llamas?");
var edad = prompt("¿Cuántos años tienes?");
if (edad > 17) {
  alert("Hola " + nombre + "\n" + "Eres mayor de edad y has vivido "+365*edad);
} else {
  alert("Hola " + nombre + "\n" + "Eres menor de edad y has vivido "+365*edad);
}
