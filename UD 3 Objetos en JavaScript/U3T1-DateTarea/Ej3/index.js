/*
El método toLocaleDateString() devuelve una cadena con una representación de la fecha sensible al lenguaje. Los nuevos argumentos locales y 
options permiten a las aplicaciones especificar el lenguaje cuyas convenciones de formato deben usarse y 
permitir personalizar el comportamiento de la función. En implementaciones anteriores, las cuales ignoran los argumentos locales y 
options, el configuración regional usada y el formato de cadena devuelto dependen completamente de la implementación.
*/
alert("Te mostraré la fecha actual en 3 formatos diferntes segun tu selección");
var eleccion = prompt("Que formato te gustaría ver, escriba 1,2 o 3 : 1--> 15/10/2020 , 2--> Jueves, 15 de octubre de 2020. o 3--> Thursday, October 15, 2020.")*1;
let opciones = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric'
};
let fecha = new Date();
switch(eleccion){
    case 1 :
        // → "12/11/2012" si se ejecuta en una configuración regional en-US con zona horaria America/Los_Angeles
        alert(fecha.toLocaleDateString());         
        break;
    case 2 : 
        alert(fecha.toLocaleDateString("es-ES",opciones));
        break;
    case 3 :
        // El inglés de USA hace uso de orden mes-día-año
        alert(fecha.toLocaleDateString("en-US",opciones));
        break;
    default :
        alert("Introduzca 1 , 2 o 3");            
}


