angular
    .module("gemStore",[])
    .controller("StoreController", StoreController )
    .controller("GalleryController", GalleryController )
    .controller("ReviewController", ReviewController )
    .directive("productTabs", productTabs )
    .directive("productDescription", productDescription )
    .directive("productSpecs", productSpecs )
    .directive("productReviews", productReviews )
    .directive("productGallery", productGallery )
    ;

function productDescription() {
    return {
        restrict: 'E',
        templateUrl: 'product_description.html'
    };
}

function productSpecs() {
    return {
        restrict: 'E',
        templateUrl: 'product_specs.html'
    };
}

function productReviews() {
    return {
        restrict: 'E',
        templateUrl: 'product_reviews.html'
    };
}

function productGallery() {
    return {
        restrict: 'E',
        templateUrl: 'product_gallery.html',
        controller: GalleryController,
        controllerAs: 'galleryController'
    };
}

function StoreController(){
    var vm = this;
    vm.gems = [
        { 
            name: 'Azurite',
            description: 'Azurite is a soft, deep blue copper mineral produced by weathering of copper ore deposits. It is also known as Chessylite after the type locality at Chessy-les-Mines near Lyon, France.[2] The mineral, a carbonate, has been known since ancient times, and was mentioned in Pliny the Elder\'s Natural History under the Greek name kuanos (κυανός: "deep blue," root of English cyan) and the Latin name caeruleum.[4] The blue of azurite is exceptionally deep and clear, and for that reason the mineral has tended to be associated since antiquity with the deep blue color of low-humidity desert and winter skies. The modern English name of the mineral reflects this association, since both azurite and azure are derived via Arabic from the Persian lazhward (لاژورد), an area known for its deposits of another deep blue stone, lapis lazuli ("stone of azure").',
            price: 2.75 ,
            canPurchase: true,
            soldOut: false,
            imgs: [
                'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8c/Azurite-284714.jpg/150px-Azurite-284714.jpg',
                'http://upload.wikimedia.org/wikipedia/commons/9/97/Azurite-Malachite-59275.jpg'
            ],
            shine: 'En esta pestaña se debería mostrar la propiedad shine...' ,
            reviews: [
                {
                    author: 'andresvalle.isi@gmail.com',
                    body: 'Review#1',
                    stars: 5,
                    createdOn: 1234567890123
                },
                {
                    author: 'pcorrenti@gmail.com',
                    body: 'Review#2',
                    stars: 2,
                    createdOn: 1234567890123
                }
            ]
        },
        { 
            name: 'Bloodstone',
            description: 'The mineral heliotrope, also known as bloodstone, is a form of chalcedony (which is a cryptocrystalline mixture of quartz and its monoclinic polymorph moganite). The "classic" bloodstone is green chalcedony with red inclusions of iron oxide or red jasper. Sometimes the inclusions are yellow, in which case the mineral is given the name plasma.',
            price: 5.95 ,
            canPurchase: false,
            soldOut: false,
            imgs: [],
            shine: 'En esta pestaña se debería mostrar la propiedad shine...' ,
            reviews: []
        },
        { 
            name: 'Zircon',
            description: 'sarasa sarasa sarasa sarasa...',
            price: 3.95,
            canPurchase: true,
            soldOut: true,
            imgs: [],
            shine: 'En esta pestaña se debería mostrar la propiedad shine...',
            reviews: []
        }
    ];
}

function productTabs() {
    return {
        restrict: 'E',
        templateUrl: 'product_tabs.html',
        controller: TabController,
        controllerAs: 'tab'
    }; 
}

function TabController(){
    var vm = this;

    vm.tab = 1;
    vm.setTab = function(tab){
        vm.tab = tab;
    };
    vm.isSet = function(tab){
        return vm.tab == tab;
    };
}

function GalleryController(){
    var vm = this;

    vm.current = 0;
    vm.setCurrent = function(current){
        if( current ){
            vm.current = current;
        }else{
            vm.current = 0;
        }
    };
    vm.isSet = function(current){
        return vm.current == current;
    };
}

function ReviewController(){
    var vm = this;

    vm.review = {};

    vm.reset = function(product){
        vm.review = {};
    }

    vm.addReview = function(gem){
        console.log('addReview');
        vm.review.createdOn = Date.now();
        gem.reviews.push(vm.review);
        this.reset();
        return true;
    }

}