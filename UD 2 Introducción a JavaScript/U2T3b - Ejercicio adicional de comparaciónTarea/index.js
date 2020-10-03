/*
Juan José Librero Cansino
U2T3b - Ejercicio adicional de comparación
*/
var operacion1 = null == undefined;
var operacion2 = "NaN" == NaN;
var operacion3 = 5 == NaN;
var operacion4 = NaN == NaN;
var operacion5 = NaN != NaN;
var operacion6 = false == 0;
var operacion7 = true == 1;
var operacion8 = true == 2;
var operacion9 = undefined == 0;
var operacion10 = null == 0;
var operacion11 = "5" == 5;
//da falso ya que null es nulo y undefined es indefinico, es decir, igual que nulo, entonces está comparando nulo==nulo
alert("null == undefined es : " + operacion1); //true

//da falso porque NaN no es un número y no se puede comparar con el string 'NaN'
alert("'NaN' == NaN es : " + operacion2); //false

//da falso debido a que NaN significa no es un numero
alert("5 == NaN es : " + operacion3); //false

//devuelve falso debido a que NaN es un valor primitivo especial, el cual al compararse con otro valor primitivo igual, es decir otro NaN siempre da que no son iguales
alert("NaN == NaN es : " + operacion4); //false

//al ser lo contrario del de arriba, da lo contrario, true, ya que no son iguales
alert("NaN != NaN es : " + operacion5); //true

// da true porque en javascript false es un booleano que hace la conversión a number y en number false representa un 0
alert("false == 0 es : " + operacion6); //true

//da true porque "true" hace la conversión de booleano a número y en número, true significa 1
alert("true == 1 es : " + operacion7); //true

// da falso porque true en número es solo el 1
alert("true == 2 es : " + operacion8); //false

//da falso porque undefined significa que no representa ningun valor, es decir, representa algo que no ha sido definido, mientras que el 0 representa un valor, falso pero es un valor
alert("undefined == 0 es : " + operacion9); //false

//igual que en el ejemplo de arriba pero aqui null representa algo nulo sin valor
alert("null == 0 es : " + operacion10); //false

//da true porque esta comparando solo lo que contiene y no el tipo que es
alert("'5' == 5 es : " + operacion11); //true
