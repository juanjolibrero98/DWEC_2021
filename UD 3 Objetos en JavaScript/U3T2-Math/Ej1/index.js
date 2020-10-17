let opcion = prompt("Elige una opción de este menú: "+"\n"+"1-Potencia"+"\n"+"2-Raiz"+"\n"+"3-Redondo"+"\n"+"4-Trigonometría")*1;
switch(opcion){
    case 1 : 
        let base = prompt("Dime la base");
        let exp = prompt("Dime el exponente");
        alert("El resultado de base "+base+" y exp "+exp+" es : "+Math.pow(base,exp));
        break;
    case 2 : 
        let num = prompt("Dime un número no negativo");
        alert("La raíz de "+num+" es: "+Math.sqrt(num));
        break;
    case 3 : 
        let decimal = prompt("Dime un número decimal");
        alert("El redondeo del número "+decimal+" al entero más próximo a la alta es :"+Math.round(decimal));
        alert("El redondeo del número "+decimal+" al entero más próximo a la baja es :"+Math.floor(decimal));
        break;
    case 4 : 
        let angulo = prompt("Dime un ángulo entre 0 y 360");
        alert("Valor trigonométrico del seno de "+angulo+" es: "+Math.sin(angulo));
        alert("Valor trigonométrico del coseno de "+angulo+" es: "+Math.cos(angulo));
        alert("Valor trigonométrico del tangente de "+angulo+" es: "+Math.tan(angulo));
        break; 
    default :
    alert("Error, introduzca un número del 1 al 4");
}