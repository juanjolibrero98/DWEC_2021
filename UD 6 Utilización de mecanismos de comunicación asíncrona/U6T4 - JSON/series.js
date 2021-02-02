window.onload = iniciar;
function iniciar(){
    document.getElementById("series").addEventListener("click", function(){
        mostrarSeries();
    },false);
}

let xhr;

function mostrarSeries(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if(xhr.readyState == 4 && xhr.status == 200){
            insertarTabla(xhr);
        }
    };
    xhr.open("GET", "datosjson.php",true);
    xhr.send();
}

function insertarTabla(xhrJson){
    let array = JSON.parse(xhrJson.responseText);
    let tabla = "<tr><td>Título</td><td>Cadena</td><td>Director</td><td>Año</td><td>Terminada</td></tr>";
    for (const i in array) {
        tabla += "<tr><td class='titulo'>";
        tabla += array[i].TITULO;
        tabla += "</td><td>";
        tabla += array[i].CADENA;
        tabla += "</td><td class='director'>";
        tabla += array[i].DIRECTOR;
        if(array[i].ANYO < 2000){
            tabla += "</td><td class='rojo'>";
        }else if(array[i].ANYO >= 2001 && array[i].ANYO <= 2010){
            tabla += "</td><td class='amarillo'>";
        }else{
            tabla += "</td><td class='verde'>";
        }
        tabla += array[i].ANYO;
        tabla += "</td><td>";
        if(array[i].TERMINADA == "SI"){
            tabla += "<img style='width:200px; height:150px' src='homerSI.gif' alt='Homer SI'>";
        }else{
            tabla += "<img style='width:200px; height:150px' src='homerNO.gif' alt='Homer SI'>";
        }
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML=tabla;
}
