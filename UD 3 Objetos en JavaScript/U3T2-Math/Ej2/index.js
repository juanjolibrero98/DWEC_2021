let radio = prompt("Dime el valor del radio");
alert(radio+"\n"+radio*2+"\n"+Math.PI*2*radio+"\n"+
    (Math.PI)*(Math.pow(radio,2))+"\n"+
    (4*Math.pow(radio,2))*(Math.PI)+"\n"+
    (4/3)*(Math.PI)*(Math.pow(radio,3)));

alert("El valor del radio es: "+radio);
alert("El valor del diámetro es: "+radio*2);
alert("El valor del perímetro de la circunferencia es: "+Math.PI*2*radio);
alert("El valor del área del círculo es: "+(Math.PI)*(Math.pow(radio,2)));
alert("El valor del área de la esfera es: "+(4*Math.pow(radio,2))*(Math.PI));
alert("El valor del volumen de la esfera es: "+(4/3)*(Math.PI)*(Math.pow(radio,3)));
