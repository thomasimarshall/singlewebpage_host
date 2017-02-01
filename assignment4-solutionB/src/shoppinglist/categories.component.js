(function() {
    'use strict';

    angular.module('data')
        .controller('categories', {
            templateUrl: 'src/shoppinglist/templates/categories.template.html',
            bindings: {
                items: '<'
            }
        });

})();
