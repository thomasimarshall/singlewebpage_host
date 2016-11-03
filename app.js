(function () {
'use strict'

angular.module('LunchCheck', [])
.controller('LunchCheckController', LunchCheckController);

function LunchCheckController ($scope) {

  $scope.menu = "";

  $scope.checkIfTooMuch = function () {

    var itemCount = $scope.menu.split(",").length;

    if ($scope.menu == "") {
      $scope.message = "Please enter data first"
    } else if (itemCount < 4) {
      $scope.message = "Enjoy!"
    } else {
      $scope.message = "Too much!"
    }

    console.log($scope.message);
  }

}



})();
