import { MenuItemComponent } from './../menu-item/menu-item.component';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RestaurantsService } from 'app/restaurants/restaurants.service';
import { MenuItem } from '../menu-item/menu-item.model';

@Component({
  selector: 'mt-menu',
  templateUrl: './menu.component.html'
})
export class MenuComponent implements OnInit {

  menu: Observable<MenuItem[]>

  constructor(private restaurantService: RestaurantsService, private activedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.menu = this.restaurantService.findMenuRestaurantById(this.activedRoute.parent.snapshot.params['id']);
  }

  addMenuItem(item: MenuItem) {
    console.log(item)
  }

}
