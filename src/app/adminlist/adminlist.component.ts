import { Component, OnInit } from '@angular/core';
import {Produtos} from '../../produtos';
import {ListaAdminService} from './adminlist.service';
import {Encomenda} from '../encomenda';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  compras: Encomenda[];
  url = 'https://tpw-api.herokuapp.com/';
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private listaService: ListaAdminService) {
    this.searchForm = this.formBuilder.group({
      search: [''],
    });
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

  onSearch() {
    this.listaService.search(this.searchForm.value).subscribe(next => this.compras = next);
    this.searchForm.reset();
  }

}

