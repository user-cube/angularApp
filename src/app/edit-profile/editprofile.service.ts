import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Profile} from '../profile';
import {EditPerfilComponent} from './edit-profile.component';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'multipart/form-data', Authorization: localStorage.getItem('access_token')})
}

@Injectable({
  providedIn: 'root'
})
export class EditPerfilService {

  private baseUrl = 'https://tpw-api.herokuapp.com';
  constructor(private http: HttpClient) {}



  getItems(): Observable<Profile> {
    return this.http.get<Profile>(this.baseUrl + '/profile/');
  }

  putItems(prof: Profile): Observable<Profile> {
    return this.http.put<Profile>(this.baseUrl + '/profile', prof, httpOptions);
  }
}
