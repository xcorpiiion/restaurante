import { ShoppingCartService } from './restaurant-datail/shopping-cart/shopping-cart.service';
import { ReviewsComponent } from './restaurant-datail/reviews/reviews.component';
import { MenuItemComponent } from './restaurant-datail/menu-item/menu-item.component';
import { ShoppingCartComponent } from './restaurant-datail/shopping-cart/shopping-cart.component';
import { MenuComponent } from './restaurant-datail/menu/menu.component';
import { LOCALE_ID, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { ROUTES } from './app.routes';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { RestaurantDatailComponent } from './restaurant-datail/restaurant-datail.component';
import { RestaurantComponent } from './restaurants/restaurant/restaurant/restaurant.component';
import { RestaurantsComponent } from './restaurants/restaurants.component';
import { RestaurantsService } from './restaurants/restaurants.service';

/**
 * @NgModule -> ele funciona como se fosse uma anotação do java
 * declarations -> Todos os componentes ficam dentro deste lugar
 * imports -> São as dependências
 * boostrap -> ele pergunta qual dos componentes é responsavél por gerar esse boostrap (ele vai receber entre
 * [] os componentes resposaveis)
 */
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    RestaurantsComponent,
    RestaurantComponent,
    RestaurantDatailComponent,
    MenuComponent,
    ShoppingCartComponent,
    MenuItemComponent,
    ReviewsComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    RestaurantsService,
    ShoppingCartService,
    { provide: LOCALE_ID, useValue: 'pt-BR' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
