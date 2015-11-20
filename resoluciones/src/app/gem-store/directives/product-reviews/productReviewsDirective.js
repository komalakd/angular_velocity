(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .directive('productReviews', productReviews);
        
    function productReviews() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'app/gem-store/directives/product-reviews/product-reviews.html'
        }
        
        return directive;
        
    }
    
})();