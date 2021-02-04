## U6 - Examen (Vacunación)

En la siguiente página: https://covid-vacuna.app/ hay un enlace con información por comunidades autónomas de los datos de vacunación contra la Covid19. Si la web no funcionase, se incluye el fichero latest.json con la información necesaria.

Elabora una web con esos datos en formato JSON que contenga lo siguiente:

Un seleccionable, cuyas options deben ser generadas dinámicamente con respecto a la información del JSON que devuelve la petición a "insertar_comunidades.php". Contendrá únicamente los nombres de la comunidad autónoma correspondiente.
Un input numérico por cada uno de los datos que viene en el JSON de la WEB COVID19, salvo los datos de las vacunas de Pfizer y Moderna. NO ES NECESARIO QUE SEA GENERADO DINÁMICAMENTE.
Un botón "Modificar datos" para modificar los datos correspondiente a la comunidad autónoma que se seleccione, con la información que exista en los inputs anteriores. Realizará una petición POST sobre la url "actualizar_comunidad.php", donde le pasaremos en el body un JSON completo con la información de la comunidad actualizada (se enviará con cabecera "application/json"). Tendrá un formato como este:

Una vez que nos llegue el resultado correctamente (nos devuelve el JSON de la comunidad actualizada), deberemos reflejar los cambios en la tabla generada anteriormente SIN REALIZAR NINGUNA PETICIÓN ADICIONAL.
Un barra horizontal que separe lo anterior de lo siguiente
Un contenedor que vaya mostrando los resultados de las peticiones que se van haciendo (sin acumular resultado, es decir, que iremos machacando el valor de los resultados en una única línea).
Un barra horizontal que separe lo anterior de lo siguiente
Un botón que se titule "Cargar datos vacunación (XMLHttpRequest)": Realiza una petición al fichero JSON que sirve la web, los procesa y actualiza los datos que tenemos guardados en nuestra base de datos. Hay que tener en cuenta que hay que realizar dos peticiones: una para obtener los datos (método GET sobre la url que proporciona la web), y otra para insertar/actualizar todas las comunidades en la BD. Esta última será una petición POST sobre el fichero "insertar_comunidades.php". Esta petición se enviará con cabecera "application/json", e incluirá en el body un JSON completo con todas las comunidades. OJO. En los datos que vienen en el JSON hay un último objeto que tiene los datos Totales, información que debe ser desechada y no debe ser insertada en la base de datos.
Un botón que se titule "Cargar datos vacunación (Fetch)": Exactamente lo mismo que en la versión XMLHttpRequest, pero utilizando Fetch.
Una tabla generada dinámicamente con los datos provenientes del resultado de cargar los datos de vacunación. OJO, cuando se realiza la petición de inserción de los datos mediante la petición a "insertar_comunidades.php", devuelve a su vez otro JSON con los datos introducidos (filtrando la información de la distinción de datos entre vacunas de Pfizer y Moderna, que no nos interesa). Es esta información la que tiene que utilizarse para generar la tabla dinámicamente.
Se muestra un esquema de las peticiones a modo de resumen:
