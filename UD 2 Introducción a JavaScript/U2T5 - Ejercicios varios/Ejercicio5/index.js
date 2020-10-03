//Juan José Librero Cansino
//U2T5 - Ejercicios varios


//Ejercicio5
do{
    var numero = prompt("Introduce un número entre el 2 y el 10");
    if(numero>=2 && numero<=10){
        
        //multi
        var multi = [];
        for (let i = 1; i < 11; i++) {
            multi[multi.length] = numero+" * "+i+" = "+""+numero * i+"\n";
        }
        alert("Multiplicar"+"\n"+multi);

        //sumar
        var sumar = [];
        var i = 1;
        do{
            sumar[i] = numero+" + "+i+" = "+""+ (parseInt(numero) + parseInt(i))+"\n";    
            i++;
        }while(i<11);

        alert("Sumar"+"\n"+sumar);

        //dividir
        var dividir = [];
        var i = 1;
        while(i<11){
            dividir[i] = numero+" / "+i+" = "+""+numero / i+"\n";    
            i++;
        }
        alert("Dividir"+"\n"+dividir);
        break;
    }
}while(numero<2 || numero>10);



