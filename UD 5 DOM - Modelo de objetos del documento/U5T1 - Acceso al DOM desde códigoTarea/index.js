let parrafos = document.getElementsByTagName("p");
alert("Hay "+parrafos.length+" párrafos en total");
alert("EL segundo párrafo dice:"+"\n"+parrafos[1].innerText);
let enlaces = document.getElementsByTagName("a");
alert("Hay "+enlaces.length+" enlaces en total");
alert("El primer enlace dice:"+"\n"+enlaces[0]);
alert("El penúltimo enlace dice:"+"\n"+enlaces[enlaces.length-2]);
let contadorEnlaces = 0;
for (let i = 0; i < enlaces.length; i++) {
    //.contains("/wiki/Municipio")
    if(enlaces[i] == "http://127.0.0.1:5500/wiki/Municipio"){
        contadorEnlaces++;
    }
}
alert("Hay "+contadorEnlaces+" enlaces que apuntan a /wiki/Municipio");
let parrafo1 = parrafos[0];
let enlacesParrafo1 = parrafo1.getElementsByTagName("a");
alert("Hay "+enlacesParrafo1.length+" enlaces del primer párrafo");