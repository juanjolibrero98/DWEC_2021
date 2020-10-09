// Retorna un número aleatorio entre min (incluido) y max (excluido)
var min=1;
var max=101;
function getRandomNumber(min, max) {
    return Math.random() * (max - min) + min;
}

//Funcion para troncar el numero aleatorio, ya que se genera como float, lo trunco para convertirlo en entero, creo que tambien sirve con parseint?
function getTrunc(numAle){
    return Math.trunc(numAle);
}
//Variable que guarda el num Aleatorio Float
var numRandom = getRandomNumber(min,max);

//Variable que guarda num Aleatorio Truncado
var numRandomTrucn = getTrunc(numRandom);

//Prueba para saber cual es el num aleatorio
alert("El número que la pag a elegido es el: "+ numRandomTrucn);

//Defino 2 variables, para contar intentos
//numIntentos es para contar todos los intentos introducidos por el usuario
//numSiReusa es para registrar si el usuario, a cancelado alguna pestaña, para luego mostrar o no el recuento de intentos
var numIntentos = 0;
var numSiReusa = 0;

//Juego encontrar num aleatorio bajo las premisas
do{
    //Luego preguntará al usuario por el número mediante un prompt.
    var numUsuario = prompt("Intenta averiguar el número elegido del 1 al 100");

    //Si el usuario no le da a cancelar,entra en el juego
    if (numUsuario != null) {
        numIntentos++;
        //Si el número escrito por el usuario es correcto, se indica que se acertó y finalizaremos el juego.
        if(numUsuario == numRandomTrucn){
        alert("Acertaste!!!! El número era: "+numRandomTrucn);
        break;
        }
        //Si el usuario escribe algo que no es un número se indica el error y se vuelve a pedir el número.
        if( isNaN(numUsuario) || numUsuario === "" /*Number.isNaN(numRandomTrucn) == true  Number.isInteger(numRandomTrucn) !(typeof numRandomTrucn)*/){
            alert("Ha introducido algo erroneo");
        }
        //Si no, le dice si el número es menor o mayor y vuelve a preguntar cuál es.
        if(numUsuario > numRandomTrucn){
            alert("Te has pasado, el número aleatorio es menor");
        }
        if(numUsuario < numRandomTrucn){
            alert("Te has quedado corto, el número aleatorio es mayor");
        }
        
    } else {
        //Si se cancela cualquier cuadro, el juego termina indicando que se canceló el juego.
        alert("Ha reusado contestar, se cancela el juego");
        numSiReusa++;
        break;
    }    
}while(numUsuario != numRandomTrucn);//mientras que sea distinto los num, repetir

//Al final, si se ha finalizado correctamente el juego se indica el número de intentos.
//Es decir, si no ha entrado en el else, numSiReusa seguirá en 0, si a entrado sumará +1, por lo que no muestra el recuento
if(numSiReusa<1){
    alert("Has tardado "+numIntentos+" intentos en acertar en número");
}
