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
                templateUrl: 'src/home/home.template.html'
            })

            .state('categories', {
                url: '/categories',
                templateUrl: 'src/data/categories/categories.template.html',
                controller: 'CategoriesController as catCtrl',
                resolve: {
                    categories: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })

            .state('categories.items', {
                url: '/items/{itemId}',
                templateUrl: 'src/data/items/items.template.html',
                controller: "ItemsController as itemDetail",
                resolve: {
                    items: ['$stateParams', 'MenuDataService',
                        function ($stateParams, MenuDataService) {
                            return MenuDataService.getItemsForCategory($stateParams.itemId);
                        }]
                }
            });

    }

})();