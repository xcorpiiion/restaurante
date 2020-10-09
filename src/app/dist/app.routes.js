"use strict";
exports.__esModule = true;
exports.ROUTES = void 0;
var order_component_1 = require("./order/order.component");
var reviews_component_1 = require("./restaurant-datail/reviews/reviews.component");
var menu_component_1 = require("./restaurant-datail/menu/menu.component");
var restaurant_datail_component_1 = require("./restaurant-datail/restaurant-datail.component");
var restaurants_component_1 = require("./restaurants/restaurants.component");
var about_component_1 = require("./about/about.component");
var home_component_1 = require("./home/home.component");
exports.ROUTES = [
    { path: '', component: home_component_1.HomeComponent },
    { path: 'about', component: about_component_1.AboutComponent },
    { path: 'restaurants', component: restaurants_component_1.RestaurantsComponent },
    {
        path: 'restaurants/:id', component: restaurant_datail_component_1.RestaurantDatailComponent,
        children: [
            { path: '', redirectTo: 'menu', pathMatch: 'full' },
            { path: 'menu', component: menu_component_1.MenuComponent },
            { path: 'reviews', component: reviews_component_1.ReviewsComponent }
        ]
    },
    { path: 'order', component: order_component_1.OrderComponent },
    { path: 'about', component: about_component_1.AboutComponent }
];
