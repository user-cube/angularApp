import {Component, OnInit} from '@angular/core';
import {Profile} from '../profile';
import {EditPerfilService} from './editprofile.service';
import {ActivatedRoute} from '@angular/router';
import {Location} from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditPerfilComponent implements OnInit {
  perfil: Profile;
  url = 'https://tpw-api.herokuapp.com/';

  constructor(private perfilService: EditPerfilService, private route: ActivatedRoute, private location: Location) {
  }

  ngOnInit() {
    this.perfilService.getItems().subscribe(prof => this.perfil = prof);
  }

  update() {
    this.perfilService.putItems(this.perfil).subscribe(() => this.goBack());
  }

  onFileChanged(event) {
    const file = event.target.files[0];
  }

  goBack(): void {
    this.location.back();
  }
}
