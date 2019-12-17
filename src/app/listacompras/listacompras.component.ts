import { Component, OnInit } from '@angular/core';
import {ListaService} from './lista.service';
import {Encomenda} from '../encomenda';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.component.html',
  styleUrls: ['./listacompras.component.css']
})
export class ListacomprasComponent implements OnInit {

  compras: Encomenda[];
  url = 'https://tpw-api.herokuapp.com/';
  searchForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private listaService: ListaService) {
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
