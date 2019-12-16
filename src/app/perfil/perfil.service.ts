import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Profile} from '../profile';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Bearer ': localStorage.getItem('access_token')})
}

@Injectable({
  providedIn: 'root'
})
export class PerfilService {

  private baseUrl = 'https://tpw-api.herokuapp.com';
  constructor(private http: HttpClient) {}



  getItems(): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl + '/profile/');
  }
}
