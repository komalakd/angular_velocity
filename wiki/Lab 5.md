Lab 5
Ejercicio 1
Crear un servicio productSvc encargado de la recuperación de datos asociados a los productos a mostrar. Llamar a la función correspondiente de dicho servicio desde StoreController para cargar la propiedad products del mismo.

Mover la definición del array gems a un nuevo archivo store-products.json.

Desde el nuevo servicio creado recuperar los datos contenidos en el archivo JSON a través de una llamada AJAX. No exponer el response por fuera del servicio.

Ejercicio 2
Reorganizar la estructura de los directorios dividiendo primero por funcionalidad y luego por tipo de componente (ver guía de estilos).
Ejercicio 3
Mover los tags script al final del elemento body. Para que siga funcionando la directiva ng-cloak agregar la siguiente regla css
[ng\:cloak], [ng-cloak], .ng-cloak { display: none; }
Optimizar la carga de templates para que no haga un request por template (usando gulp-html2js por ej.). Los archivos generados automáticamente deben generarse dentro del directorio build/
Ejercicio 4
Automatizar la carga de scripts y estilos, para no tener que insertarlos manualmente en la página cada vez que se crea uno nuevo (usando gulp-inject por ej.). Para eso, mover los archivos fuentes a un directorio src/ y modificar los tasks para que se encargue de copiar y generar los archivos procesados en el directorio build/.

Al mover los scripts al directorio build/ aprovechar para "wrapearlos" en una immediate function (usando gulp-wrap por ej.). La transformación debería dejar los archivos con el siguiente formato...

(function() {
    'use strict';

/* CONTENT HERE */

})();
Agregar la directiva ng-strict-di al elemento en el cual se aplicó ng-app y modificar la automatización de los scripts para que complete las anotaciones necesarias para que siga funcionando la inyección de dependencias (ver ng-annotate).
Ejercicio 5
Mejorar la automatización de tareas agregando concatenación y compresión a los estilos y scripts (usando gulp-concat y gulp-uglify por ej.). Idealmente sólo se tendrían que correr estas optimizaciones al recibir una flag --production.

Agregar una constante de angular para llamar a debugInfoEnabled de manera condicional. La constante deberá ser false en desarrollo y true a la hora de pasar a producción. Utilizar ng-constant