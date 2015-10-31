angular
    .module("gemStore",[])
    .controller("StoreController", function(){
        this.imgs = {
            angular: 'https://angularjs.org/img/AngularJS-large.png',
            google: 'https://www.google.es/trends/resources/2327917647-google-icon.png'
        }

        this.gems = [
            { name: 'Azurite', price: 2.75 , canPurchase: true, soldOut: false, imgs: [this.imgs.google,this.imgs.angular] },
            { name: 'Bloodstone', price: 5.95 , canPurchase: true, soldOut: false, imgs: [] },
            { name: 'Zircon', price: 3.95, canPurchase: true, soldOut: true, imgs: [this.imgs.google]  }
        ];
    })
    .controller("TabController", function(){
        this.tab = 1;
        this.setTab = function(tab){
            this.tab = tab;
        };
        this.isSet = function(tab){
            return this.tab == tab;
        };
    });