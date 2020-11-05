
var arraysBingo = [];
let arrayDesordenado = [];
function comenzar(){
    rellenarCarton();

    sacaNumeroNuevo();
}

function rellenarCarton (){

  for(var i = 0; i < 3; i++){
      arrayBingo[i] = [];
      for(var j = 0; j<5; j++){
        
        var numAle = Math.floor(Math.random() * Math.floor(99) + 1);
        if(arraysBingo[i][j].includes(numAle))
        {
        i--;
        continue;
        }
        else
        {
            arrayBingo[i][j] = numAle;
        }
      }
    
  }
}

function compruebaLinea(arrayBingo,arrayDesordenado){
    if(arrayBingo[0][0] == arrayDesordenado[0] && arrayBingo[0][1] == arrayDesordenado[1]  && arrayBingo[0][2] == arrayDesordenado[2] && arrayBingo[0][3] == arrayDesordenado[3] && arrayBingo[0][4] == arrayDesordenado[4]){
        alert("Lineaaa!!!!!!"+arrayBingo[0][0]+arrayBingo[0][1]+arrayBingo[0][2]+arrayBingo[0][3]+arrayBingo[0][4]);
    
    }else if(arrayBingo[1][0] == arrayDesordenado[5] && arrayBingo[1][1] == arrayDesordenado[6]  && arrayBingo[1][2] == arrayDesordenado[7] && arrayBingo[1][3] == arrayDesordenado[8] && arrayBingo[1][4] == arrayDesordenado[9]){
        alert("Lineaaa!!!!!!"+arrayBingo[1][0]+arrayBingo[1][1]+arrayBingo[1][2]+arrayBingo[1][3]+arrayBingo[1][4]);
    
    }else if(arrayBingo[2][0] == arrayDesordenado[10] && arrayBingo[2][1] == arrayDesordenado[11]  && arrayBingo[2][2] == arrayDesordenado[12] && arrayBingo[2][3] == arrayDesordenado[13] && arrayBingo[2][4] == arrayDesordenado[14]){
        alert("Lineaaa!!!!!!"+arrayBingo[2][0]+arrayBingo[2][1]+arrayBingo[2][2]+arrayBingo[2][3]+arrayBingo[2][4]);
    
    }else{
        alert("Ninguna linea!!!!");
    }
}
function compruebaBingo(){
    let arrayBingoConvertido = new Array;
    for (const i in arrayBingo) {
        for (const j in arrayBingo) {
            arrayBingoConvertido += arrayBingo[i][j];
        }
    }
    if(arrayBingoConvertido == arrayDesordenado){
        return true;
    }else{
        return false;
    }
}
function sacaNumeroNuevo(arrayDesordenado){
    var numAle = Math.floor(Math.random() * Math.floor(99) + 1);
    let contador = 0;
    if(contador < 99){
        if(!arrayDesordenado.includes(numAle)){
            arrayDesordenado += numAle;
        }
        compruebaLinea();
        compruebaBingo();

        contador++;
    }
}
