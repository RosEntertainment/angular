(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "http://davids-restaurant.herokuapp.com");


    function FoundItems() {
        var ddo = {
            templateUrl: 'list.html',
            restrict: 'E',
            scope: {
                foundItems: '<',
                onRemove: '&'
            },
            controller: FoundItemsController,
            controllerAs: 'ctrl',
            bindToController: true

        };

        return ddo;
    }

    function FoundItemsController() {

    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var ctrl = this;

        ctrl.searchInputValue = "";
        ctrl.found = [];
        ctrl.isListEmpty = false;

        ctrl.getMatchedMenuItems = function () {
            $("div.loader").show();
            ctrl.isListEmpty = false;
            if (ctrl.searchInputValue === "") {
                ctrl.isListEmpty = true;
                $("div.loader").hide();
                return;
            }
            var promise = MenuSearchService.getMatchedMenuItems(ctrl.searchInputValue);
            promise.then(function (response) {
                ctrl.found = response;
                ctrl.searchInputValue = "";
                if (ctrl.found.length === 0) {
                    ctrl.isListEmpty = true;
                }
                $("div.loader").hide();
            });
        };

        ctrl.removeMenuItem = function (index) {
            ctrl.found.splice(index, 1);
        };

    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {

            return $http({
                url: (ApiBasePath + "/menu_items.json")
            }).then(function (result) {

                var items = [];
                result.data.menu_items.forEach(function (element) {
                    if (element.description.toLowerCase().indexOf(searchTerm) !== -1) {
                        items.push(element);
                    }
                });
                return items;
            });

        }

    }

})();