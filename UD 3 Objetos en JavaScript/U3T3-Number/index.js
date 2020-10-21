let numero = prompt("Dime un número entero")*1;

alert("El número "+numero+" con su valor exponencial es: "+parseFloat(numero).toExponential());
alert("El número "+numero+" con 4 decimales es: "+parseFloat(numero).toFixed(4));
alert("El número "+numero+" en base 2 (binario) es: "+numero.toString(2));
alert("El número "+numero+" en base 8 (octal) es: "+numero.toString(8));
alert("El número "+numero+" en base 16 (hexadecimal) es: "+numero.toString(16));