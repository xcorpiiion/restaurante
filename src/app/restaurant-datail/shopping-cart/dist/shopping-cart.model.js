"use strict";
exports.__esModule = true;
exports.CartItem = void 0;
var CartItem = /** @class */ (function () {
    /**
     * ele me permite injetar metodos e para acessar o mesmo, eu preciso usar o this dentro de um método
     */
    function CartItem(menuItem, quantity) {
        if (quantity === void 0) { quantity = 1; }
        this.menuItem = menuItem;
        this.quantity = quantity;
    }
    CartItem.prototype.value = function () {
        return this.menuItem.price * this.quantity;
    };
    return CartItem;
}());
exports.CartItem = CartItem;
