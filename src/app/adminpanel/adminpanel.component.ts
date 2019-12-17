import { Component, OnInit } from '@angular/core';
import {PainelService} from './adminpanel.service';
import {AdminPanel} from '../../adminPanel';

@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  compras: AdminPanel[];
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private listaService: PainelService) {
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

}
