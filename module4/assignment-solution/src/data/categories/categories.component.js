(function () {
    'use strict';

    angular.module('data')
        .component('categories', {
            templateUrl: 'src/data/categories/categoriesList.template.html',
            bindings: {
                categories: '<'
            }
        });

})();
