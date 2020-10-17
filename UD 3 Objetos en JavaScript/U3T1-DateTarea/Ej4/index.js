/*
El método toLocaleTimeString() devuelve una cadena con una representación de la parte del tiempo de esta fecha sensible al idioma. 
Los nuevos argumentos locales y options le permiten a la aplicación especificar el idioma cuyas convenciones de formato deben usarse y 
personalizan el comportamiento de esta función. En implementaciones antiguas que ignoran los argumentos locales y 
options la localidad usada y la forma de la cadena devuelta son completamente dependientes de la implementación.
*/
alert("Te mostraré la fecha actual en 2 formatos diferntes segun tu selección");
var eleccion = prompt("Que formato te gustaría ver, escriba 1,2 o 3 : 1--> 14:35:07 (hora detallada con minutos y segundos)"+"\n"+" o 2--> 02:35 PM o 02:35:07 AM (hora con minutos y AM o PM según sea antes o después del medio día")*1;

let fecha = new Date();

switch(eleccion){
    case 1 :
        //toLocaleTimeString('it-IT');
        //expected output: 01:15:30
        alert(fecha.toLocaleTimeString("it-IT"));         
        break;
    case 2 : 
    //toLocaleTimeString('en-US');
    //expected output: 1:15:30 AM
        alert(fecha.toLocaleTimeString("en-US"));
        break;
    default :
        alert("Error, introduzca 1 o 2 ");            
}
