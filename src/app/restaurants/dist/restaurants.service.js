"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.RestaurantsService = void 0;
var app_error_handler_1 = require("./../app.error-handler");
var core_1 = require("@angular/core");
var app_api_1 = require("./../app.api");
require("rxjs/add/operator/map");
require("rxjs/add/operator/catch");
var RestaurantsService = /** @class */ (function () {
    /**
     *
     * @param http -> ele é todos os verbos http, ou seja, com ele eu posso fazer as operações do http
     */
    function RestaurantsService(http) {
        this.http = http;
    }
    RestaurantsService.prototype.findAll = function () {
        /**
         * Ele me retorna os valores convertido para json atráves do .json()
         * _catch() -> ele captura erros
         */
        return this.http.get(app_api_1.MEAT_API + "/restaurants").map(function (response) { return response.json(); })._catch(app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsService.prototype.findById = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id).map(function (response) { return response.json(); })._catch(app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsService.prototype.findReviewRestaurantById = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id + "/reviews").map(function (response) { return response.json(); })._catch(app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsService.prototype.findMenuRestaurantById = function (id) {
        return this.http.get(app_api_1.MEAT_API + "/restaurants/" + id + "/menu").map(function (response) { return response.json(); })._catch(app_error_handler_1.ErrorHandler.handleError);
    };
    RestaurantsService = __decorate([
        core_1.Injectable()
    ], RestaurantsService);
    return RestaurantsService;
}());
exports.RestaurantsService = RestaurantsService;
