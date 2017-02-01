(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {

  // Redirect to home page if no other URL matches
  $urlRouterProvider.otherwise('/');

  // *** Set up UI states ***
  $stateProvider

  // Home page
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })

  // // Premade list page
  // .state('categories', {
  //   url: '/main-list',
  //   templateUrl: 'src/shoppinglist/templates/main-menuapp.template.html',
  //   controller: 'MainShoppingListController as mainList',
  //   resolve: {
  //     items: ['MenuDataService', function (MenuDataService) {
  //       return MenuDataService.getItems();
  //     }]
  //   }
  // })
  //
  // .state('itemDetail', {
  //   url: '/item-detail/{itemId}',
  //   templateUrl: 'src/shoppinglist/templates/item-detail.template.html',
  //   controller: 'ItemDetailController as itemDetail',
  //   resolve: {
  //     item: ['$stateParams', 'MenuDataService',
  //           function ($stateParams, MenuDataService) {
  //             return MenuDataService.getItems()
  //               .then(function (items) {
  //                 return items[$stateParams.itemId];
  //               });
  //           }]
  //   }
  // });
}

})();
