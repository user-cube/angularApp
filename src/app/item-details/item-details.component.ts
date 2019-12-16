import { Component, OnInit } from '@angular/core';
import {Items} from '../items';
import {ItemDetailsService} from './item-details.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-item-details',
  templateUrl: './item-details.component.html',
  styleUrls: ['./item-details.component.css']
})
export class ItemDetailsComponent implements OnInit {

  details: Items;

  constructor(private route: ActivatedRoute, private detailsService: ItemDetailsService) {}

  ngOnInit() {
    this.getItemDetails();
  }

  getItemDetails(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.detailsService.getItemDetails(id).subscribe(next => this.details = next[0]);
  }

}
