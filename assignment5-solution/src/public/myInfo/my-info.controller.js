(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$http', 'ApiPath', 'SignUpService'];
function MyInfoController($http, ApiPath, SignUpService) {
  var $ctrl = this;
  $ctrl.basePath = ApiPath;
  $ctrl.userInfo = SignUpService.getUserInfo();
}

})();
