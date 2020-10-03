//Juan José Librero Cansino
//U2T5 - Ejercicios varios


//Ejercicio3
var noPrimos = 0;
var multiplo3 = [];
for (let i = 1; i <= 500; i++) {
    if(i % 2 != 0){
        noPrimos++;
    }
    if(i % 3 == 0){
        
        multiplo3[multiplo3.length] = i;
    }
}
console.log("Del 1 al 500 hay "+noPrimos+" números no primos");
alert("Del 1 al 500 hay "+noPrimos+" números no primos");
console.log("Los múltiplos del 3 del 1 al 500 son "+"\n"+multiplo3);
alert("Los múltiplos del 3 del 1 al 500 son "+"\n"+multiplo3);

