(function () {
'use strict';

angular.module('data')
.service('MenuDataService', MenuDataService);


MenuDataService.$inject = ['$q', '$timeout']
function MenuDataService($q, $timeout) {
  var service = this;

  service.getAllCategories = function() {

      return $http({
          method: 'GET',
          url: ("https://davids-restaurant.herokuapp.com/categories.json")
      }).then(function(result) {
          console.log("Returning found catagories")
          console.log(result)
          return result;
      });
  }

  service.getItemsForCategory(categoryShortName) = function() {

      getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + categoryShortName;
      return $http({
          method: 'GET',
          url: (getItemsForCategoryUrl)
      }).then(function(result) {
          console.log("Returning found items for category")
          console.log(result)
          return result;
      });
  }






  /// template beyond here - DELETE

  // List of shopping items
  var items = [];

  // Pre-populate a no cookie list
  items.push({
    name: "Sugar",
    quantity: "2 bags",
    description: "Sugar used for baking delicious umm... baked goods."
  });
  items.push({
    name: "flour",
    quantity: "1 bags",
    description: "High quality wheat flour. Mix it with water, sugar, 2 raw eggs."
  });
  items.push({
    name: "Chocolate Chips",
    quantity: "3 bags",
    description: "Put these in the dough. No reason, really. Gotta store them somewhere!"
  });

  // Simulates call to server
  // Returns a promise, NOT items array directly
  service.getItems = function () {
    var deferred = $q.defer();

    // Wait 2 seconds before returning
    $timeout(function () {
      // deferred.reject(items);
      deferred.resolve(items);
    }, 800);

    return deferred.promise;
  };
}

})();
