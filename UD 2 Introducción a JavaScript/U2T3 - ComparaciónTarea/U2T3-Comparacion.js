//U2T3-Comparación
//Juan José Librero Cansino
/*
Crea un programa en el que muestres el resultado de varias operaciones mediante alert, mostrando el  texto exacto de la operación realizada y su resultado.
Ej:
var operacion1 = 10 == 10;
alert (“La operación 10 == 10 es” + operacion1)
Las operaciones a realizar son:
10 == 10
10 === 10
10 === 10.0
“Laura” == “laura”
“Laura” > “laura”
“Laura” < “laura”
“123” == 123
“123” === 123
parseInt(“123”) === 123
Comenta el código indicando el nombre del ejercicio y tu nombre en la parte superior, y las conclusiones  que sacas al realizar cada una de las operaciones.
*/
var operacion1 = 10 == 10;
var operacion2 = 10 === 10;
var operacion3 = 10 === 10.0;
var operacion4 = "Laura" == "laura";
var operacion5 = "Laura" > "laura";
var operacion6 = "Laura" < "laura";
var operacion7 = "123" == 123;
var operacion8 = "123" === 123;
var operacion9 = parseInt("123") === 123;

//La Operacion1, igual un numero con otro, como son los dos 10, es correcto que sea true
alert("La operación 10 == 10 es " + operacion1);

//La Operacion2 compara el numero y a la vez el tipo de dato, como son el mismo numero y el mismo tipo de dato es correcto que devuelva true
alert("La operación 10 === 10 es " + operacion2);

//La Operacion3 compara un int con un float 10.0, pero al ser .0 se convierte en un ins, por eso da true
alert("La operación 10 === 10.0 es " + operacion3);

//La Operacion4 compara que sean la misma cadena, como la L es diferente en las dos da false
alert('La operación "Laura" == "laura" es ' + operacion4);

//La Operacion5 dice que es false porque cada caracter tiene un valor, empieza por min
alert('La operación "Laura" > "laura" es ' + operacion5);

//La Operacion6 dice la misma explicacion que la operacion5, en este caso es true
alert('La operación "Laura" < "laura" es ' + operacion6);

//La Operacion7 compara solo por valor y no por tipo de dato, por lo que como son los 2 iguales, da true
alert('La operación "123" == 123 es ' + operacion7);

//La Operacion8 da false porque compara tambien por el tipo de dato, como no son el mismo pues da false
alert('La operación "123" === 123 es ' + operacion8);

//La Operacion9 convierte la cadena "123" a Int, por lo que se convierte en el mismo tipo de dato que el otro 123, y da true
alert('La operación parseInt("123") === 123 es ' + operacion9);
