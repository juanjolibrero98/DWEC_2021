//guardar
document.getElementById('guardar').addEventListener("click", guardar,false);
function guardar(){
    let key = document.getElementById('key').value;
    let value = document.getElementById('value').value;
    let select = document.getElementById('select');
    if(key == "" || value == ""){
        alert("Error, tiene que introducir clave : valor");
    }else{
        if(select.value == "local"){//localstorage
            localStorage.setItem(key,value);
            refrescar2();
        }else{//sessionstorage
            sessionStorage[key]=value;
            refrescar2();
        }
    }
}

//eliminar
document.getElementById('borrar').addEventListener("click" , borrar,false);
function borrar(){
    let clave = document.getElementById('key').value;
    if(clave == ""){
        alert("Error, no has introducido ninguna clave");
    }else{
        if(select.value == "local"){
            if(localStorage.getItem(clave) == null ){
                alert("No hay ninguna clave con ese valor almacenada de forma Local");
            }else{
                localStorage.removeItem(clave);
                refrescar2();
            }
        }else{
            if(sessionStorage.getItem(clave) == null ){
                alert("No hay ninguna clave con ese valor almacenada de forma Session");
            }else{
                sessionStorage.removeItem(clave);
                refrescar2();
            }
        }
    }
}

//refrescar
document.getElementById('actualizar').addEventListener("click" , refrescar2, false);     
function refrescar2(){
    let select = document.getElementById('select');
    if(select.value == "local"){
        //local
        const localText = document.getElementById("localText");
        localText.value = ""; 
        for (let i = localStorage.length - 1; i >= 0; i--) { 
            const clave = localStorage.key(i);
            localText.value += "Clave: " + clave + " Valor: " + localStorage.getItem(clave) + "\n"; 
        }
    }else{

        //session
        const sessionText = document.getElementById("sessionText");
        sessionText.value = ""; 
        for (let i = sessionStorage.length - 1; i >= 0; i--) {
            const clave = sessionStorage.key(i);
            sessionText.value += "Clave: " + clave + " Valor: " + sessionStorage.getItem(clave) + "\n"; 
        }
    }
}
//comprobar compatibilidad navegador
document.getElementById('comprobar').addEventListener("click",()=>{
    if(typeof(Storage) !== "undefined") {
        document.getElementById('resultado').innerHTML = "Tu navegador es compatible con Local y Session Storages.";
    } else {
        document.getElementById('resultado').innerHTML = "Tu navegador no es compatible con Local ni Session Storages.";
    }
});