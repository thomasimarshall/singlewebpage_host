(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      absract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      // resolve: {
      //   menuItems: ['$stateParams','InfoService', function ($stateParams, InfoService) {
      //     return InfoService.getMenuItems($stateParams.category);
      //   }]
      // }
    })
    .state('public.myinfo', {
      url: '/myinfo',
      templateUrl: 'src/public/info/my-info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        menuItems: ['InfoService', function (InfoService) {
          console.log("here")
          return InfoService.getMessage();
        }]
      }
    });
}
})();
