(function () {
    'use strict';

    angular.module('data')
        .service('MenuDataService', MenuDataService)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


    MenuDataService.$inject = ['$http', 'ApiBasePath'];
    function MenuDataService($http, ApiBasePath) {
        var service = this;

        service.getItemsForCategory = function (categoryShortName) {
            console.log(categoryShortName);
            return $http({
                url: (ApiBasePath + "/menu_items.json?category=" + categoryShortName)
            }).then(function (result) {
                return result.data.menu_items;
            });
        };

        service.getAllCategories = function () {
            return $http({
                url: (ApiBasePath + "/categories.json")
            }).then(function (result) {
                return result.data;
            });
        };
    }

})();