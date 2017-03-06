(function () {
    'use strict';

    angular.module('LunchCheck', [])

        .controller('LunchCheckController', LunchCheckController);

    LunchCheckController.$inject = ['$scope'];
    function LunchCheckController($scope) {
        $scope.lunchItems = "";
        $scope.lunchMessage = "";

        $scope.checkLunch = function () {
            if ($scope.lunchItems === "") {
                $scope.lunchMessage = "Please enter data first";
                return;
            }

            var arrayOfStrings = removeEmptyItems($scope.lunchItems.split(","));

            if (arrayOfStrings.length <= 3) {
                $scope.lunchMessage = "Enjoy!";
            } else {
                $scope.lunchMessage = "Too much!";
            }
        };

        function removeEmptyItems(arrayOfStrings) {
            var toReturn = [];

            arrayOfStrings.forEach(function (element) {
                if (!isBlank(element)) {
                    toReturn.push(element);
                }
            });
            return toReturn;
        }

        function isBlank(str) {
            return (!str || /^\s*$/.test(str));
        }

    }

})();