// el controller es una funcion que manipula el scope.
angular
    .module("myExample")
    .controller("MyController", function($scope) {
        // api observable: ECMA 5/6, cuando cambia un valor de una propiedad se ejecuta una funcion
        // angular se desarrollo antes, asi que lo hace x si solo
        // digest cycle -> loop para chequear el cambio de las propiedades

        // evitar cargar propiedades en el scope!
        // y definir siempre modelo
        $scope.modelo = {
            saludo : "hola mundo"; 
        }


        // dentro de las funciones no usar el this, por eso defino vm.
        var vm = this;

        // ahora que usamos el as, usamos this que referencia la instancia del controller
        this.saludo = "hola mundo",

        this.switch = function($event){ // los metodos del controller reciben como parametro el evento
            vm.mostrar = vm.mostrar ? false : true;
        };

        vm.alumnos = [
            { nombre: 'a'},
            { nombre: 'b'},
            { nombre: 'c'}
        ];

    })


// no hacer esto:
scope = element.scope()
// $ -> publico, $ -> privado
scope.saludo = 'chau' // nada, no corre en el ciclo de vida de angular

scope.apply() // ahora si!

// si integramos angular con otras libs muchas veces es necesario llamar al apply



// ahora laburamos sin el $scope (buena practica)


// modulo en minuscula -> singleton
// controller en mayuscula -> se pueden definir ng-controller para ese controller en mas de un lugar del html

// angular usa herencia prototipada
// si cambio una propiedad en el padre tambien cambia en el hijo, al reves no!!!!
angular
    .controller("MySecondController", function(){ // no hace falta $scope
        // no defino modelo.saludo, lo toma del padre
    })