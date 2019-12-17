import { Component, OnInit } from '@angular/core';
import {Items} from '../items';
import {CartPartialService} from '../cart-partial/cart-partial.service';
import {BehaviorSubject} from 'rxjs';

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

  onCheckout() {
    this.cartService.checkout();
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
