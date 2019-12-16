import { Component, OnInit } from '@angular/core';
import {Items} from '../items';

@Component({
  selector: 'app-cart-partial',
  templateUrl: './cart-partial.component.html',
  styleUrls: ['./cart-partial.component.css']
})
export class CartPartialComponent implements OnInit {

  products: Items[] = [];

  constructor() { }

  ngOnInit() {
    this.getProducts();
  }

  getProducts() {
    const prods = JSON.parse(localStorage.getItem('items'));

    for (const i of prods) {
      this.products.push(JSON.parse(i));
    }
  }

}
