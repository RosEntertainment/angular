(function () {
    'use strict';

    angular.module('ShoppingListCheckOff', [])

        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    // LIST #1 - controller
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyCtrl = this;

        toBuyCtrl.itemsToBuy = ShoppingListCheckOffService.getItemsToBuy();

        toBuyCtrl.moveItem = function (itemIndex) {
            ShoppingListCheckOffService.moveItem(itemIndex)
        }

        toBuyCtrl.isItemsToBuyListEmpty = function () {
            return ShoppingListCheckOffService.isItemsToBuyListEmpty();
        }

    }

    // LIST #2 - controller
    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtCtrl = this;

        alreadyBoughtCtrl.boughtItems = ShoppingListCheckOffService.getBoughtItems();

        alreadyBoughtCtrl.isBoughtItemsListEmpty = function () {
            return ShoppingListCheckOffService.isBoughtItemsListEmpty();
        };
    }

    function ShoppingListCheckOffService() {
        var service = this;

        // List of items
        var toBuyItems = [{
            name: "cookies",
            quantity: 10
        }, {
            name: "drinks",
            quantity: 5
        }, {
            name: "water",
            quantity: 2
        }, {
            name: "meat",
            quantity: 15
        }, {
            name: "fish",
            quantity: 7
        }];
        var boughtItems = [];

        service.moveItem = function (itemIndex) {
            var itemToMove = toBuyItems[itemIndex];
            toBuyItems.splice(itemIndex, 1);
            boughtItems.push(itemToMove);
        };

        service.getItemsToBuy = function () {
            return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
        };

        service.isItemsToBuyListEmpty = function () {
            return toBuyItems.length === 0;
        };

        service.isBoughtItemsListEmpty = function () {
            return boughtItems.length === 0;
        };
    }

})();