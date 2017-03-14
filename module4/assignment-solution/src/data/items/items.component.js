(function () {
    'use strict';

    angular.module('data')
        .component('items', {
            templateUrl: 'src/data/items/itemsList.template.html',
            bindings: {
                items: '<'
            }
        });

})();
