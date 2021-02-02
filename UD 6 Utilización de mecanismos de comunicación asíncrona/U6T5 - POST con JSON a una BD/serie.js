window.onload = iniciar;
function iniciar(){
    document.getElementById("enviar").addEventListener("click",function(){
        peticionPost();
    },false);
}

let xhr;

function peticionPost(){
    // console.log(document.getElementById("terminada").checked);
    // console.log(document.getElementById("titulo").value);
    xhr = new XMLHttpRequest();
    let objetoEnviado = {
        titulo : document.getElementById("titulo").value,
        director : document.getElementById("director").value,
        cadena : document.getElementById("cadena").value,
        anyo : parseInt(document.getElementById("anho").value),
        terminada : document.getElementById("terminada").checked
    };
    let cadenaJson = JSON.stringify(objetoEnviado);
    console.log(cadenaJson);
    xhr.onreadystatechange = function(){
        if(xhr.readyState === 4 && xhr.status === 200){
            mostrarResultado(xhr);
        }
    }
    xhr.open('POST','create_serie.php',true);
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send('objeto='+cadenaJson);
}

function mostrarResultado(xhr) {
    let objeto = JSON.parse(xhr.responseText);
    let parrafo;
    if(objeto == "ok"){
        parrafo = "<p style='color:green;'>"+objeto+"</p>";
    }else{
        parrafo = "<p style='color:red;'>"+objeto+"</p>";
    }
    document.getElementById("resultado").innerHTML = parrafo;
}