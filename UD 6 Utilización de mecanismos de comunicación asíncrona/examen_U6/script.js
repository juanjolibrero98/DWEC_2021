document.getElementById("vacunaXHR").addEventListener("click",mostrarTablaXHR,false);
document.getElementById("vacunaFecth").addEventListener("click",mostrarTablaFecth,false);


function mostrarTablaFecth(){
    fetch("latest.json")
    .then((response) => response.json())
    .then((data) => insertarFecth(data))
    .catch((err) => console.log(err));
}
function insertarFecth(data){
    console.log(data);
    let array = [];
    for (const i in data) {
        if(data[i].ccaa != "Totales"){
            array.push(data[i]);
        }
    }
    console.log("Ahora viene el array");
    console.log(array);
    fetch('insertar_comunidades.php',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(array)
    })
    .then(function(response) {
        return response.json();
    })
    .then((data) => crearTablaFect(data))
    .catch(function (error) {
        console.log('Request failed', error);
    }); 
}
function crearTablaFect(array){
    insertarComunidadesFecth(array);
    let tabla = "<tr class='table' ><td>Comunidad</td><td>D.Entregas</td><td>D.Admin</td><td>D.Completa</td><td>% Entregas</td><td>% Pobl. Admin.</td><td>% Pobl. Completa</td></tr>";
    for (const i in array) {
        tabla += "<tr><td>";
        tabla += array[i].ccaa;
        tabla += "</td><td>";
        tabla += array[i].dosisEntregadas;
        tabla += "</td><td>";
        tabla += array[i].dosisAdministradas;
        tabla += "</td><td>";
        tabla += array[i].dosisAdministradas;
        tabla += "</td><td>";
        tabla += array[i].porcentajeEntregadas;
        tabla += "</td><td>";
        tabla += array[i].porcentajePoblacionAdministradas;
        tabla += "</td><td>";
        tabla += array[i].porcentajePoblacionCompletas;
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("peticion").innerHTML = "DATOS CARGADOS DE LA WEB";
}


let xhr;
function mostrarTablaXHR(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState === 4 && xhr.status === 200){
            insertarXHR(xhr);
        }
    }
    xhr.open('GET','latest.json',true);
    xhr.send();
}

let xhr2;
function insertarXHR(xhr){
    let json = JSON.parse(xhr.responseText);
    console.log(json);
    let array1 = [];
    for (const i in json) {
        if(json[i].ccaa != "Totales"){
            array1.push(json[i]);
        }
    }
    console.log("Ahora viene el array1");
    console.log(array1);
    let arrayJson = JSON.stringify(array1);
    xhr2 = new XMLHttpRequest();
    xhr2.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200){
            insertarComunidades(xhr2);
            crearTablaXHR(xhr2);
        }
    }
    xhr2.open('POST','insertar_comunidades.php',true);
    xhr2.setRequestHeader('Content-Type','application/json');
    xhr2.send(arrayJson);
}
function crearTablaXHR(xhr2){
    let array1 = JSON.parse(xhr2.responseText);
    let tabla = "<tr class='table' ><td>Comunidad</td><td>D.Entregas</td><td>D.Admin</td><td>D.Completa</td><td>% Entregas</td><td>% Pobl. Admin.</td><td>% Pobl. Completa</td></tr>";
    for (const i in array1) {
        tabla += "<tr><td>";
        tabla += array1[i].ccaa;
        tabla += "</td><td>";
        tabla += array1[i].dosisEntregadas;
        tabla += "</td><td>";
        tabla += array1[i].dosisAdministradas;
        tabla += "</td><td>";
        tabla += array1[i].dosisAdministradas;
        tabla += "</td><td>";
        tabla += array1[i].porcentajeEntregadas;
        tabla += "</td><td>";
        tabla += array1[i].porcentajePoblacionAdministradas;
        tabla += "</td><td>";
        tabla += array1[i].porcentajePoblacionCompletas;
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML = tabla;
    document.getElementById("peticion").innerHTML = "DATOS CARGADOS DE LA WEB";
}

function insertarComunidades(xhr2){
    let array2 = JSON.parse(xhr2.responseText);
    let opc = "";
    for (const i in array2) {
        //<option value="com">com</option>
        opc += "<option value='"+array2[i].ccaa+"'>"+array2[i].ccaa+"</option><br>";
    }
    document.getElementById("comunidades").innerHTML = opc;
}

function insertarComunidadesFecth(array2){
    let opc = "";
    for (const i in array2) {
        //<option value="com">com</option>
        opc += "<option value='"+array2[i].ccaa+"'>"+array2[i].ccaa+"</option><br>";
    }
    document.getElementById("comunidades").innerHTML = opc;
}

document.getElementById("modificar").addEventListener("click",actualizarComunidad,false);
function actualizarComunidad(){
    // console.log("HOLA");
    // let comunidad = document.getElementById("comunidades");
    // let dEntregadas = document.getElementById("dEntregadas");
    // let dAdmin = document.getElementById("dAdmin");
    // let dCompleta = document.getElementById("dCompleta");
    // let pEntregadas = document.getElementById("pEntregadas");
    // let pAdmin = document.getElementById("pAdmin");
    // let pCompleta = document.getElementById("pCompleta");
    // let objeto = {
    //     ccaa: document.getElementById("comunidades"),
    //     dosisEntregadas: document.getElementById("dEntregadas"),
    //     dosisAdministradas: document.getElementById("dAdmin"),
    //     dosisPautaCompletada: document.getElementById("dCompleta"),
    //     porcentajeEntregadas: document.getElementById("pEntregadas"),
    //     porcentajePoblacionAdministradas: document.getElementById("pAdmin"),
    //     porcentajePoblacionCompletas: document.getElementById("pCompleta")
    // }
        // console.log(document.getElementById("comunidades").value);
        // console.log(document.getElementById("dEntregadas").value);
        // console.log(document.getElementById("dAdmin").value);
        // console.log(document.getElementById("dCompleta").value);
        // console.log(document.getElementById("pEntregadas").value);
        // console.log(document.getElementById("pAdmin").value);
        // console.log(document.getElementById("pCompleta").value);
    //actualizar_comunidad.php
    fetch('actualizar_comunidad.php',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(objetoJS())
    })
    .then(function(response) {
        return response.json();
    })
    .then((data) => console.log(data))
    .catch(function (error) {
        console.log('Request failed', error);
    });

}
function objetoJS(){
    let objeto = {
        ccaa: document.getElementById("comunidades").value,
        dosisEntregadas: document.getElementById("dEntregadas").value,
        dosisAdministradas: document.getElementById("dAdmin").value,
        dosisPautaCompletada: document.getElementById("dCompleta").value,
        porcentajeEntregadas: document.getElementById("pEntregadas").value,
        porcentajePoblacionAdministradas: document.getElementById("pAdmin").value,
        porcentajePoblacionCompletas: document.getElementById("pCompleta").value
    }
    console.log("Prueba devolver json");
    console.log(JSON.stringify(objeto));
    document.getElementById("peticion").innerHTML = "COMUNIDAD ACTUALIZADA";
    return objeto;
}
