(function () {
"use strict";

angular.module('public')
.controller('MyInfoController', MyInfoController);

MyInfoController.$inject = ['$http', 'ApiPath', 'SignUpService'];
function MyInfoController($http, ApiPath, SignUpService) {

  console.log("hello im here");

  var baseUrl = document.location.origin;

  console.log(baseUrl);
  var $ctrl = this;
  $ctrl.basePath = ApiPath;

  $ctrl.userInfo = SignUpService.getUserInfo();
  console.log("$ctrl.userInfo");
  console.log($ctrl.userInfo);



}

})();
