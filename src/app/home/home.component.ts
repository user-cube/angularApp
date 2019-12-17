import {Component, OnInit} from '@angular/core';
import {Items} from '../items';
import {HomeService} from './home.service';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  items: Items[];
  url = 'https://tpw-api.herokuapp.com/';
  searchForm: FormGroup;


  constructor(private formBuilder: FormBuilder, private homeService: HomeService) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.homeService.getItems().subscribe(item => this.items = item);
  }

  onSearch() {
    this.homeService.search(this.searchForm.value).subscribe(next => this.items = next);
    this.searchForm.reset();
  }

}
