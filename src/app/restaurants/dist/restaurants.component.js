"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantsComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantsComponent = /** @class */ (function () {
    function RestaurantsComponent(restauranteService) {
        this.restauranteService = restauranteService;
    }
    RestaurantsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.restauranteService.findAll().subscribe(function (restaurants) { return _this.restaurants = restaurants; });
    };
    RestaurantsComponent = __decorate([
        core_1.Component({
            selector: 'mt-restaurants',
            templateUrl: './restaurants.component.html',
            styleUrls: ['./restaurants.component.css']
        })
    ], RestaurantsComponent);
    return RestaurantsComponent;
}());
exports.RestaurantsComponent = RestaurantsComponent;
