import { Injectable } from '@angular/core';
import {Items} from '../items';
import {BehaviorSubject, Observable} from 'rxjs';
import {Encomenda} from '../encomenda';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CartPartialService {

  products: Items[] = [];
  private baseUrl = 'https://tpw-api.herokuapp.com';

  productObs: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);

  constructor(private http: HttpClient) { }

  getLocalStorage() {
    const ret: Items[] = [];
    const prods = JSON.parse(localStorage.getItem('items'));
    if (prods !== null) {
      for (const i of prods ) {
        const prod = JSON.parse(i);
        ret.push(prod);
      }
    }
    return ret;
  }

  update(item) {
    this.products.push(item);
    this.productObs.next(this.products);
  }

  checkout() {
    // this.products is the product list that the user wants to buy
    console.log('Checkout');
  }

  delete(index) {
    this.products = JSON.parse(localStorage.getItem('items'));
    this.products.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.products));
    this.productObs.next(this.products);
  }

  deleteAll() {
    this.products = [];
    this.productObs.next(this.products);
  }
}
