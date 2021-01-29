document.getElementById("generarTabla").addEventListener("click",generarTabla,false);

document.getElementById("check").addEventListener("click",header,false);
function header(){
    //console.log("Hola");
    let columnas = document.getElementById("columnas");
    let cabe = document.getElementById("cabe");
    for(let i = 0; i < columnas.value; i++){
        let input3 = document.createElement("input");
        let input3Att1 = document.createAttribute("type");
            input3Att1.value = "text";
            input3.setAttributeNode(input3Att1);
            let input3Att2 = document.createAttribute("class");
            input3Att2.value = "cabece";
            input3.setAttributeNode(input3Att2);
            let input3Att3 = document.createAttribute("name");
            input3Att3.value = "cabe";
            input3.setAttributeNode(input3Att3);
            let input3Att4 = document.createAttribute("placeholder");
            input3Att4.value = "Ingrese nombre cabecera";
            input3.setAttributeNode(input3Att4);
            let input3Att5 = document.createAttribute("required");
            input3.setAttributeNode(input3Att5);
            cabe.appendChild(input3);

            let br = document.createElement("br");
            cabe.appendChild(br);
    }
}

function cabecera(){
    let columnas = document.getElementById("columnas");
    let i = 0;
    while(i < columnas.value){
        let input3 = document.createElement("input");
        let input3Att1 = document.createAttribute("type");
            input3Att1.value = "text";
            input3.setAttributeNode(input3Att1);
            let input3Att2 = document.createAttribute("id");
            input3Att2.value = "cabece";
            input3.setAttributeNode(input3Att2);
            let input3Att3 = document.createAttribute("name");
            input3Att3.value = "cabe";
            input3.setAttributeNode(input3Att3);
            let input3Att4 = document.createAttribute("placeholder");
            input3Att4.value = "Ingrese nombre cabecera"+(i+1);
            input3.setAttributeNode(input3Att4);
            let input3Att5 = document.createAttribute("required");
            input3.setAttributeNode(input3Att5);
            document.getElementById("cabe").appendChild(input3);
    }
    //document.getElementById("cabe").appendChild(input3);
}

function generarTabla(){
    document.getElementById("resultado").innerHTML = "";
    let columnas = document.getElementById("columnas");
    let filas = document.getElementById("filas");
    let header = document.getElementById("check");
    let valorDefecto = document.getElementById("defect");
    let borde = document.getElementById("borde");
    let color = document.getElementById("colores");

    let tabla = document.createElement("table");
    if(borde.value != null){
        let bordee= document.createAttribute("style");
        //console.log("border: "+borde.value+"px solid "+color.value+";");
        bordee.value = "border: "+borde.value+"px solid "+color.value+";";
        tabla.setAttributeNode(bordee);
    }
    
    
    for (let filass = 0; filass < filas.value; filass++) {//filas
        let fila1 = document.createElement("tr");
        for (let columnass = 0; columnass < columnas.value; columnass++) {//columnas
            let columna1 = document.createElement("td");

            if(header.checked){
                let thead = document.createElement("thead");
                for (let j = 0; j < columnas.value; j++) {
                    let th = document.createElement("th");
                    let input2 = document.createElement("input")
                    let input3Att12 = document.createAttribute("type");
                    input3Att12.value = "text";
                    input2.setAttributeNode(input3Att12);
                    console.log(valorDefecto.value);
                    let valorr = document.createAttribute("value");
                    valorr.value = valorDefecto.value;
                    input2.setAttributeNode(valorr);
                    //let valor = document.createTextNode(valorDefecto.value);
                    //input.appendChild(valor);
                    th.appendChild(input2);
                    thead.appendChild(th);
                }
                
                    

                if(valorDefecto.value != null){
                    let input = document.createElement("input")
                    let input3Att1 = document.createAttribute("type");
                    input3Att1.value = "text";
                    input.setAttributeNode(input3Att1);
                    console.log(valorDefecto.value);
                    let valorr = document.createAttribute("value");
                    valorr.value = valorDefecto.value;
                    input.setAttributeNode(valorr);
                    //let valor = document.createTextNode(valorDefecto.value);
                    //input.appendChild(valor);
                    columna1.appendChild(input);
                }else{
                    let input = document.createElement("input")
                    let input3Att1 = document.createAttribute("type");
                    input3Att1.value = "text";
                    input.setAttributeNode(input3Att1);
                    columna1.appendChild(input);
                }
            }else{
                if(valorDefecto.value != null){
                    let input = document.createElement("input")
                    let input3Att1 = document.createAttribute("type");
                    input3Att1.value = "text";
                    input.setAttributeNode(input3Att1);
                    console.log(valorDefecto.value);
                    let valorr = document.createAttribute("value");
                    valorr.value = valorDefecto.value;
                    input.setAttributeNode(valorr);
                    //let valor = document.createTextNode(valorDefecto.value);
                    //input.appendChild(valor);
                    columna1.appendChild(input);
                }else{
                    let input = document.createElement("input")
                    let input3Att1 = document.createAttribute("type");
                    input3Att1.value = "text";
                    input.setAttributeNode(input3Att1);
                    columna1.appendChild(input);
                }
            }

            fila1.appendChild(columna1);
        }
        tabla.appendChild(fila1);
    }
    
    document.getElementById("resultado").appendChild(tabla);
            
}
