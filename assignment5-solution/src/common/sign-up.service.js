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
    console.log("returning saved user info...");
    console.log(service.savedUserInfo);
    return service.savedUserInfo;
  }


}

})();
