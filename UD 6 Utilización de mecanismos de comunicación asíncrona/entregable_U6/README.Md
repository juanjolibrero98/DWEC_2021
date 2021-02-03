## U6 - Entregable (Normandía)

Para la película de Steven Spielberg "Saving Private Ryan", el equipo de documentación comenzó a recopilar información sobre las armas de la batalla de Normandía de la escena inicial. Para ayudarlos, vamos a desarrollar una web para mostrar las armas de los aliados y del eje de manera ordenada.

Se adjunta el fichero .sql de la base de datos «normandia» con la tabla «armas». Se almacena la información de armas, su descripción, una imagen, y el bando al que pertenece cada una (1: aliados; 2: eje). También se adjunta el fichero listar_armas.php al que hacer la petición, así como las diferentes imágenes de las armas.

Desarrolla una sencilla página web en la que, de manera asíncrona, se muestren todas las armas en una tabla generada dinámicamente (con su nombre, imagen, descripción y bando como elementos de cabecera de la tabla) que hasta entonces tiene documentadas el equipo de documentación, así como realizar una selección de armas por bando con un seleccionable generado dinámicamente (este seleccionable estará al lado de los botones), en el que se muestren dos opciones posibles "Aliados" y "Eje". Se debe hacer una única petición mediante un botón, y luego la selección por bando NO DEBE HACER POSTERIORES PETICIONES.

La petición para mostrar el listado se hará sobre la URL "listar_armas.php" y será con método "GET". Deberás comprobar qué devuelve la petición para procesarla adecuadamente.

La web deberá tener dos botones diferentes con los que hacer la petición. Uno para la versión con XMLHttpRequest y otro botón para la versión con Fetch, pero deberán hacer exactamente lo mismo.
