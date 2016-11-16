(function() {
    'use strict'

    angular.module('ShoppingListCheckOff', [])
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuy = this

        toBuy.items = ShoppingListCheckOffService.getToBuy();

        toBuy.buyItem = function(index) {
            ShoppingListCheckOffService.buyItem(index);
        }
    }

    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var bought = this;

        bought.items = ShoppingListCheckOffService.getBought();
    }

    function ShoppingListCheckOffService() {
        var service = this;

        var buyList = [{
            name: "cookies",
            quantity: 1
        }, {
            name: "cola",
            quantity: 21
        }, {
            name: "crisps",
            quantity: 3
        }, {
            name: "chocolates",
            quantity: 13
        }, {
            name: "mints",
            quantity: 14
        }];

        var boughtList = [];

        console.log(buyList)

        service.getToBuy = function() {
            return buyList;
        }

        service.getBought = function() {
            return boughtList;
        }

        service.buyItem = function(index) {
            console.log(index);
            boughtList.push(buyList[index]);
            buyList.splice(index, 1);
        }
    }

})();
