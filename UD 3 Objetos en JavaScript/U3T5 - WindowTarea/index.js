var ventana;
function abrirVentana(){
    let configuracion_ventana = "width=200, height=80, top=500, left=500, menubar=no,location=no,resizable=no,scrollbars=no,status=no";
    if (window.confirm("¿Deseas abrir una nueva ventana?")) { 
        ventana = open("","",configuracion_ventana);
        ventana.document.write("<h1>Holaaaaa</h1>"+"<button onclick='self.close();'>Cerrar ventana</button>");
        ventana.document.write("Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci quam, mollitia dolore quidem ex corporis facilis dolores rerum accusantium laudantium suscipit beatae tenetur vitae qui maxime, id dolor voluptatem blanditiis expedita unde. Autem beatae ipsam fugiat illum tenetur. Velit porro dolor nisi commodi asperiores ipsam ut sed fugit autem vitae. Nihil deleniti sit nobis ex veritatis molestiae laboriosam recusandae labore impedit praesentium totam ullam placeat mollitia soluta, voluptate commodi voluptatem deserunt laborum cum quidem quae voluptatibus. Mollitia, exercitationem atque laboriosam consequuntur modi assumenda? Harum, quae. Consectetur voluptas praesentium voluptate nihil quis culpa? Maxime enim, ipsum architecto soluta nulla at voluptates doloremque repellendus quas aliquid inventore dicta unde alias debitis nisi quod, sapiente reiciendis, sint laboriosam consequuntur dolor nesciunt quidem quis! Earum esse tenetur temporibus doloribus vitae reprehenderit, id quia! Quibusdam nostrum eveniet, autem rem consectetur recusandae, non quaerat, tempore dicta tenetur exercitationem? Voluptatem unde eligendi consectetur ad saepe voluptatibus ipsa vitae eveniet laudantium deleniti quasi aut, nulla debitis, sit eius maiores? Consectetur pariatur nam maiores, porro quae in consequatur corporis excepturi officiis praesentium, recusandae assumenda? Quibusdam magnam dolor facere quae harum dolorem rerum, eligendi ipsam delectus sequi animi molestiae? Commodi perferendis inventore quis quos vitae repellendus architecto, fuga exercitationem illo.");
    }
}

function cerrarVentana(){
    if(ventana.closed){
        alert("La ventana ha sido cerrada");
    }else{
        alert("Ventana aun abierta");
    }
}

function moverDerAbj(){
    ventana.moveBy(10,10);
}
function moverVentanaPosicion(){
    ventana.moveTo(100,100);
}

function aumentarTamVentanaPixels(){
    ventana.resizeBy(10,10);
}

function aumentarTamVentana(){
    ventana.resizeTo(400,200);
}

function scrollArriba(){
    ventana.scrollTo(0,0);
}

function moverScrollArriba() {
    ventana.scrollTo(0,10);
}
