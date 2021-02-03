document.getElementById("mostrarXHR").addEventListener("click",mostrarTablaXHR,false);
document.getElementById("mostrarFetch").addEventListener("click",mostrarTablaFetch,false);
let xhrResponde;
let fetchResponse;
//para usar XMLHttpRequest();
let xhr;
function mostrarTablaXHR(){
    xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function(){
        if (xhr.readyState == 4 &&  xhr.status == 200) {
            mostrarContenido(xhr);
        }
    }
    xhr.open("GET","listar_armas.php",true);
    xhr.send();
}

//para usar Fetch
function mostrarTablaFetch(){
    fetch('listar_armas.php')
    .then(function(response) {
        return response.json();
    })
    .then(function(result) {
        fetchResponse = result;
        console.log("Cadena result");
        console.log(result);
        let tabla = "<tr><td>Nombre</td><td>Descripción</td><td>Imagen</td><td>Bando</td></tr>";
        for (const i in result) {
            if(result[i].bando == 1){
                //aliados
                tabla += "<tr class='aliados'><td>";
            }else{
                tabla += "<tr class='ejes'><td>";
            }
            
            tabla += result[i].nombre;
            tabla += "</td><td>";
            tabla += result[i].descripcion;
            tabla += "</td><td>";
            if(result[i].imagen == "springfield.jpg"){
                tabla += "<img style='width:200px; height:150px' src='springfield.jpg' alt='springfield'>";
            }else if(result[i].imagen == "browning.jpg"){
                tabla += "<img style='width:200px; height:150px' src='browning.jpg' alt='browning'>";
            }else if(result[i].imagen == "mp40.jpg"){
                tabla += "<img style='width:200px; height:150px' src='mp40.jpg' alt='mp40'>";
            }else if(result[i].imagen == "mg42.jpg"){
                tabla += "<img style='width:200px; height:150px' src='mg42.jpg' alt='mg42'>";
            }else if(result[i].imagen == "m1garand.jpg"){
                tabla += "<img style='width:200px; height:150px' src='m1garand.jpg' alt='m1garand'>";
            }else{
                tabla += "<img style='width:200px; height:150px' src='panzerschreck.jpg' alt='panzerschreck'>";
            }
            // tabla += array[i].imagen;
            tabla += "</td><td>";
            console.log(result[i].bando);
            if(result[i].bando == 1){
                tabla += "Aliados";
            }else{
                tabla += "Eje";
            }
            tabla += "</td></tr>";
        }
        document.getElementById("tabla").innerHTML=tabla;
        })
    .catch(function (error) {
        console.log('Request failed', error);
    });
}

//uso para XMLHttpRequest();
function mostrarContenido(server){
    let array = JSON.parse(server.responseText);
    xhrResponde = array;
    console.log(array);
    let tabla = "<tr><td>Nombre</td><td>Descripción</td><td>Imagen</td><td>Bando</td></tr>";
    for (const i in array) {
        if(array[i].bando == 1){
            //aliados
            tabla += "<tr class='aliados'><td>";
        }else{
            tabla += "<tr class='ejes'><td>";
        }
        tabla += array[i].nombre;
        tabla += "</td><td>";
        tabla += array[i].descripcion;
        tabla += "</td><td>";
        if(array[i].imagen == "springfield.jpg"){
            tabla += "<img style='width:200px; height:150px' src='springfield.jpg' alt='springfield'>";
        }else if(array[i].imagen == "browning.jpg"){
            tabla += "<img style='width:200px; height:150px' src='browning.jpg' alt='browning'>";
        }else if(array[i].imagen == "mp40.jpg"){
            tabla += "<img style='width:200px; height:150px' src='mp40.jpg' alt='mp40'>";
        }else if(array[i].imagen == "mg42.jpg"){
            tabla += "<img style='width:200px; height:150px' src='mg42.jpg' alt='mg42'>";
        }else if(array[i].imagen == "m1garand.jpg"){
            tabla += "<img style='width:200px; height:150px' src='m1garand.jpg' alt='m1garand'>";
        }else{
            tabla += "<img style='width:200px; height:150px' src='panzerschreck.jpg' alt='panzerschreck'>";
        }
        // tabla += array[i].imagen;
        tabla += "</td><td>";
        console.log(array[i].bando);
        if(array[i].bando == 1){
            tabla += "Aliados";
        }else{
            tabla += "Eje";
        }
        tabla += "</td></tr>";
    }
    document.getElementById("tabla").innerHTML=tabla;
}


let bando = document.getElementById("bando");
// console.log(bando.value);
bando.addEventListener('change', (event) => {
    if(bando.value == "aliados" ){
        let tabla = document.getElementById("tabla");
        let tr = tabla.getElementsByTagName("tr");
        // console.log(tr);
        for (let i = 0; i < tr.length; i++) {
            if(tr[i].className == "ejes" || tr[i].className == " hidden" ){
                // console.log("salen los ejes");
                tr[i].className = "hidden"
            }else{
                tr[i].className = "aliados";
            }
        }
        // console.log(tr);
        // console.log("Bando aliados");
    }else if(bando.value == "eje" ){
        let tabla = document.getElementById("tabla");
        let tr = tabla.getElementsByTagName("tr");
        // console.log(tr);
        for (let i = 0; i < tr.length; i++) {
             if(tr[i].className == "aliados" || tr[i].className == " hidden"){
                // console.log("salen los ejes");
                tr[i].className = " hidden"
            }else{
                tr[i].className = "ejes";
            }
        }
        // console.log("Bando eje");
    }
});
