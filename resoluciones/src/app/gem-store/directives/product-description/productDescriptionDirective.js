(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .directive('productDescription', productDescription);
        
    function productDescription() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'app/gem-store/directives/product-description/product-description.html'
        }
        
        return directive;
        
    }
    
})();