let array = ['España' , 'Alemania' , 'Francia' , 'Italia' , 'Grecia' , 'Hungría' ,'Croacia' , 'Irlanda'];

function arrayLength(){
    return "El array contiene "+array.length+" paises";
}
function verTodoArray(){
    let resultado = "";
    for (const i in array) {
        resultado += array[i]+"\n";
    }
    /*probar luego con return array; */
    return resultado;
}
function verArrayInverso(){
    return array.reverse();
}
function verArrayOrdenados(){
    return array.sort();
}
function anhadirElemPrinc(pais){
    return array.splice(0,0,pais);
}
function anhadirElemFin(pais){
    return array.push(pais);
}
function borrarElemPrinc(){
    return array.shift();
}
function borrarElemFin(){
    return array.pop();
}
function verElemPosicion(posi){
    return array.indexOf(array[posi+1]);
}
function verPosicionElem(elem){
    return array.indexOf(elem);
}
/*
function verElemIntervalo(){

}
*/

let eleccion = prompt("Seleccione cual quiere ver:"+"\n"+
                      "1-Mostrar número de países"+"\n"+
                      "2-Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente)"+"\n"+
                      "3-Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin)"+"\n"+
                      "4-Añadir un país (y le preguntará si quiere añadir al principio o al final)"+"\n"+
                      "5-Borrar un país (y le preguntará si quiere borrar al principio o al final)"+"\n"+
                      "6-Consultar un país (y le preguntará si quiere consultar por posición o por nombre)");

switch(eleccion){
    case 1:
        alert("Mostrar número de países: "+"\n");
        arrayLength();
        break;
    case 2:
        let orden = prompt("Mostrar listado de países, selecciona 1 para orden normal o 2 para orden del reves o 3 para orden alfabético");
        if(orden === 1){
            verTodoArray();
        }else if(orden === 2){
            verArrayInverso();
        }else if(orden === 3){
            verArrayOrdenados();
        }else{
            alert("Número erroneo");
        }
        break;
    /*case 3:

        break;
    */case 4:
        let eleccion = prompt("Añadir un país, seleccione 1 para añadir al principio o seleccione 2 para añadirlo al final");
        if(eleccion === 1){
            let pais = prompt("Dime el pais que quieres introducir");
            anhadirElemPrinc(pais);
        }else if(eleccion === 2){
            let pais = prompt("Dime el pais que quieres introducir");
            anhadirElemFin(pais);
        }else{
            alert("Número erroneo");
        }
        break;
    case 5:
        let eleccion = prompt("Borrar un país, seleccione 1 para borrar al principio o seleccione 2 para borrarlo al final");
        if(eleccion === 1){
            borrarElemPrinc();
        }else if(eleccion === 2){
            borrarElemFin();
        }else{
            alert("Número erroneo");
        }
        break;
    case 6:
        let eleccion = prompt("Consultar un país, seleccione 1 para consultar por posición o seleccione 2 para consultar por nombre");
        if(eleccion === 1){
            let posicion = prompt("Dime la posición"*1);
            verElemPosicion(posicion);
        }else if(eleccion === 2){
            let elemento = prompt("Dime el nombre del pais");
            verPosicionElem(elemento);
        }else{
            alert("Número erroneo");
        }
        break;
    default:
        alert("Número erroneo introducido, de 1 a 11 es correcto");
}