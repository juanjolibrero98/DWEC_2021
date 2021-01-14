let info = document.getElementById("info");

let parrafos = document.getElementsByTagName("p");
info.innerHTML += "Hay "+parrafos.length+" párrafos en total <br>";
//alert("Hay "+parrafos.length+" párrafos en total");

info.innerHTML += "EL segundo párrafo dice:"+"\n"+parrafos[1].innerText+"<br>";
//alert("EL segundo párrafo dice:"+"\n"+parrafos[1].innerText);

let enlaces = document.getElementsByTagName("a");
info.innerHTML += "Hay "+enlaces.length+" enlaces en total"+"<br>";
//alert("Hay "+enlaces.length+" enlaces en total");

info.innerHTML += "El primer enlace dice:"+"\n"+enlaces[0]+"<br>";
//alert("El primer enlace dice:"+"\n"+enlaces[0]);

info.innerHTML += "El penúltimo enlace dice:"+"\n"+enlaces[enlaces.length-2]+"<br>";
//alert("El penúltimo enlace dice:"+"\n"+enlaces[enlaces.length-2]);


let contadorEnlaces = 0;
for (let i = 0; i < enlaces.length; i++) {
    //.contains("/wiki/Municipio")
    // == "http://127.0.0.1:5500/wiki/Municipio"
    //console.log(enlaces[i].textContent);
    if(enlaces[i].href.includes("/wiki/Municipio")){
        contadorEnlaces++;
    }
}
info.innerHTML += "Hay "+contadorEnlaces+" enlaces que apuntan a /wiki/Municipio"+"<br>";
//alert("Hay "+contadorEnlaces+" enlaces que apuntan a /wiki/Municipio");


let parrafo1 = parrafos[0];
let enlacesParrafo1 = parrafo1.getElementsByTagName("a");
info.innerHTML += "Hay "+enlacesParrafo1.length+" enlaces del primer párrafo"+"<br>";
//alert("Hay "+enlacesParrafo1.length+" enlaces del primer párrafo");