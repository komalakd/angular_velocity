(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .directive('productTabs', productTabs);
        
    function productTabs() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'app/gem-store/directives/product-tabs/product-tabs.html',
            controller: TabsController,
            controllerAs: 'tab'
        }
        
        return directive;
        
    }
    
    function TabsController() {
        var vm = this;
        vm.tab = 1;
        vm.setTab = setTab;
        vm.isSet = isSet;
        
        function setTab(tab) {
            vm.tab = tab;
        }
        
        function isSet(tab) {
            return vm.tab === tab;
        }
    }
    
})();