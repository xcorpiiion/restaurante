"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantDatailComponent = void 0;
var core_1 = require("@angular/core");
var RestaurantDatailComponent = /** @class */ (function () {
    function RestaurantDatailComponent(restaurantsService, activatedRoute) {
        this.restaurantsService = restaurantsService;
        this.activatedRoute = activatedRoute;
    }
    RestaurantDatailComponent.prototype.ngOnInit = function () {
        var _this = this;
        console.log("id da rota " + this.activatedRoute.snapshot.params['id']);
        /**
         * subscribe -> ele ficará observando o método e ele irá ser chamado no momento em que ele for alterado/mudado
         *
         */
        this.restaurantsService.findById(this.activatedRoute.snapshot.params['id']).subscribe(function (restaurant) { return _this.restaurant = restaurant; });
    };
    RestaurantDatailComponent = __decorate([
        core_1.Component({
            selector: 'mt-restaurant-datail',
            templateUrl: './restaurant-datail.component.html'
        })
    ], RestaurantDatailComponent);
    return RestaurantDatailComponent;
}());
exports.RestaurantDatailComponent = RestaurantDatailComponent;
