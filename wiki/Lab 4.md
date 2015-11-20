Lab 4
Ejercicio 1
Mover el contenido del tab description a un archivo separado e incluirlo a través de ng-include.
Aclaración: si la url que usan comienza con file:// Chrome les va a tirar error de CORS. Usen Firefox o levanten un server local para servir los archivos (si tienen node pueden usar http-server)
Ejercicio 2
Crear una directiva productDescription de tipo elemento que utilice el template creado en el ejercicio anterior.

Reemplazar el uso de ng-include por el uso de la nueva directiva.

Ejercicio 3
Crear e implementar una directa productSpecs de tipo atributo que sea usada para insertar el contenido actual de la tab Specs

Crear e implementar una directiva productReviews de tipo element que sea usada para insertar el contenido actual de la tab Reviews

Ejercicio 4
Crear una directiva productTabs que concentre la lógica de las tabs. Eliminar la directiva ng-controller que referenciaba a TabsController e incluir dicha lógica en el controlador de la directiva.
Ejercicio 5
Crear una directiva productGallery que concentre la lógica de la galería. Eliminar la directiva ng-controller que referenciaba a GalleryController e incluir dicha lógica en el controlador de la directiva.