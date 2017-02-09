(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'SignUpService'];
function SignUpController($http, SignUpService) {
  var $ctrl = this;

  //$ctrl.found = false;


  $ctrl.submit = function(){
    console.log("entered submit")
    $ctrl.submitted = true;
    //var getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + $ctrl.user.dish.toUpperCase();
    var favItemUrlTemplate = "https://swpa-coursera.herokuapp.com/menu_items/short_name.json";

    var favItemUrl = favItemUrlTemplate.replace("short_name", $ctrl.user.dish.toUpperCase())
    console.log(favItemUrl);

    $http.get(favItemUrl)
      .then(function(response) {
        $ctrl.found = true;

        var favItem = response.data
        $ctrl.user.favItem = favItem;
        
        console.log("saving user info...")
        SignUpService.saveUserInfo($ctrl.user);
    })
      .catch(function(response) {
        console.log("Item not found!")
        console.log(response)
        $ctrl.found = false;
      });


  }

  // $ctrl.menuItems = menuItems;
}

})();
