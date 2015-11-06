angular
    .module("app",[])
    .controller("MyController", MyController )
    .directive("helloWorld", helloWorld );

function MyController(){
    var vm = this;

    vm.persona = {
        name: 'pepe'
    }

    vm.procesarSaludo = function(){
        alert('saludo procesado!');
    }

}
function helloWorld(){
    

    return {
        // la directiva utiliza el scope del padre
        scope: true, // por defecto falso. en true crea el scope pero que hereda del scope padre
        // scope isolated: el scope no hereda mas del padre, se suele hacer para que la directiva no quiera redefinir al padre
        scope: { // sinc entre la directiva y el scope aislado de la directiva (los bindings se dan entre estos dos).
            name: '@nombre' // parametro de expresion11
            // sintaxis sugar para cuando las propiedades tienen el mismo nombre. 
            // para pasar los valores del scope a la directiva, si modificas el valor de la directiva no se actualiza el otro.
            name: '@', 
            name: '=', // sintaxis sugar para two way data binding
            submit: '&', // para funciones
        }
        replace: true, //reemplaza el elemento por lo que esta en el template DEPRECADO
        restrict: 'EA', // EA por defecto E: solo elemento , A: atributo
        // solo como atributo: para que interactue con otra directiva.
        // solo como elemento: cuando queremos insertar contenido adentro.
        template: '<input ng-model="nombre"/>{{nombre}}',
        // tambien:
        // templateUrl: '<input ng-model="nombre"/>{{nombre}}'

        controller: 'MyController', // puede tomar otro controller.
        controller: function($scope, $attrss){ // attrs permite acceder a los atributos del elemento.
            $attrs.nombre
            $scope.otraPropiedad = $scope.name;

        }
    }

}