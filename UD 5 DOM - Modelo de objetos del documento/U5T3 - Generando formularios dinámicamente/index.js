
let form = document.createElement("form");//creo la raiz del formulario
    let ul = document.createElement("ul");//creo el ul donde está todo los campos del form
        let li1 = document.createElement("li");//creo el primer li
            let label1 = document.createElement("label");
                let labelText = document.createTextNode("Nombre del disco");
                label1.appendChild(labelText);
                let forlabel = document.createAttribute("for");
                forlabel.value = "name";
                label1.setAttributeNode(forlabel);
            let input1 = document.createElement("input");
                let input1Att1 = document.createAttribute("type");
                input1Att1.value = "text";
                input1.setAttributeNode(input1Att1);
                let input1Att2 = document.createAttribute("id");
                input1Att2.value = "name";
                input1.setAttributeNode(input1Att2);
                let input1Att3 = document.createAttribute("name");
                input1Att3.value = "user_name";
                input1.setAttributeNode(input1Att3);
                let input1Att4 = document.createAttribute("placeholder");
                input1Att4.value = "Ingresa el nombre del disco";
                input1.setAttributeNode(input1Att4);
                let input1Att5 = document.createAttribute("required");
                input1.setAttributeNode(input1Att5);
            li1.appendChild(label1);
            li1.appendChild(input1);
        ul.appendChild(li1);

        let li2 = document.createElement("li");//creo el primer li
            let label2 = document.createElement("label");
                let label2Text = document.createTextNode("Grupo de música o cantante");
                label2.appendChild(label2Text);
                let forlabel2 = document.createAttribute("for");
                forlabel2.value = "grupo";
                label2.setAttributeNode(forlabel2);
            let input2 = document.createElement("input");
                let input2Att1 = document.createAttribute("type");
                input2Att1.value = "text";
                input2.setAttributeNode(input2Att1);
                let input2Att2 = document.createAttribute("id");
                input2Att2.value = "grupo";
                input2.setAttributeNode(input2Att2);
                let input2Att3 = document.createAttribute("name");
                input2Att3.value = "grupo";
                input2.setAttributeNode(input2Att3);
                let input2Att4 = document.createAttribute("placeholder");
                input2Att4.value = "Ingrese el nombre del Grupo de música";
                input2.setAttributeNode(input2Att4);
                let input2Att5 = document.createAttribute("required");
                input2.setAttributeNode(input2Att5);
            li2.appendChild(label2);
            li2.appendChild(input2);
        ul.appendChild(li2);

        let li3 = document.createElement("li");//creo el primer li
            let label3 = document.createElement("label");
                let label3Text = document.createTextNode("Año de publicación");
                label3.appendChild(label3Text);
                let forlabel3 = document.createAttribute("for");
                forlabel3.value = "anho";
                label3.setAttributeNode(forlabel3);
            let input3 = document.createElement("input");
                let input3Att1 = document.createAttribute("type");
                input3Att1.value = "number";
                input3.setAttributeNode(input3Att1);
                let input3Att2 = document.createAttribute("id");
                input3Att2.value = "anho";
                input3.setAttributeNode(input3Att2);
                let input3Att3 = document.createAttribute("name");
                input3Att3.value = "anho";
                input3.setAttributeNode(input3Att3);
                let input3Att4 = document.createAttribute("placeholder");
                input3Att4.value = "Ingrese el año";
                input3.setAttributeNode(input3Att4);
                let input3Att5 = document.createAttribute("required");
                input3.setAttributeNode(input3Att5);
            li3.appendChild(label3);
            li3.appendChild(input3);
        ul.appendChild(li3);

        let li4 = document.createElement("li");//creo el primer li
            let label4 = document.createElement("label");
                let label4Text = document.createTextNode("Tipo de Música");
                label4.appendChild(label4Text);
                let forlabel4 = document.createAttribute("for");
                forlabel4.value = "tipoMusica";
                label4.setAttributeNode(forlabel4);
            let select4 = document.createElement("select");
                let nameSelect4  = document.createAttribute("name");
                nameSelect4.value = "tipoMusica";
                select4.setAttributeNode(nameSelect4);
                let idSelect4 = document.createAttribute("id");
                idSelect4.value = "tipoMusica";
                select4.setAttributeNode(idSelect4);
                    let opc1 = document.createElement("option");
                        let opc1Text = document.createTextNode("rock");
                        opc1.appendChild(opc1Text);
                        let valueOpc1 = document.createAttribute("value");
                        valueOpc1.value = "rock";
                    let opc2 = document.createElement("option");
                        let opc2Text = document.createTextNode("pop");
                        opc2.appendChild(opc2Text);
                        let valueOpc2 = document.createAttribute("value");
                        valueOpc2.value = "pop";
                    let opc3 = document.createElement("option");
                        let opc3Text = document.createTextNode("punk");
                        opc3.appendChild(opc3Text);
                        let valueOpc3 = document.createAttribute("value");
                        valueOpc3.value = "punk";
                    let opc4 = document.createElement("option");
                        let opc4Text = document.createTextNode("indie");
                        opc4.appendChild(opc4Text);
                        let valueOpc4 = document.createAttribute("value");
                        valueOpc4.value = "indie";
                select4.appendChild(opc1);
                select4.appendChild(opc2);
                select4.appendChild(opc3);
                select4.appendChild(opc4);
            li4.appendChild(label4);
            li4.appendChild(select4);
            ul.appendChild(li4);

        let li5 = document.createElement("li");//creo el primer li
            let label5 = document.createElement("label");
                let label5Text = document.createTextNode("Número de estantería");
                label5.appendChild(label5Text);
                let forlabel5 = document.createAttribute("for");
                forlabel5.value = "nEstanteria";
                label5.setAttributeNode(forlabel5);
            let input5 = document.createElement("input");
                let input5Att1 = document.createAttribute("type");
                input5Att1.value = "number";
                input5.setAttributeNode(input5Att1);
                let input5Att2 = document.createAttribute("id");
                input5Att2.value = "nEstanteria";
                input5.setAttributeNode(input5Att2);
                let input5Att3 = document.createAttribute("name");
                input5Att3.value = "nEstanteria";
                input5.setAttributeNode(input5Att3);
                let input5Att4 = document.createAttribute("placeholder");
                input5Att4.value = "Ingrese el nEstanteria";
                input5.setAttributeNode(input5Att4);
                let input5Att5 = document.createAttribute("required");
                input5.setAttributeNode(input5Att5);
            li5.appendChild(label5);
            li5.appendChild(input5);
        ul.appendChild(li5);

        let li6 = document.createElement("li");//creo el primer li
            let label6 = document.createElement("label");
                let label6Text = document.createTextNode("Prestado");
                label6.appendChild(label6Text);
                let forlabel6 = document.createAttribute("for");
                forlabel6.value = "presta";
                label6.setAttributeNode(forlabel6);
            let input6 = document.createElement("input");
                //let input6Text = document.createTextNode("true");
                //input6.appendChild(input6Text);
                let input6Att1 = document.createAttribute("type");
                input6Att1.value = "radio";
                input6.setAttributeNode(input6Att1);
                let input6Att2 = document.createAttribute("id");
                input6Att2.value = "presta";
                input6.setAttributeNode(input6Att2);
                let input6Att3 = document.createAttribute("name");
                input6Att3.value = "presta";
                input6.setAttributeNode(input6Att3);
                let input6Att4 = document.createAttribute("value");
                input6Att4.value = "true";
                input6.setAttributeNode(input6Att4);
            let input61 = document.createElement("input");
                //let input6Text = document.createTextNode("true");
                //input6.appendChild(input6Text);
                let input61Att1 = document.createAttribute("type");
                input61Att1.value = "radio";
                input61.setAttributeNode(input61Att1);
                let input61Att2 = document.createAttribute("id");
                input61Att2.value = "presta";
                input61.setAttributeNode(input61Att2);
                let input61Att3 = document.createAttribute("name");
                input61Att3.value = "presta";
                input61.setAttributeNode(input61Att3);
                let input61Att4 = document.createAttribute("value");
                input61Att4.value = "false";
                input61.setAttributeNode(input61Att4);
                let input61Att5 = document.createAttribute("checked");
                input61.setAttributeNode(input61Att5);
            li6.appendChild(label6);
            li6.appendChild(input6);
            li6.appendChild(input61);
        ul.appendChild(li6);

        let inputFinal = document.createElement("button");
            let inputFinalText = document.createTextNode("Enviar");
            inputFinal.appendChild(inputFinalText);
            let inputFinalAtt1 = document.createAttribute("type");
            inputFinalAtt1.value = "submit";
            let inputFinalAtt2 = document.createAttribute("value");
            inputFinalAtt2.value = "Enviar";
            let inputFinalAtt3 = document.createAttribute("onclick");
            inputFinalAtt3.value = "guardarDatos()";
        ul.appendChild(inputFinal);
    form.appendChild(ul);
document.body.appendChild(form);//añado todo el formulario al body


//js del ejercicio U4T1
function guardarDatos(){
    let name = document.getElementById('name').value;
    let grupo = document.getElementById('grupo').value;
    let anho = document.getElementById('anho').value;
    let tMusica = document.getElementById('tipoMusica').value;
    let estanteria = document.getElementById('nEstanteria').value;
    let presta = document.getElementById('presta').value;

    let array = [name,grupo,anho,tMusica,estanteria,presta];
    alert(array);
}
