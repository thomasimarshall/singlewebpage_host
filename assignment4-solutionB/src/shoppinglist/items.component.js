(function () {
'use strict';

angular.module('data')
.component('items', {
  templateUrl: 'src/shoppinglist/templates/menuapp.template.html',
  bindings: {
    items: '<'
  }
});

})();
