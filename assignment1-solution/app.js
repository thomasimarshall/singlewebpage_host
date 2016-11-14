(function() {
    'use strict'

    angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];

    function LunchCheckController($scope) {
        $scope.menu = ""
        $scope.checkIfTooMuch = function() {

            var itemList = $scope.menu.split(",");
            var itemCount = itemList.length;

            if ($scope.menu == "") {
                $scope.message = "Please enter data first"
            } else if (itemCount < 4) {
                $scope.message = "Enjoy!"
            } else {
                $scope.message = "Too much!"
            }
        }
    }

})();
