import { Component, OnInit } from '@angular/core';
import {Items} from '../items';
import {ItemDetailsService} from './item-details.service';
import {ActivatedRoute} from '@angular/router';
import {CartPartialService} from '../cart-partial/cart-partial.service';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  details: Items;
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private route: ActivatedRoute, private detailsService: ItemDetailsService, private cartService: CartPartialService) {}

  ngOnInit() {
    this.getItemDetails();
  }

  getItemDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.detailsService.getItemDetails(id).subscribe(next => this.details = next[0]);
  }

  onSubmit() {
    this.detailsService.saveItem(this.details);
    // Update Observable
    this.cartService.update(this.details);
  }
}
