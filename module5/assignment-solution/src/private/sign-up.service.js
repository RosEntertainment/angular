(function () {
    "use strict";

    angular.module('private')
        .service('SignUpService', SignUpService);


    SignUpService.$inject = ['$http', 'ApiPath'];
    function SignUpService($http, ApiPath) {
        var service = this;
        service.user = {};

        service.isUserLoggedIn = function () {
            return !angular.equals({}, service.user);
        };

        var getMenuItem = function (menuItemShortName) {
            return $http.get(ApiPath + '/menu_items/' + menuItemShortName + '.json');
        };

        service.logUser = function (user) {
            service.user = user;
            getMenuItem(user.menuNumber).then(function (response) {
                service.user.menuNumber = response.data;
            });
        };

        service.getUser = function () {
            return service.user;
        };

        service.getMenuItem = function (menuItemShortName) {
            return getMenuItem(menuItemShortName);
        };

    }

})();
