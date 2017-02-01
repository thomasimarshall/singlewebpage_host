(function() {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService);

    MenuDataService.$inject = ['$http']

    function MenuDataService($http) {
        var menuDataService = this;

        menuDataService.getAllCategories = function() {

            return $http.get('https://davids-restaurant.herokuapp.com/categories.json')
                .then(function(response) {
                    return response.data
                })
        }

        menuDataService.getItemsForCategory = function(categoryShortName) {
          
            var getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;

            return $http.get(getItemsForCategoryUrl)
                .then(function(response) {
                    return response.data.menu_items;

                })
        }
    }
})();
