(function() {
    'use strict'

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItemsDirective)


    NarrowItDownController.$inject = ['MenuSearchService'];

    function NarrowItDownController(MenuSearchService) {
        var viewList = this;
        viewList.getList = function(searchTerm) {
            var promise = MenuSearchService.getMatchedMenuItems(searchTerm).then(function(result) {
                viewList.found = result;
            });

            viewList.removeItem = function(itemIndex) {
                MenuSearchService.removeItem(itemIndex);
            };
        }
    }

    MenuSearchService.$inject = ['$http']

    function MenuSearchService($http) {
        var service = this;
        var foundItems = [];

        service.getMatchedMenuItems = function(searchTerm) {

            return $http({
                method: 'GET',
                url: ("https://davids-restaurant.herokuapp.com/menu_items.json")
            }).then(function(result) {
                foundItems = [];
                for (var i = 0; i < result.data.menu_items.length; i++) {
                    var index;
                    index = result.data.menu_items[i].description.indexOf(searchTerm)

                    if (searchTerm !== undefined &&
                        searchTerm != "" &&
                        index != -1) {
                        foundItems.push(result.data.menu_items[i])
                    }
                }
                return foundItems;
            });
        }

        service.removeItem = function(itemIndex) {
            foundItems.splice(itemIndex, 1);
        };

    }

    function FoundItemsDirective() {
        var ddo = {
            restrict: 'E',
            templateUrl: 'loader/itemsloaderindicator.template.html',
            scope: {
                foundItems: '<',
                onRemove: '&'

            },
            controller: FoundItemsDirectiveController,
            controllerAs: 'list',
            bindToController: true
        };

        return ddo;
    }


    function FoundItemsDirectiveController() {
    }

})();
