"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.MenuItemComponent = void 0;
var core_1 = require("@angular/core");
var MenuItemComponent = /** @class */ (function () {
    function MenuItemComponent() {
        /**
         *
         */
        /**
         * Me permite criar um evento personalizado que será lido pelo front
         * new EventEmitter -> ele é responsavel por criar o evento
         */
        this.add = new core_1.EventEmitter;
    }
    MenuItemComponent.prototype.ngOnInit = function () {
    };
    MenuItemComponent.prototype.emitAddEvent = function () {
        /**
         * emit(this.menuItem) -> ele me permite emitir o evento quando ele for chamado
         */
        this.add.emit(this.menuItem);
    };
    __decorate([
        core_1.Input()
    ], MenuItemComponent.prototype, "menuItem");
    __decorate([
        core_1.Output()
    ], MenuItemComponent.prototype, "add");
    MenuItemComponent = __decorate([
        core_1.Component({
            selector: 'mt-menu-item',
            templateUrl: './menu-item.component.html'
        })
    ], MenuItemComponent);
    return MenuItemComponent;
}());
exports.MenuItemComponent = MenuItemComponent;
