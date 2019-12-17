import { Component, OnInit } from '@angular/core';
import {PainelService} from './adminpanel.service';
import {AdminPanel} from '../../adminPanel';
import {Location} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
@Component({
  selector: 'app-adminpanel',
  templateUrl: './adminpanel.component.html',
  styleUrls: ['./adminpanel.component.css']
})
export class AdminpanelComponent implements OnInit {

  compras: AdminPanel[];
  item: AdminPanel;
  id: 100;
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private listaService: PainelService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.listaService.getItems().subscribe(item => this.compras = item);
  }

  delete(id) {
    this.id = id;
    this.listaService.deleteItems(id).subscribe(() => this.refresh());
  }

  goBack(): void {
    this.location.back();
  }

  refresh(): void {
    window.location.reload();
  }

}
