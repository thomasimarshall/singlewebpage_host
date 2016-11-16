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
            quantity: 7
        }, {
            name: "drinks",
            quantity: 2
        }, {
            name: "chocolates",
            quantity: 30
        }, {
            name: "apples",
            quantity: 4
        }, {
            name: "oranges",
            quantity: 2
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
