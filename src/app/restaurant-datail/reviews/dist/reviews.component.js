"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.ReviewsComponent = void 0;
var core_1 = require("@angular/core");
var ReviewsComponent = /** @class */ (function () {
    /**
     *
     * @param restaurantService
     * @param activatedRoute -> Ele representa a rota ativa no momento.
     */
    function ReviewsComponent(restaurantService, activatedRoute) {
        this.restaurantService = restaurantService;
        this.activatedRoute = activatedRoute;
    }
    ReviewsComponent.prototype.ngOnInit = function () {
        /**
         * snapshot -> ele é usando quando o valor é sempre o mesmo, ou seja, quando ele não muda
         * .parent.snapshot.params['id'] -> o parent me permite pegar a rota de um component filho
         */
        this.reviews = this.restaurantService.
            findReviewRestaurantById(this.activatedRoute.parent.snapshot.params['id']);
    };
    ReviewsComponent = __decorate([
        core_1.Component({
            selector: 'mt-reviews',
            templateUrl: './reviews.component.html',
            styleUrls: ['./reviews.component.css']
        })
    ], ReviewsComponent);
    return ReviewsComponent;
}());
exports.ReviewsComponent = ReviewsComponent;
