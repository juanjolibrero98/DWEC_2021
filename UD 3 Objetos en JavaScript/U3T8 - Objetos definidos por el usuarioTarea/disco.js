let disco = new Disco();

function Disco(){
    this.nombre = " ";
    this.grupo = " ";
    this.ano = " ";
    this.tipoMusica = "";
    this.localiza = 0;
    this.presta = false;

    this.incluir5Properties = function incluir5Properties(nomDisco,group,an,music,locali){
        this.nombre = nomDisco;
        this.grupo = group;
        this.ano = an;
        this.tipoMusica = music;
        this.localiza = locali;
    }

    this.cambiarNEstanteria = function cambiarNEstanteria(change){
        this.localiza = change;
    }

    this.cambiarPrestado = function cambiarPrestado(prestado){
        this.presta = prestado;
    }

    this.mostrarDisco = function mostrarDisco(){
       return "\""+"Nombre: " + this.nombre+"\"," + "\n" + "\""+"Grupo: " + this.grupo+"\","+ "\n"+ "\""+"Año: " + this.ano+"\","+ 
       "\n"+"\""+"Tipo: " + this.tipoMusica+"\"," + "\n" + "\""+"Localizador: "+ this.localiza+"\"," + "\n"+"\""+"Prestado: " + this.presta+"\".";
    }

}

let disc1 = new Disco();
disc1.incluir5Properties("Revolver","The Beatles","2012","rock",1);
let disc2 = new Disco();
disc2.incluir5Properties("Los chungitos","Chungitos","2005","pop",2);
let disc3 = new Disco();
disc3.incluir5Properties("Gemeliers","Gemeliers","2018","indie",3);
let disc4 = new Disco();
disc4.incluir5Properties("Pepa pig Concierto Verano","Pepa pig","2015","pop",4);

let almacenDeDiscos = [disc1,disc2,disc3,disc4];


let opciones = prompt("1-Mostrar número de discos"+"\n"+"2-Mostrar listado de disco"+"\n"+"3-Mostrar un intervalo de discos"+"\n"+"4-Añadir un disco"+"\n"+"5-Borrar un disco"+"\n"+"6-Consultar un disco")*1;

