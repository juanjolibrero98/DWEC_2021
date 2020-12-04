window.onload = iniciar;

//creo la cookie
let d = new Date();
let tiempo = 8;
d.setTime(d.getTime() + tiempo * 24 * 60 * 60 * 1000);
let expiracion = "expires=" + d.toUTCString();
document.cookie  = "Intento de Envíos del formulario =  0;" + expiracion + ";path=/";
let contadorCookie = 0;

function iniciar(){
    //cojer boton de enviar
    document.getElementById("enviar").addEventListener("click",validar,false);

    //para poner texto en mayusculas cuando no sea el foco
    const nombre = document.getElementById('nombre');
    const apellidos = document.getElementById("apellidos");
    nombre.addEventListener('blur',(e) =>{
        const val = e.target.value;
        nombre.value = val.toUpperCase();
    });
    apellidos.addEventListener('blur',(e) =>{
        const val = e.target.value;
        apellidos.value = val.toUpperCase();
    });

    //poner el valor de la cookie en el html  
    document.getElementById("intentos").innerHTML = document.cookie;

}

function validarNombreYApellidos() {
    let nombre = document.getElementById("nombre").value;
    let apellidos = document.getElementById("apellidos").value; 
    let nombreInput = document.getElementById("nombre");
    let apellidosInput = document.getElementById("apellidos"); 
    
    limpiarError(nombreInput);
    limpiarError(apellidosInput);

    if(nombre === "" || !isNaN(nombre)) {
        error(nombreInput);
        document.getElementById("errores").innerHTML = "ERROR! El Campo nombre no puede estar vacio o incluir números";
        return false;
    }else if(apellidos === "" || !isNaN(apellidos)) {
        error(apellidosInput);
        document.getElementById("errores").innerHTML = "ERROR! El Campo Apellidos no puede estar vacio o incluir números";
        return false;
    }else {
        return true;
    }   
}

function validarEdad() {
    let edad = document.getElementById("edad").value;
    let edadInput = document.getElementById("edad");
    let regexEdad = new RegExp(/^([0-9]|[0-9][0-9]|[1][0][0-4]||105)$/);
    limpiarError(edadInput);
    if(!regexEdad.test(edad) || edad === ""){
        error(edadInput);
        document.getElementById("errores").innerHTML ="ERROR! El Campo Edad debe tener un número y con un valor entre 0 y 105";
        return false;
    }else{
        return true;
    }
}

function validarNIF(){
    let nif = document.getElementById("nif").value;
    let nifInput = document.getElementById("nif");
    /*Esta expresión regular lo que hace es que 
    ^ esto significa que tiene que comenzar por el siguiente caracter, es decir por (\d{8}),
    (\d{8}) esto significa que tiene que ser solo número y un total de 8 exactamente, 
    [-] esto significa que tiene que tener a cotinuación el guión si o si 1 vez,
    ([a-zA-Z]{1}) esto significa que puedes escribir 1 sola letra mayusculas o minusculas,
    $ esto significa que la cadena debe terminar por el elemento anterior.    */
    let regexNIF = new RegExp(/^(\d{8})[-]([a-zA-Z]{1})$/);
    limpiarError(nifInput);
    if(regexNIF.test(nif)){
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Dni tiene que tener 8 números, 1 guión y 1 letra, Ej: 12345678-b";
        error(nifInput);
        return false;
    }
}

