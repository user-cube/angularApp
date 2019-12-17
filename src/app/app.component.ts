import { Component } from '@angular/core';
import {AuthService} from './login/auth.service';
import * as jwt_decode from 'jwt-decode';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(public authService: AuthService) { }
  title = 'XPTO Store';
  year = (new Date()).getFullYear();
  nome = this.getName();

  getName() {
    try {
      const nome = this.getDecodedAccessToken(localStorage.getItem('access_token')).username;
      return nome;
    } catch (e) {
      return '';
    }
  }

  getDecodedAccessToken(token: string): any {
    try {
      return jwt_decode(token);
    } catch (Error) {
      return null;
    }
  }

  isSuperUser() {
    const token = localStorage.getItem('access_token');
    let decoded = false;
    try {
      decoded = jwt_decode(token).is_superuser;
    } catch (Error) {
      decoded = false;
    }
  }

  isLoggedIn(): boolean {
    const authToken = localStorage.getItem('access_token');
    return (authToken !== null) ? true : false;
  }
  Logout() {
    this.authService.doLogout();
  }
}
