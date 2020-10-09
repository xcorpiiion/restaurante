import { MenuItem } from './../restaurant-datail/menu-item/menu-item.model';
import { ErrorHandler } from './../app.error-handler';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { MEAT_API } from '../app.path.api';
import { Restaurant } from './restaurant/restaurant/restaurant.model';
import 'rxjs/add/operator/map'
import 'rxjs/add/operator/catch'

@Injectable()
export class RestaurantsService {
    /**
     * 
     * @param http -> ele é todos os verbos http, ou seja, com ele eu posso fazer as operações do http
     */
    constructor(private http: Http) { }

    findAll(): Observable<Restaurant[]> {
        /**
         * Ele me retorna os valores convertido para json atráves do .json()
         * _catch() -> ele captura erros
         */
        return this.http.get(`${MEAT_API}/restaurants`).map(response => response.json())._catch(ErrorHandler.handleError)
    }

    findById(id: string): Observable<Restaurant> {
        return this.http.get(`${MEAT_API}/restaurants/${id}`).map(response => response.json())._catch(ErrorHandler.handleError)
    }

    findReviewRestaurantById(id: string): Observable<any> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/reviews`).map(response => response.json())._catch(ErrorHandler.handleError)
    }

    findMenuRestaurantById(id: string): Observable<MenuItem[]> {
        return this.http.get(`${MEAT_API}/restaurants/${id}/menu`).map(response => response.json())._catch(ErrorHandler.handleError)
    }

}