function validarEmails(){
    let email = document.getElementById("email").value;
    let emailInput = document.getElementById("email");
    // /^[^@]+@[^@]+\.[a-zA-Z]{2,}$/
    /*Lo que dice la regex de email es: 
    ^ comienza por el siguiente caracter,
    ([a-zA-Z0-9]+) puede tener minusculas, mayusculas y números mas de 1 vez( esto es por el +),
    [@] tiene que incluir el @ si o si,
    ([a-z]+) puedes añadir letras en minusculas mas de 1 vez,
    [.] tienes que añadir el . ,
    ([a-z]{2,3}) puedes escribir 2 0 3 letras en minusculas,
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexEmails = new RegExp(/^([a-zA-Z0-9]+)[@]([a-z]+)[.]([a-z]{2,3})$/);
    limpiarError(emailInput);
    if(regexEmails.test(email)){
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Email tiene que ser letrasNumeros@letras.letras ";
        error(emailInput);
        return false;
    }
}

function validarProvincia(){ 
    // let provinciaElegida = document.formulario.provincia[document.formulario.provincia.selectedIndex].value;
    let provincia = document.getElementById("provincia").value;
    //let provinciaElegidaInput = document.formulario.provincia[document.formulario.provincia.selectedIndex]; 
    let provinciaInput = document.getElementById("provincia");
    limpiarError(provinciaInput);

    if (provincia == 0) { 
        document.getElementById("errores").innerHTML ="ERROR! No has seleccionado ninguna opción de Provincia.";
        error(provinciaInput);
        return false;
    }else{       
      return true;
    } 
}

function validarFecha(){
    let fecha = document.getElementById("fecha").value;
    let fechaInput = document.getElementById("fecha");
    /*Lo que dice la regex de fecha es:
    ^ tiene que comenzar por el siguiente caracter,
    ([0-3][0-9]) tienes que escribir 2 números, el primero puede ir del 0 al 3 (se refiere por ejemplo al 01, 10, 30 etc..), y el segundo número sería el segundo decimal del día que puede ser cualquiera,
    [-] tiene que tener obligatioriamente 1 guión,
    ([0-1][0-9]) esto sería para el mes, 0-1 sería el primer dígito del mes 01, al 12, y el segundo dígito sería del 0-9 para el mes, 
    [-] tiene que tener obligatioriamente 1 guión,
    ([0-9]{4}) esto es para el año donde vas a escribir 1 número del 0 al 9, 4 veces,
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexFecha = new RegExp(/^([0-3][0-9])[-]([0-1][0-9])[-]([0-9]{4})$/);
    limpiarError(fechaInput);
    if(regexFecha.test(fecha)){
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Fecha tiene que tener un formato  dd-mm-aaaa";
        error(fechaInput);
        return false;
    }
}

function validarTelefono(){
    let telefono = document.getElementById("telefono").value;
    let telefonoInput = document.getElementById("telefono");
    /*La regex de telefono dice: 
    ^ tiene que comenzar por el siguiente caracter,
    (\d{9}) tiene que ser solo números y tienen que ser 9
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexTelefono = new RegExp(/^(\d{9})$/);
    limpiarError(telefonoInput);
    if(regexTelefono.test(telefono)){
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Telefono debe tener 9 números exactamente";
        error(telefonoInput);
        return false;
    }
}

function validarHora(){
    let hora = document.getElementById("hora").value;
    let horaInput = document.getElementById("hora");
    /*La regex de hora dice: 
    ^ tiene que comenzar por el siguiente caracter,
    ([0-2][0-9]) tiene que ser 2 números, el primero del 0 al 2 y el segundo cualquier número (horas),
    [:] tiene que incluir obligatoriamente en ese lugar el caracter :,
    ([0-6][0-9]) tiene que ser 2 números el primer dígito va de 0 a 6 y el segundo puede ser cualquier número (minutos),
    $ tiene que acabar la cadena por el elemento anterior*/
    let regexHora = new RegExp(/^([0-2][0-9])[:]([0-6][0-9])$/);
    limpiarError(horaInput);
    if(regexHora.test(hora)){
        return true;
    }else{
        document.getElementById("errores").innerHTML ="ERROR! El campo Hora tiene que tener el formato hh:mm";
        error(horaInput);
        return false;
    }
}

function validar(e){
    document.cookie  = "Intento de Envíos del formulario = "+ (++contadorCookie) +";" + expiracion + ";path=/";
    //poner el valor de la cookie en el html  
    document.getElementById('intentos').innerHTML = document.cookie;
    if(
        validarNombreYApellidos() &&
        validarEdad() &&
        validarNIF() &&
        validarEmails() &&
        validarProvincia() &&
        validarFecha() &&
        validarTelefono() &&
        validarHora() &&
        confirm("Pulsa aceptar si deseas enviar el formulario")
    ){
        return true;
    }else{
        e.preventDefault();
        window.alert("Error, no pusiste bien uno de los campos");
        return false;
        
    }
}

function error(element){
    element.className = "error";
    element.focus();
}
function limpiarError(elemento){
    elemento.className = "";
    //para limpiar errores;
    document.getElementById("errores").innerHTML ="";
}