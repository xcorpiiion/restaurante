import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { RestaurantsService } from './../../restaurants/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mt-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {

  /**
   * Ele é um padrão de projeto, no qual ele ficarar observando o comportamento do método e executarar algo
   * quando o mesmo só alterado ou chamado
   */
  reviews: Observable<any>

  /**
   * 
   * @param restaurantService 
   * @param activatedRoute -> Ele representa a rota ativa no momento.
   */
  constructor(private restaurantService: RestaurantsService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    /**
     * snapshot -> ele é usando quando o valor é sempre o mesmo, ou seja, quando ele não muda
     * .parent.snapshot.params['id'] -> o parent me permite pegar a rota de um component filho
     */
    this.reviews = this.restaurantService.
    findReviewRestaurantById(this.activatedRoute.parent.snapshot.params['id'])
  }

}
