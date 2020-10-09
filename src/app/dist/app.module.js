"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.AppModule = void 0;
var shopping_cart_service_1 = require("./restaurant-datail/shopping-cart/shopping-cart.service");
var reviews_component_1 = require("./restaurant-datail/reviews/reviews.component");
var menu_item_component_1 = require("./restaurant-datail/menu-item/menu-item.component");
var shopping_cart_component_1 = require("./restaurant-datail/shopping-cart/shopping-cart.component");
var menu_component_1 = require("./restaurant-datail/menu/menu.component");
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var platform_browser_1 = require("@angular/platform-browser");
var router_1 = require("@angular/router");
var about_component_1 = require("./about/about.component");
var app_component_1 = require("./app.component");
var app_routes_1 = require("./app.routes");
var header_component_1 = require("./header/header.component");
var home_component_1 = require("./home/home.component");
var restaurant_datail_component_1 = require("./restaurant-datail/restaurant-datail.component");
var restaurant_component_1 = require("./restaurants/restaurant/restaurant/restaurant.component");
var restaurants_component_1 = require("./restaurants/restaurants.component");
var restaurants_service_1 = require("./restaurants/restaurants.service");
var order_component_1 = require("./order/order.component");
var forms_1 = require("@angular/forms");
/**
 * @NgModule -> ele funciona como se fosse uma anotação do java
 * declarations -> Todos os componentes ficam dentro deste lugar
 * imports -> São as dependências
 * boostrap -> ele pergunta qual dos componentes é responsavél por gerar esse boostrap (ele vai receber entre
 * [] os componentes resposaveis)
 */
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            declarations: [
                app_component_1.AppComponent,
                header_component_1.HeaderComponent,
                home_component_1.HomeComponent,
                about_component_1.AboutComponent,
                restaurants_component_1.RestaurantsComponent,
                restaurant_component_1.RestaurantComponent,
                restaurant_datail_component_1.RestaurantDatailComponent,
                menu_component_1.MenuComponent,
                shopping_cart_component_1.ShoppingCartComponent,
                menu_item_component_1.MenuItemComponent,
                reviews_component_1.ReviewsComponent,
                order_component_1.OrderComponent
            ],
            imports: [
                platform_browser_1.BrowserModule,
                http_1.HttpModule,
                forms_1.FormsModule,
                router_1.RouterModule.forRoot(app_routes_1.ROUTES)
            ],
            providers: [
                restaurants_service_1.RestaurantsService,
                shopping_cart_service_1.ShoppingCartService,
                { provide: core_1.LOCALE_ID, useValue: 'pt-BR' }
            ],
            bootstrap: [app_component_1.AppComponent]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
