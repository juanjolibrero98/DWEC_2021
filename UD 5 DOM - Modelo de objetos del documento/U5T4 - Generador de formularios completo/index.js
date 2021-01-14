/*
let CrearInputText = document.getElementById("crearUnText");
let CrearInputPsw = document.getElementById("crearUnPsw");
let CrearTextArea = document.getElementById("crearUnTextArea");
let CrearunLabel = document.getElementById("crearUnLabel");
let CrearunaImg = document.getElementById("crearUnImg");
let CrearUnCheckbox = document.getElementById("crearUnCheckbox");
let CrearUnRadioButton = document.getElementById("crearUnRadio");
let CrearUnSubmit = document.getElementById("crearUnSubmit");
*/

document.getElementById("crearUnText").addEventListener("click", crearText, false);
document.getElementById("crearUnPsw").addEventListener("click", crearPsw, false);
document.getElementById("crearUnTextArea").addEventListener("click", crearTextArea, false);
document.getElementById("crearUnLabel").addEventListener("click", crearLabel, false);
document.getElementById("crearUnImg").addEventListener("click", crearImg, false);
document.getElementById("crearUnCheckbox").addEventListener("click", crearCheckbox, false);
document.getElementById("crearUnRadio").addEventListener("click", crearRadio, false);
document.getElementById("crearUnSubmit").addEventListener("click", crearSubmit, false);

function crearText(){
    let attNombre = prompt("Dime el nombre que tiene el input (Atributo name)");
    let input = document.createElement("input");
        let typeInput = document.createAttribute("type");
        typeInput.value = "text";
        input.setAttributeNode(typeInput);
        let nameInput = document.createAttribute("name");
        nameInput.value = attNombre;
        // input.setAttribute("name", attNombre);
        input.setAttributeNode(nameInput);
    document.body.appendChild(input);
}
function crearPsw(){
    let attNombre = prompt("Dime el nombre que tiene el input (Atributo name)");
    let input = document.createElement("input");
        let typeInput = document.createAttribute("type");
        typeInput.value = "password";
        input.setAttributeNode(typeInput);
        let nameInput = document.createAttribute("name");
        nameInput.value = attNombre;
        input.setAttributeNode(nameInput);
    document.body.appendChild(input);
}
function crearTextArea(){
    let attNombre = prompt("Dime el nombre que tiene el textArea (Atributo name)");
    let columnas = 40;
    let filas = 5;
    let textArea = document.createElement("textarea");
        let colstextArea = document.createAttribute("cols");
        colstextArea.value = columnas;
        textArea.setAttributeNode(colstextArea);
        let rowstextArea = document.createAttribute("rows");
        rowstextArea.value = filas;
        textArea.setAttributeNode(rowstextArea);
        let nametextArea = document.createAttribute("name");
        nametextArea.value = attNombre;
        textArea.setAttributeNode(nametextArea);
    document.body.appendChild(textArea);
}
function crearLabel(){
    let attFor = prompt("Dime a que input va referido este label (Atributo for)");
    let textLabel = prompt("Dime el texto que aparecerá en el label");
    let label = document.createElement("label");
        let textoDelLabel = document.createTextNode(textLabel);
        label.appendChild(textoDelLabel);
        let attriFor = document.createAttribute("for");
        attriFor.value = attFor;
        label.setAttributeNode(attriFor);
    document.body.appendChild(label);
}
function crearImg(){
    let rutaImg = prompt("dime la ruta de la Imagen");
    let img = document.createElement("img");
        let src = document.createAttribute("src");
        src.value = rutaImg;
        img.setAttributeNode(src);
    document.body.appendChild(img);
}
function crearCheckbox(){
    let nombre = prompt("Dime el nombre del input (Atributo name)");
    let value = prompt("Dime el valor del input (Atributo value)");
    let texto = prompt("Dime el texto del checkbox");
    let labelBox = document.createElement("label");//creo un label para poder darle nombre al checkbox
        let checkbox = document.createElement("input");
            let type = document.createAttribute("type");
            type.value = "checkbox";
            checkbox.setAttributeNode(type);
            let name = document.createAttribute("name");
            name.value = nombre;
            checkbox.setAttributeNode(name);
            let valor = document.createAttribute("value");
            valor.value = value;
            checkbox.setAttributeNode(valor);
        let nomLabel = document.createTextNode(texto);
        labelBox.appendChild(checkbox);
        labelBox.appendChild(nomLabel);
    document.body.appendChild(labelBox);
}
function crearRadio(){
    let nombre = prompt("Dime el nombre del input (Atributo name)");
    let value = prompt("Dime el valor del input (Atributo value)");
    let texto = prompt("Dime el texto del Radio Button");
    let labelBox = document.createElement("label");//creo un label para poder darle nombre al checkbox
        let radioButton = document.createElement("input");
            let type = document.createAttribute("type");
            type.value = "radio";
            radioButton.setAttributeNode(type);
            let name = document.createAttribute("name");
            name.value = nombre;
            radioButton.setAttributeNode(name);
            let valor = document.createAttribute("value");
            valor.value = value;
            radioButton.setAttributeNode(valor);
        let nomLabel = document.createTextNode(texto);
        labelBox.appendChild(radioButton);
        labelBox.appendChild(nomLabel);
    document.body.appendChild(labelBox);
}
function crearSubmit(){
    let nombre = prompt("Dime el nombre del Submit (Atributo name)");
    let valor = prompt("Dime el valor del Submit (Atributo value)");
    let submit = document.createElement("input");
        let type = document.createAttribute("type");
        type.value = "submit";
        submit.setAttributeNode(type);
        let name = document.createAttribute("name");
        name.value = nombre;
        submit.setAttributeNode(name);
        let value = document.createAttribute("value");
        value.value = valor;
        submit.setAttributeNode(value);
    document.body.appendChild(submit);
}