let eleccion = prompt("Seleccione cual quiere ver:"+"\n"+
                      "1-Mostrar número de países"+"\n"+
                      "2-Mostrar listado de países (y le preguntará si quiere mostrarlos en el orden que se encuentran en el array, del revés u ordenados alfabéticamente)"+"\n"+
                      "3-Mostrar un intervalo de países (y le pedirá que introduzca el intervalo en formato inicio-fin; luego deberás extraer el valor inicio y fin)"+"\n"+
                      "4-Añadir un país (y le preguntará si quiere añadir al principio o al final)"+"\n"+
                      "5-Borrar un país (y le preguntará si quiere borrar al principio o al final)"+"\n"+
                      "6-Consultar un país (y le preguntará si quiere consultar por posición o por nombre)")*1;

var array = ['España' , 'Alemania' , 'Francia' , 'Italia' , 'Grecia' , 'Hungría' ,'Croacia' , 'Irlanda'];


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
    //array.splice(0,0,pais); ...O...
    array.unshift(pais);
    return array;
}
function anhadirElemFin(pais){
    array.push(pais);
    return array;
}
function borrarElemPrinc(){
    return array.shift();
}
function borrarElemFin(){
    return array.pop();
}
function verElemPosicion(posi){
   // return array.indexOf(array[posi]);
    return array[posi-1];   
}
function verPosicionElem(elem){
    return array.indexOf(elem)+1;
}
function verElemIntervalo(ini,fin){
    let inicio = ini - 1;
    let finn = fin - 1;
    let cadena = "";
    for(inicio; inicio <= finn; inicio++){
        cadena += array[inicio]+" ";
    }
    return cadena;
}

if(eleccion === 1){
    alert("Mostrar número de países: "+"\n");
    alert(arrayLength());
}else if(eleccion === 2){
    let orden = prompt("Mostrar listado de países, selecciona 1 para orden normal o 2 para orden del reves o 3 para orden alfabético")*1;
    if(orden === 1){
        alert(verTodoArray());
    }else if(orden === 2){
        alert(verArrayInverso());
    }else if(orden === 3){
        alert(verArrayOrdenados());
    }else{
        alert("Número erroneo");
    }
}else if(eleccion === 3){
    let eleccion = prompt("Dime el intervalo en formato inicio-fin");
    let arrayOpcion = eleccion.split("-");
    let inicio = arrayOpcion[0];
    let fin = arrayOpcion[1];
    alert(verElemIntervalo(inicio,fin));
}else if(eleccion === 4){
    let eleccion = prompt("Añadir un país, seleccione 1 para añadir al principio o seleccione 2 para añadirlo al final")*1;
    if(eleccion === 1){
        let pais = prompt("Dime el pais que quieres introducir");
        alert(anhadirElemPrinc(pais));
    }else if(eleccion === 2){
        let pais = prompt("Dime el pais que quieres introducir");
        alert(anhadirElemFin(pais));
    }else{
        alert("Número erroneo");
    }
    
}else if(eleccion === 5){
    let eleccion = prompt("Borrar un país, seleccione 1 para borrar al principio o seleccione 2 para borrarlo al final")*1;
    if(eleccion === 1){
        alert(borrarElemPrinc());
    }else if(eleccion === 2){
        alert(borrarElemFin());
    }else{
        alert("Número erroneo");
    }
}else if(eleccion === 6){
    let eleccion = prompt("Consultar un país, seleccione 1 para consultar por posición o seleccione 2 para consultar por nombre")*1;
    if(eleccion === 1){
        let posicion = prompt("Dime la posición")*1;
        alert(verElemPosicion(posicion));
    }else if(eleccion === 2){
        let elemento = prompt("Dime el nombre del pais");
        alert(verPosicionElem(elemento));
    }else{
        alert("Número erroneo");
    }
}else{
    alert("Número erroneo introducido, de 1 a 11 es correcto");
}