var gem = { name: 'Azurite', price: 2.95 };

var gems = [
    { name: 'Azurite', price: 2.75 },
    { name: 'Bloodstone', price: 5.95 },
    { name: 'Zircon', price: 3.95 }
];

angular
    .module("gemStore",[])
    .controller("StoreController", function(){
        this.gem = gem
    });
