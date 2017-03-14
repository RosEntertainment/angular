(function () {
    'use strict';

    angular.module('data')
        .controller('ItemsController', ItemsController);


    ItemsController.$inject = ['items'];
    function ItemsController(items) {
        console.log(items);
        var itemDetail = this;
        itemDetail.items = items;
    }

})();