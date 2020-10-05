"use strict";
exports.__esModule = true;
exports.ShoppingCartService = void 0;
var shopping_cart_model_1 = require("./shopping-cart.model");
var ShoppingCartService = /** @class */ (function () {
    function ShoppingCartService() {
        this.items = [];
    }
    ShoppingCartService.prototype.clear = function () {
        this.items = [];
    };
    ShoppingCartService.prototype.addItem = function (item) {
        var foundItem = this.items.find(function (mItem) { return mItem.menuItem.id === item.id; });
        if (foundItem) {
            foundItem.quantity = foundItem.quantity + 1;
        }
        else {
            this.items.push(new shopping_cart_model_1.CartItem(item));
        }
    };
    ShoppingCartService.prototype.removeItem = function (item) {
        this.items.splice(this.items.indexOf(item), 1);
    };
    ShoppingCartService.prototype.total = function () {
        return this.items.
            map(function (item) { return item.value(); }).
            reduce(function (prev, value) { return prev + value; }, 0);
    };
    return ShoppingCartService;
}());
exports.ShoppingCartService = ShoppingCartService;
