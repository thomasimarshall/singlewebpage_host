(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);

  MenuDataService.$inject = ['$http']
  function MenuDataService($http) {
    var menuDataService = this;


    menuDataService.getAllCategories = function (){
      console.log("Entered menuDataService.getAllCategories")

       return $http.get('https://davids-restaurant.herokuapp.com/categories.json').then(function (response) {
         console.log(response.data)
         return response.data
       })

    }

    menuDataService.getItemsForCategory = function (categoryShortName){
      getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;

      // categoryShortName is A, B or C etc.

        return $http({
            method: 'GET',
            url: (getItemsForCategoryUrl)
        }).then(function(result) {
            console.log("Returning found items for category")
            console.log(result)
            return result;
        });

    }


  }

})();
