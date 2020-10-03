//Juan José Librero Cansino
//U2T5 - Ejercicios varios


//Ejercicio6
var diaSemana = prompt("Dime un día de la semana");
switch(diaSemana.toLowerCase()){
    case diaSemana = "lunes":
        alert("Mañana será martes");
        break;
    case diaSemana="martes":
        alert("Mañana será miercoles");
        break;
    case diaSemana="miercoles":
        alert("Mañana será jueves");
        break;
    case diaSemana="jueves":
        alert("Mañana será viernes");
        break;
    case diaSemana="viernes":
        alert("Mañana será sábado");
        break;
    case diaSemana="sabado":
        alert("Mañana será domingo");
        break;
    case diaSemana="domingo":
        alert("Mañana será lunes");
        break;
    default:
        alert('Has introducido un valor no valido');
}

