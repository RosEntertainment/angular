(function () {
    "use strict";

    angular.module('private')
        .directive("favouriteMenuNumber", FavouriteMenuNumberDirective);

    FavouriteMenuNumberDirective.$inject = ['SignUpService'];
    function FavouriteMenuNumberDirective(SignUpService) {
        // requires an isloated model
        return {
            // restrict to an attribute type.
            restrict: 'A',
            // element must have ng-model attribute.
            require: 'ngModel',
            link: function (scope, ele, attrs, ctrl) {

                ctrl.$parsers.unshift(function (value) {
                    ctrl.$setValidity('favouriteMenuNumber', true);
                    if (value) {
                        SignUpService.getMenuItem(value)
                            .then(function (response) {
                                ctrl.$setValidity('favouriteMenuNumber', true);
                            })
                            .catch(function (response) {
                                ctrl.$setValidity('favouriteMenuNumber', false);
                            });
                    } else {
                        ctrl.$setValidity('required', false);
                    }
                });

            }
        }
    };

})();