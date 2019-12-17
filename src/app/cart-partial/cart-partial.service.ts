import { Injectable } from '@angular/core';
import {Items} from '../items';
import {BehaviorSubject, Observable} from 'rxjs';
import {Encomenda} from '../encomenda';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
};

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

  checkout(encomenda): Observable<Encomenda> {
    return this.http.post<Encomenda>(this.baseUrl + '/encomendas/', encomenda, httpOptions);
  }

  delete(index) {
    this.products = JSON.parse(localStorage.getItem('items'));
    this.products.splice(index, 1);
    localStorage.setItem('items', JSON.stringify(this.products));
    this.productObs.next(this.products);
  }

  deleteAll() {
    this.products = [];
    localStorage.setItem('items', JSON.stringify([]));
    this.productObs.next(this.products);
  }
}
