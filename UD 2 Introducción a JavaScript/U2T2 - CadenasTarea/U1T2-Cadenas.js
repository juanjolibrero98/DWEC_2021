//U1T2-Cadenas
//Juan José Librero Cansino
/*
•Crea un programa en el que crees 4 variables de tipo cadena con los  siguientes valores: “Hola”, “7”, “13”, y “Adios”.
•Muestra en un alert una frase que incluya comillas simples.
•Muestra en un alert que ocupe una línea las variables 1ª y 4ª separadas por  un salto de línea.
•Muestra en un alert la suma de las variables 2ª y 3ª.
•Muestra en un alert la suma de todas las variables.
•Comenta el código indicando el nombre del ejercicio y tu nombre en la parte  superior, y los comentarios adicionales que estimes necesarios.
*/

var cad1, cad2, cad3, cad4;
cad1 = "Hola";
cad2 = "7";
cad3 = "13";
cad4 = "Adios";
// comillas simples \'
alert("' Hola Mundo '");
alert(cad1 + "\n" + cad4);
/*no se suman ya que no son int, sino cadenas, por lo que
formarian un nuevo número, el 713*/
alert(cad2 + cad3);
alert(cad1 + cad2 + cad3 + cad4);
