angular
    .module("gemStore",[])
    .filter('case',function(){
        var filtro = function(input,caseType, symbol){
            // un filtro debe retornar una funcion!
            if( caseType == 'upper' ) return input.toUpperCase() + symbol;
            if( caseType == 'lower' ) return input.toLowerCase() + symbol;
            return input + symbol;
        };

        filtro.$stateful = true; // ?

        return filtro;
    })
    .controller("StoreController", function(caseFilter){ // inyectamos el filtro al controller
        this.isRed = true;
        this.valor = 100.000001;
        this.alumnos = [
            { nombre: 'Gsd' },
            { nombre: 'Xasd' },
            { nombre: 'Yasd' },
            { nombre: 'Zasd' },
            { nombre: 'ASD' }
        ];
        this.moneda = 'patacones!';
        this.fecha = new Date();
        this.mostrarFecha = true;
        this.noASD = function(alumno){
            if( alumno.nombre == 'ASD' ) 
                return false
            return true
        }
    });
