(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['info', '$http'];
function InfoController(info, $http) {
  var $ctrl = this;

  $ctrl.found = false;

  $ctrl.submit = function(){
    $ctrl.submitted = true;
    console.log("$ctrl");
    console.log($ctrl);

    var getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + $ctrl.dish.toUpperCase();
    console.log(getItemsForCategoryUrl);

    $http.get(getItemsForCategoryUrl)
                .then(function(response) {
                  console.log("found");
                  console.log(response.data.menu_items.length)

                  if(response.data.menu_items.length > 0){
                    $ctrl.found = true;
                    $ctrl.submitted = false;
                  } else {
                    $ctrl.found = false;
                  }
                });
          // Handle error here)


  }

  // $ctrl.menuItems = menuItems;
}

})();
