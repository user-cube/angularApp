import { Component, OnInit } from '@angular/core';
import {Produtos} from '../../produtos';
import {ListaAdminService} from './adminlist.service';
import {Encomenda} from '../encomenda';

@Component({
  selector: 'app-adminlist',
  templateUrl: './adminlist.component.html',
  styleUrls: ['./adminlist.component.css']
})
export class AdminlistComponent implements OnInit {

  compras: Encomenda[];
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private listaService: ListaAdminService) {
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

}

