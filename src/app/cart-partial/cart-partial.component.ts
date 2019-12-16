import { Component, OnInit } from '@angular/core';
import {Items} from '../items';
import {CartPartialService} from './cart-partial.service';

@Component({
  selector: 'app-cart-partial',
  templateUrl: './cart-partial.component.html',
  styleUrls: ['./cart-partial.component.css']
})
export class CartPartialComponent implements OnInit {

  products: Items[] = [];

  constructor(private cartService: CartPartialService) {
    this.getProducts();
  }

  ngOnInit() {
    this.getSavedProducts();
  }

  onDelete(index) {
    this.cartService.delete(index);
  }

  getSavedProducts() {
    this.products = this.cartService.getLocalStorage();
  }

  getProducts() {
    this.cartService.productObs.subscribe(next => {
      this.products = this.cartService.getLocalStorage();
    });
  }

}
