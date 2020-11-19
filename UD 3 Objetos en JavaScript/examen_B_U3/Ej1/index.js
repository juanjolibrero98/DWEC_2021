function Carta (palo,valor){
    this.palo = null;
    this.valor = null;

    this.darValor = function(numPalo, valorCarta){
        if( (numPalo >0 && numPalo < 5) && (valorCarta > 0 && valorCarta < 11) ){
            //ok
            this.palo = numPalo;
            this.valor = valorCarta;
        }
    }

    this.mostrar = function (){
        if(numPalo == 1){
            //oros
            if(valorCarta == 8){
                //sota
                return "sota de oros";
            }else if(valorCarta == 9){
                //caballo
                return "caballo de oros";
            }else if(valorCarta == 10){
                //rey
                return "rey de oros";
            }else{
                //num de la carta normal
                return valorCarta+" de oros";
            }
        }else if(numPalo == 2){
            //copas
            if(valorCarta == 8){
                //sota
                return "sota de copas";
            }else if(valorCarta == 9){
                //caballo
                return "caballo de copas";
            }else if(valorCarta == 10){
                //rey
                return "rey de copas";
            }else{
                //num de la carta normal
                return valorCarta+" de copas";
            }
        }else if(numPalo == 3){
            //espadas
            if(valorCarta == 8){
                //sota
                return "sota de espadas";
            }else if(valorCarta == 9){
                //caballo
                return "caballo de espadas";
            }else if(valorCarta == 10){
                //rey 
                return "rey de espadas";
            }else{
                //num de la carta normal
                return valorCarta+" de espadas";
            }
        }else{
            //bastos
            if(valorCarta == 8){
                //sota
                return "sota de bastos";
            }else if(valorCarta == 9){
                //caballo
                return "caballo de bastos";
            }else if(valorCarta == 10){
                //rey
                return "rey de bastos";
            }else{
                //num de la carta normal
                return valorCarta+" de bastos";
            }
        }
    }
}

let baraja = document.getElementById('baraja');

function Barajas(cartas){
    this.cartas = [40];

    //relleno baraja
    for (let c = 0; c < cartas.length; c++) {
        for (let p = 1; p < 5; p++) {
            for (let v = 1; v < 11; v++) {
                this.cartas[c] = p+"-"+v; 
                c++;
            }
        }
    }
    


    this.barajar = function(){

    }

    this.mostrarBaraja = function(){
        for (const i in this.cartas) {
            baraja = document.write("<p>"+tis.cartas[i]+" \n "+"</p>");
        }
    }
}