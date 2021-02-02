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
        if (xhr.readyState === 4 && xhr.status === 200){
            contenido(xhr);
        }
    }
    xhr.open("GET","series.xml",true);
    xhr.send();
}

function contenido(xml){
    let docXML = xml.responseXML;
    let serie = docXML.getElementsByTagName("SERIE");//aqui ahora tengo un array con todas las series
    let tabla = "<tr><td>Titulo</td><td>Cadena</td><td>Director</td><td>Año</td><td>Terminada</td></tr>";
    for (let i = 0; i < serie.length; i++) {
       tabla += "<tr><td class='titulo'>";
       tabla += serie[i].getElementsByTagName("TITULO")[0].textContent;
       tabla += "</td><td class='director'>";
       tabla += serie[i].getElementsByTagName("CADENA")[0].textContent;
       tabla += "</td><td>";
       tabla += serie[i].getElementsByTagName("DIRECTOR")[0].textContent;
       if(serie[i].getElementsByTagName("ANHO")[0].textContent < 2000){
        tabla += "</td><td class='rojo'>";
       }else if(serie[i].getElementsByTagName("ANHO")[0].textContent >= 2001 && serie[i].getElementsByTagName("ANHO")[0].textContent <= 2010 ){
        tabla += "</td><td class='amarillo'>";
       }else{
        tabla += "</td><td class='verde'>";
       }
       tabla += serie[i].getElementsByTagName("ANHO")[0].textContent;
       tabla += "</td><td>"
       if(serie[i].getElementsByTagName("TERMINADA")[0].textContent == "SI"){
        tabla += "<img style='width:200px; height:150px' src='homerSI.gif' alt='Homer SI'>";
       }else{
        tabla += "<img style='width:200px; height:150px' src='homerNO.gif' alt='Homer SI'>";
       }
       tabla += "</td></tr>";
    }
    document.getElementById('tabla').innerHTML = tabla;
}
