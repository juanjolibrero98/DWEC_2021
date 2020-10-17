function cumpleaños(){
    let cumpleMio = prompt("Dime la fecha de tu cumpleaños");
    let fechaCumplw = new Date(cumpleMio);
    let resultado = 0;
    for (let i = 2020; i <= 2100; i++) {
        let fecha = new Date(i,fechaCumplw.getMonth(),fechaCumplw.getDate());

        if(fecha.getDay() === 0){
            alert(fecha.getFullYear());
            resultado++;
        }
        ;
    }
    alert("En total son : "+resultado+" años que cae en domingo tu cumple")
}
cumpleaños();