switch(opciones){
    case 1:
        document.write("<h1>Números de disco que hay</h1>");
        document.write("<p> Hay "+almacenDeDiscos.length+" discos</p>");
        break;
    case 2:
        let opc = prompt("Selecciona"+ "\n" +"1- Verlos en el orden normal"+"\n"+"2- Verlos del reves"+"\n"+"3- Verlos en orden alfabético")*1;
        if(opc === 1){
            document.write("<h1>Lista de discos Orden normal</h1>");
            let contador = 1;
            for (const i in almacenDeDiscos) {
                document.write("<p> <b> Disco "+ contador +" </b>" +almacenDeDiscos[i].mostrarDisco()+"</p>");
                contador++;
            }

        }else if(opc === 2){
            document.write("<h1>Lista de discos Orden al reves</h1>");
            let contador = almacenDeDiscos.length;
            almacenDeDiscos.reverse();
            for (const i in almacenDeDiscos) {
                document.write("<p> <b> Disco "+ contador +" </b>" +almacenDeDiscos[i].mostrarDisco()+"</p>");
                contador--;
            }
        }else if(opc === 3){
            document.write("<h1>Lista de discos Orden alfabético</h1>");            
            let arrayResultado = almacenDeDiscos;
            arrayResultado.sort();
            
            for (const i in arrayResultado) {
                document.write("<p><b>Disco"+ (arrayResultado.indexOf(arrayResultado[i])+1) +"</b>"+arrayResultado[i].mostrarDisco()+"</p>");
            }
            
        }else{
            alert("Valor erroneo");
        }
        break;
    case 3:
        let opc2 = prompt("Introduce el intervalo formato inicio-fin");
        opc2.split("-");
        document.write("<h1>Intervalo de discos, apareceran estos discos: </h1>");
        let contador = (opc2[0]);
        if(opc2[0]<1 || opc2[2]>4){
            alert("Error, no hay tantos discos incluidos");
        }else{

            for(let i = (opc2[0]-1);i<opc2[2];i++){
                document.write("<p> <b> Disco "+ contador +" </b>" +almacenDeDiscos[i].mostrarDisco()+"</p>");
                contador++;
            }
        }    
        break;
    case 4:
        let opc4 = prompt("Selecciona"+ "\n" +"1- Introducirlo al principio"+"\n"+"2- Introducirlo al final")*1;
        let discoNuevo = new Disco();
        let nombre = prompt("Dime el nombre del disco");
        let grupo = prompt("Dime el grupo");
        let ano = prompt("Dime el Año");
        let tipoMusica =  prompt("Dime el tipo de música");
        let localiza =  prompt("Dime el localizador");
        discoNuevo.incluir5Properties(nombre, grupo,ano,tipoMusica,localiza);
        
        if(opc4 === 1){
            document.write("<h1>He añadido el disco al principio, se mostrará ahora el nuevo array</h1>");
            almacenDeDiscos.unshift(discoNuevo);
        
            for (const i in almacenDeDiscos) {
                document.write("<p> <b>Disco "+ (almacenDeDiscos.indexOf(almacenDeDiscos[i])+1) +"</b>"+almacenDeDiscos[i].mostrarDisco()+"</p>");
            }
        }else if(opc4 === 2){
            document.write("<h1>He añadido el disco al final, se mostrará ahora el nuevo array</h1>");
            almacenDeDiscos.push(discoNuevo);
        
            for (const i in almacenDeDiscos) {
                document.write("<p> <b>Disco "+ (almacenDeDiscos.indexOf(almacenDeDiscos[i])+1) +"</b>"+almacenDeDiscos[i].mostrarDisco()+"</p>");
            }
        }else{
            alert("Valor erroneo");
        }
        break;
    case 5:
        let opc5 = prompt("Selecciona"+ "\n" +"1- Borrarlo al principio"+"\n"+"2- Borrarlo al final")*1;
        
        if(opc5 === 1){
            document.write("<h1>Disco borrado al principio</h1>");
           
            document.write("<h3>El disco borrado es </h3>"+"\n"+almacenDeDiscos[0].mostrarDisco());
            almacenDeDiscos.shift();
            document.write("<p>El array queda ahora así: </p>");
             for (const i in almacenDeDiscos) {
                document.write("<p><b>Disco "+ (almacenDeDiscos.indexOf(almacenDeDiscos[i])+1) +"</b>"+almacenDeDiscos[i].mostrarDisco()+"</p>");
            }
        }else if(opc5 === 2){
            document.write("<h1>Disco borrado al final</h1>");
            document.write("<h3>El disco borrado es </h3>"+"\n"+almacenDeDiscos[(almacenDeDiscos.length)-1].mostrarDisco());
            almacenDeDiscos.pop();
            document.write("<p>El array queda ahora así: </p>");
             for (const i in almacenDeDiscos) {
                document.write("<p><b>Disco "+ (almacenDeDiscos.indexOf(almacenDeDiscos[i])+1) +"</b>"+almacenDeDiscos[i].mostrarDisco()+"</p>");
            }
        }else{
            alert("Valor erroneo");
        }
        break;
    case 6:
        let opc6 = prompt("Selecciona"+ "\n" +"1- Consultar por posicion"+"\n"+"2- Consultar por nombre")*1;
        if(opc6 === 1){
            let posi = prompt("Dime la Posicion del disco")*1;
            document.write("<h1>Consulta por posición</h1>"+"\n"+"Disco "+posi+"\n"+"<p>"+almacenDeDiscos[posi-1].mostrarDisco()+"</p>");
        }else if(opc6 === 2){
            let nombre = prompt("Dime el nombre del disco");
            for (const i in almacenDeDiscos) {
               if(almacenDeDiscos[i].nombre == nombre){
                document.write("<h1>Consulta por nombre</h1>"+"\n"+"Disco "+(almacenDeDiscos.indexOf(almacenDeDiscos[i])+1)+"\n"+"<p>"+almacenDeDiscos[i].mostrarDisco()+"</p>");    
                //document.write("<p>"+JSON.stringify(almacenDeDiscos[i])+"</p>");
                } 
            }
            
        }else{
            alert("Valor erroneo");
        }
        break;
    default:
        alert("Número erroneo");
}