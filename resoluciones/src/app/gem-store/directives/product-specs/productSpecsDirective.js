(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .directive('productSpecs', productSpecs);
        
    function productSpecs() {
        
        var directive = {
            restrict: 'A',
            templateUrl: 'app/gem-store/directives/product-specs/product-specs.html'
        }
        
        return directive;
        
    }
    
})();