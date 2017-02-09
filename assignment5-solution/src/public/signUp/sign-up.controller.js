(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'SignUpService'];
function SignUpController($http, SignUpService) {
  var $ctrl = this;

  //$ctrl.found = false;


  $ctrl.submit = function(){
    $ctrl.submitted = true;
    var getItemsForCategoryUrl = "https://davids-restaurant.herokuapp.com/menu_items.json?category=" + $ctrl.user.dish.toUpperCase();

    $http.get(getItemsForCategoryUrl).then(function(response) {
      if(response.data.menu_items.length > 0){
        console.log("found item")
        console.log(response.data.menu_items)

        $ctrl.found = true;
        //$ctrl.submitted = false;

        console.log("saving user info...")
        SignUpService.saveUserInfo($ctrl.user);

      } else {
        $ctrl.found = false;
      }
    });
          // Handle error here)


  }

  // $ctrl.menuItems = menuItems;
}

})();
