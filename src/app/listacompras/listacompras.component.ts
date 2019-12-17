import { Component, OnInit } from '@angular/core';
import {ListaService} from './lista.service';
import {Encomenda} from '../encomenda';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.component.html',
  styleUrls: ['./listacompras.component.css']
})
export class ListacomprasComponent implements OnInit {

  compras: Encomenda[];
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private listaService: ListaService) {
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

}
