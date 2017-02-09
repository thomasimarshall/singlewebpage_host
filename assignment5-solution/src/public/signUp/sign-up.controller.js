(function () {
"use strict";

angular.module('public')
.controller('SignUpController', SignUpController);

SignUpController.$inject = ['$http', 'SignUpService'];
function SignUpController($http, SignUpService) {
  var $ctrl = this;

  $ctrl.submit = function(){
    $ctrl.submitted = true;
    var favItemUrlTemplate = "https://swpa-coursera.herokuapp.com/menu_items/short_name.json";
    var favItemUrl = favItemUrlTemplate.replace("short_name", $ctrl.user.dish.toUpperCase())

    $http.get(favItemUrl)
      .then(function(response) {
        $ctrl.found = true;
        var favItem = response.data
        $ctrl.user.favItem = favItem;

        SignUpService.saveUserInfo($ctrl.user);
    })
      .catch(function(response) {
        $ctrl.found = false;
      });
  }

}

})();
