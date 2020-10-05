import { RestaurantsService } from './../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';
import { Restaurant } from 'app/restaurants/restaurant/restaurant/restaurant.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'mt-restaurant-datail',
  templateUrl: './restaurant-datail.component.html'
})
export class RestaurantDatailComponent implements OnInit {

  constructor(private restaurantsService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  restaurant: Restaurant;

  ngOnInit() {
    console.log("id da rota " + this.activatedRoute.snapshot.params['id'])
    /**
     * subscribe -> ele ficará observando o método e ele irá ser chamado no momento em que ele for alterado/mudado
     * 
     */
    this.restaurantsService.findById(this.activatedRoute.snapshot.params['id']).subscribe(restaurant => this.restaurant = restaurant)
  }

}
