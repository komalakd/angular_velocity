(function() {
    'use strict';
    
    angular
        .module('gemStore')
        .directive('productGallery', productGallery);
        
    function productGallery() {
        
        var directive = {
            restrict: 'E',
            templateUrl: 'app/gem-store/directives/product-gallery/product-gallery.html',
            controller: GalleryController,
            controllerAs: 'gallery'
        }
        
        return directive;
        
    }
    
    function GalleryController() {
        var vm = this;
        vm.current = 0;
        vm.setCurrent = setCurrent;
        
        function setCurrent(current) {
            vm.current = current || 0;
        }
    }
    
})();