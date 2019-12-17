import { Component, OnInit } from '@angular/core';
import {Produtos} from '../../produtos';
import {ListaService} from './lista.service';

@Component({
  selector: 'app-listacompras',
  templateUrl: './listacompras.component.html',
  styleUrls: ['./listacompras.component.css']
})
export class ListacomprasComponent implements OnInit {

  compras: Produtos[];
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private listaService: ListaService) {
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

}
