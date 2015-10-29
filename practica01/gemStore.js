
(function(){

    'use strict'

    angular
        .module("gemStore",[])
        .controller("StoreController", StoreController);

    function StoreController(){
        this.gem = { name: 'Azurite', price: 2.95, canPurchase: true, soldOut: false };
        this.gems = [
            { name: 'Azurite', price: 2.75 , canPurchase: true, soldOut: false},
            { name: 'Bloodstone', price: 5.95 , canPurchase: true, soldOut: false},
            { name: 'Zircon', price: 3.95, canPurchase: true, soldOut: true }
        ];
    }

});