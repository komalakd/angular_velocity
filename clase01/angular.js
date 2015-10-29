// nombre del modulo establecido en ng-app, y en un array las dependencias del mismo. todo se llama set. 
// notacion fluent!
// si no se especifican [] es un get en vez de un set
angular.module("example",[]) 

angular.module("myModule",[])

// asi creamos una dependencia para con otro modulo
// obviamente los modulos deben ser cargados desde el html, las dependencias no se incluyen solas
// podemos decir que un modulo depende de otro si bien todavia no fue declarado
angular.module("myModule2",["myModule"])

// podemos extenderlo de esta manera si myModule esta en otro archibvo
myModule.controller() // ...

// angular extiende atributos con los atributos ng-* (para no ensuciar el html)
// tambien usamos, respetando la especificacion:
// data-ng-appp
// x-ng-appp

// normalizacion de directivas
data-ng-sarasa-qwe -> NgSarasaQwe

// tambien podemos crear elementos nuevos:
my-custom-element -> MyCustomElement

// tambien podemos crear clases
class="ng-class: { }" // ???