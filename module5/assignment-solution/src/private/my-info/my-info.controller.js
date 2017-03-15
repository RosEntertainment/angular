(function () {
    "use strict";

    angular.module('private')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['SignUpService', 'ApiPath'];
    function MyInfoController(SignUpService, ApiPath) {
        var ctrl = this;

        ctrl.isUserLoggedIn = SignUpService.isUserLoggedIn();

        ctrl.user = SignUpService.getUser();

        ctrl.basePath = ApiPath;
    }


})();
