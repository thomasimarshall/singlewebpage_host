(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

InfoController.$inject = ['info'];
function InfoController() {
  var $ctrl = this;

  console.log("$ctrl.info");
  console.log($ctrl.info);
  // $ctrl.menuItems = menuItems;
}

})();
