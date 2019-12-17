import { Component, OnInit } from '@angular/core';
import {Items} from '../items';
import {CartPartialService} from '../cart-partial/cart-partial.service';
import {BehaviorSubject} from 'rxjs';
import {Encomenda} from '../encomenda';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent implements OnInit {

  shoppingBag: Items[] = [];
  total;

  constructor(private cartService: CartPartialService) {
    this.getProducts();
  }

  ngOnInit() {
    this.getStorage();
  }

  onDelete(index) {
    this.cartService.delete(index);
  }

  getName() {
    try {
      const nome = this.getDecodedAccessToken(localStorage.getItem('access_token')).username;
      return nome;
    } catch (e) {
      return '';
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  onCheckout() {
    const user = this.getName();
    for (const item of this.shoppingBag) {
      const encomenda = new Encomenda(new Date(), item.id, user, 1, item.preco, this.total);
      this.cartService.checkout(encomenda).subscribe();
    }
    this.cartService.deleteAll();
    this.total = 0;
  }

  getStorage() {
    this.shoppingBag = this.cartService.getLocalStorage();
  }

  getProducts() {
    this.cartService.productObs.subscribe(next => {
      this.shoppingBag = this.cartService.getLocalStorage();
      this.total = 0;
      this.shoppingBag.forEach(item => this.total += parseFloat(item.preco.toString()));
    });
  }

}
