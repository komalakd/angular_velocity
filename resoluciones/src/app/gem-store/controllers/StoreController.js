(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .controller('StoreController', StoreController);
        
    function StoreController($log, productSvc) {
        var vm = this;
        vm.products = [];
        vm.purchase = purchase;
        
        fillProducts();
        
        function fillProducts() {
            productSvc.findAll().then(function(products) {
                vm.products = products;
            });
        }
        
        function purchase(product) {
            $log.warn('StoreController.purchase NOT_IMPLEMENTED. Trying to buy %s', product.name);
        }
    }
    
})();