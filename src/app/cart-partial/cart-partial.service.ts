import { Injectable } from '@angular/core';
import {Items} from '../items';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartPartialService {

  products: Items[] = [];

  productObs: BehaviorSubject<Items[]> = new BehaviorSubject<Items[]>([]);

  constructor() { }

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

  delete(index) {
    this.products.splice(index, 1);
    const prods = JSON.parse(localStorage.getItem('items'));
    localStorage.setItem('items', JSON.stringify(prods.splice(index, 1)));
    this.productObs.next(this.products);
  }

  deleteAll() {
    this.products = [];
    this.productObs.next(this.products);
  }
}
