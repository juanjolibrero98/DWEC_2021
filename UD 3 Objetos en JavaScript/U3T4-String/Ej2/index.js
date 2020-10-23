let psw = prompt("Dime una contraseña y te diré si es válida");
let contadorRequisitos = 0;
if(psw.length>=8 && psw.length<=16){
    alert("Tiene entre 8 y 16 caracteres.");
    contadorRequisitos++;
}

for (const i in psw) {
    if(psw[i] == psw[i].toLowerCase()){
        alert("Tiene una letra minúscula.");    
        contadorRequisitos++;
        break;
    }
}
for (const i in psw) {
    if(psw[i] == psw[i].toUpperCase()){
        alert("Tiene una letra mayúscula.");    
        contadorRequisitos++;
        break;
    }
}
for (const i in psw) {
    if(psw[i] == "1" || psw[i] == "2" || psw[i] == "3" || psw[i] == "4"  || psw[i] == "5" || psw[i] == "6" || psw[i] == "7" || psw[i] == "8" || psw[i] == "9" || psw[i] == "0"){
        alert("Tiene un número.");
        contadorRequisitos++;
        break;
    }
}
for (const i in psw) {
    if(psw[i] == "-" || psw[i] == "_" || psw[i] == "@" || psw[i] == "#"  || psw[i] == "$" || psw[i] == "%" || psw[i] == "&"){
        alert("Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.");
        contadorRequisitos++;
        break;
    }
}
/* Otra forma de comprobarlo es así con el includes que devuelve un booleano
if(psw.includes( '0' || '1' || '2' || '3' || '4' || '5' || '6' || '7' || '8' || '9')){
    alert("Tiene un número.");
}
if(psw.includes( '-' || '_' || '@' || '#'  || '$' || '%' || '&' )){
    alert("Tiene uno de los siguientes valores: guión alto, guión bajo, arroba,  almohadilla, dólar, tanto por ciento o ampersand.");
}
  */  
if(contadorRequisitos == 5){
    alert("Contraseña segura");
}else{
    alert("Contraseña no segura");
}