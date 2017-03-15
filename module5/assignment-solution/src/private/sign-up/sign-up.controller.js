(function () {
    "use strict";

    angular.module('private')
        .controller('SignUpController', SignUpController);

    SignUpController.$inject = ['SignUpService', '$location'];
    function SignUpController(SignUpService, $location) {
        var ctrl = this;

        ctrl.isUserLoggedIn = SignUpService.isUserLoggedIn();

        ctrl.submit = function () {
            SignUpService.logUser(ctrl.user);
            ctrl.isUserLoggedIn = true;
            $location.path("/myInfo");
        }
    }


})();
