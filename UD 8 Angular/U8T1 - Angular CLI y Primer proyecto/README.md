## U8T1 - Angular CLI y Primer proyecto

Descripción general de CLI y referencia de comandos

Angular CLI es una herramienta de interfaz de línea de comandos que se usa para inicializar, desarrollar y mantener aplicaciones de angular. Puede usar la herramienta directamente en una shell de comandos.

Instalación de angular CLI

Las versiones principales de Angular CLI siguen la versión principal compatible de Angular, pero las versiones menores se pueden lanzar por separado.

Instale la CLI utilizando el administrador de paquetes npm:

npm install -g @angular/cli
Para obtener detalles sobre los cambios entre versiones e información sobre actualizaciones y/o versiones anteriores, consulte Versiones en GitHub: https://github.com/angular/angular-cli/releases

Flujo de trabajo básico

Invoque la herramienta en la línea de comando a través del ejecutable ng. La ayuda on-líne está disponible en la línea de comandos. Ingrese lo siguiente para enumerar comandos u opciones para un comando dado (generate) con una breve descripción.

ng help
ng generate --help
Para crear, construir y servir un nuevo proyecto angular básico en un servidor de desarrollo, vaya al directorio principal de su nuevo espacio de trabajo utilizando los siguientes comandos:

ng new my-first-project
cd my-first-project
ng serve
En su navegador, abra http://localhost:4200/ para ver la nueva aplicación en ejecución. Cuando usa el comando ng serve para crear una aplicación y servirla localmente, el servidor reconstruye automáticamente la aplicación y vuelve a cargar la página cuando cambia cualquiera de los archivos de origen.

Cuando ejecute ng new my-first-project, se creará una nueva carpeta, llamada my-first-project, en el directorio de trabajo actual. Como desea poder crear archivos dentro de esa carpeta, asegúrese de tener suficientes derechos en el directorio de trabajo actual antes de ejecutar el comando.

Si el directorio de trabajo actual no es el lugar adecuado para su proyecto, puede cambiar a un directorio más apropiado ejecutando cd <path-to-other-directory>.

Espacios de trabajo y archivos de proyecto

El comando ng new crea una carpeta Angular workspace de trabajo y genera un nuevo esqueleto de aplicación. Un espacio de trabajo puede contener múltiples aplicaciones y bibliotecas. La aplicación inicial creada por el comando ng new está en el nivel superior del espacio de trabajo. Cuando genera una aplicación o biblioteca adicional en un espacio de trabajo, entra en una subcarpeta projects/

Una aplicación recién generada contiene los archivos fuente de un módulo raíz, con un componente raíz y una plantilla. Cada aplicación tiene una carpeta src que contiene la lógica, los datos y los activos.

Se pueden editar los archivos generados directamente, o agregarlos y modificarlos utilizando los comandos de la CLI. Use el comando ng generate para agregar nuevos archivos para componentes y servicios adicionales, y codifique para nuevas canalizaciones, directivas, etc. Los comandos como add y generate, que crean u operan en aplicaciones y bibliotecas, deben ejecutarse desde un espacio de trabajo o carpeta de proyecto.

Ver más sobre la estructura de archivos de Workspace file structure.
Área de trabajo y configuración del proyecto

Se crea un único archivo de configuración del espacio de trabajo, angular.json, en el nivel superior del espacio de trabajo. Aquí es donde puede establecer valores predeterminados por proyecto para las opciones de comando para CLI, y especificar configuraciones para usar cuando CLI construye un proyecto con diferentes objetivos.

El comando ng config le permite establecer y recuperar valores de configuración desde la línea de comandos, o puede editar el archivo angular.json directamente. Tenga en cuenta que los nombres de opciones en el archivo de configuración deben usar camelCase, mientras que los nombres de opciones proporcionados a los comandos pueden usar camelCase o dash-case.

Ver más sobre Workspace Configuration.
Vea complete schema para angular.json.
Sintaxis del lenguaje de comandos de la CLI

La sintaxis de comandos tiene la siguiente estructura:

ng commandNameOrAlias requiredArg [optionalArg] [options]
La mayoría de los comandos, y algunas opciones, tienen alias. Los alias se muestran en la declaración de sintaxis para cada comando.
Los nombres de las opciones tienen como prefijo un guión doble (-). Los alias de opciones tienen como prefijo un solo guión (-). Los argumentos no tienen prefijo. Por ejemplo:
ng build my-app -c production
Normalmente, el nombre de un artefacto generado se puede dar como argumento del comando o se puede especificar con la opción --name.
Los nombres de argumentos y opciones se pueden dar en camelCase or dash-case. --myOptionName es equivalente a --my-option-name.
Opciones booleanas y enumeradas

Las opciones booleanas tienen dos formas: --thisOption establece el indicador, --noThisOption lo borra. Si no se proporciona ninguna de las opciones, el indicador permanece en su estado predeterminado, como se detalla en la documentación de referencia.

Los valores permitidos se proporcionan con cada descripción de opción enumerada, con el valor predeterminado en negrita.

Caminos relativos

Las opciones que especifican archivos se pueden dar como rutas absolutas o como rutas relativas al directorio de trabajo actual, que generalmente es el espacio de trabajo o la raíz del proyecto.

Esquemas

Los comandos ng generate y ng add toman como argumento el artefacto o la biblioteca que se generará o agregará al proyecto actual. Además de las opciones generales, cada artefacto o biblioteca define sus propias opciones en un esquema. Las opciones esquemáticas se suministran al comando en el mismo formato que las opciones de comando inmediato.

Descripción general del comando

Command Alias Description
add Agrega soporte para una biblioteca externa a su proyecto.
analytics Configurar la recopilación de métricas de uso de angular CLI. Ver https://v8.angular.io/cli/usage-analytics-gathering.
build b Compila una aplicación angular en un directorio de salida llamado dist / en la ruta de salida dada. Debe ejecutarse desde un directorio de espacio de trabajo.
config Compilar una aplicación angular en un directorio de salida llamado dist / en la ruta de salida dada. Debe ejecutarse desde un directorio de espacio de trabajo.
deploy d Invoca el generador de despliegue para un proyecto específico o para el proyecto predeterminado en el espacio de trabajo.
doc d Abre la documentación oficial de Angular (angular.io) en un navegador y busca una palabra clave determinada.
e2e e Crea y sirve una aplicación Angular, luego ejecuta pruebas de extremo a extremo utilizando Protractor.
generate g Genera y / o modifica archivos basados ​​en un esquema.
help Enumera los comandos disponibles y sus breves descripciones.
lint l Ejecuta herramientas de linting en el código de la aplicación Angular en una carpeta de proyecto determinada.
new n Crea un nuevo espacio de trabajo y una aplicación angular inicial.
run Ejecuta un objetivo de Architect con una configuración de generador personalizada opcional definida en su proyecto.
serve s Crea y sirve su aplicación, reconstruyéndose en los cambios de archivos.
test t Ejecuta pruebas unitarias en un proyecto.
update Actualiza su aplicación y sus dependencias. Véase https://update.angular.io/
version v Salidas versión Angular CLI.
xi18n Extrae mensajes i18n del código fuente.
TAREA: Crea tu proyecto "Hola mundo" inicial. El proyecto deberá llamarse "ang_nombre_primerApellido", donde nombre y primerapellido deberá ser tu nombre y tu primer apellido.

Añade un componente que tenga una lista de la compra y que se muestre al final del componente que crea Angular por defecto.
