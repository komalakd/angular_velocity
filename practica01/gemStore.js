angular
    .module("gemStore",[])
    .controller("StoreController", function(){
        this.gem = { name: 'Azurite', price: 2.95, canPurchase: true };
        this.gems = [
            { name: 'Azurite', price: 2.75 },
            { name: 'Bloodstone', price: 5.95 },
            { name: 'Zircon', price: 3.95 }
        ];
    });
