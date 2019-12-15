import {Component, OnInit} from '@angular/core';
import {Items} from '../items';
import {HomeService} from './home.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Items[];
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
    this.homeService.getItems().subscribe(item => this.items = item);
  }

}
