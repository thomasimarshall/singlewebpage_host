(function () {
"use strict";

angular.module('common')
.service('InfoService', InfoService);


function InfoService() {
  var service = this;

  service.getMessage = function(){
    console.log("HERE IS THE MESSAGE");

    var testy = 123;
    return testy
  }

}

})();
