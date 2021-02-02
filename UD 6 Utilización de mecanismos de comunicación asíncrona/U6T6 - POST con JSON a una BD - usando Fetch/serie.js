window.onload = iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",function(){
        peticionPost();
    },false);
}

function peticionPost(){
   
    fetch('create_serie.php',{
        method : 'POST',
        headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: 'objeto='+ JSON.stringify(obtenerObjeto())
    })
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        if(result == "ok"){
            document.getElementById("resultado").innerHTML = "<p style='color:green;'>"+result+"</p>";
            mostrarSeries();
        }else{
            document.getElementById("resultado").innerHTML = "<p style='color:red;'>"+result+"</p>";
        }
    })
    .catch(function (error) {
        console.log('Request failed', error);
    }); 
}

function obtenerObjeto(){
    let objetoEnviado = {
        titulo : document.getElementById("titulo").value,
        director : document.getElementById("director").value,
        cadena : document.getElementById("cadena").value,
        anyo : parseInt(document.getElementById("anho").value),
        terminada : document.getElementById("terminada").checked
    };
    console.log(JSON.stringify(objetoEnviado));
    return objetoEnviado;
}

function mostrarSeries(){
    fetch('listar_series.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        console.log(result);
        let tabla = "<tr><td>Título</td><td>Cadena</td><td>Director</td><td>Año</td><td>Terminada</td></tr>";
    for (const i in result) {
        tabla += "<tr><td class='titulo'>";
        tabla += result[i].titulo;
        tabla += "</td><td>";
        tabla += result[i].cadena;
        tabla += "</td><td class='director'>";
        tabla += result[i].director;
        if(result[i].anyo < 2000){
            tabla += "</td><td class='rojo'>";
        }else if(result[i].anyo >= 2001 && result[i].anyo <= 2010){
            tabla += "</td><td class='amarillo'>";
        }else{
            tabla += "</td><td class='verde'>";
        }
        tabla += result[i].anyo;
        tabla += "</td><td>";
        if(result[i].terminada == "1"){
            tabla += "<img style='width:200px; height:150px' src='homerSI.gif' alt='Homer SI'>";
        }else{
            tabla += "<img style='width:200px; height:150px' src='homerNO.gif' alt='Homer NO'>";
        }
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML=tabla;
    })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}

