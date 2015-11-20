(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .service('productSvc' , ProductSvc);    
        
    function ProductSvc($http) {
        
        this.findAll = findAll;
        
        function findAll() {
            return $http.get('store-products.json')
                .then(function(response) {
                    return response.data;
                });
        }
        
    }

})();