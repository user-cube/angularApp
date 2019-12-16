import {Component, OnInit} from '@angular/core';
import {Profile} from '../profile';
import {PerfilService} from './perfil.service';

@Component({
  selector: 'app-home',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  perfil: Profile;
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private perfilService: PerfilService) {
  }

  ngOnInit() {
    this.perfilService.getItems().subscribe(prof => this.perfil = prof);
  }

}
