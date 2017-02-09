(function () {
"use strict";

angular.module('common')
.service('SignUpService', SignUpService);

function SignUpService() {
  var service = this;

  service.saveUserInfo = function(userInput){
    service.savedUserInfo = userInput;
  }

  service.getUserInfo = function(){
    return service.savedUserInfo;
  }

}

})();
