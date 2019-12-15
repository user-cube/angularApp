import { Injectable } from '@angular/core';
import { HomeComponent} from './home.component';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'https://tpw-api.herokuapp.com/items/all';
  constructor(private http: HttpClient) { }

  getItems(): Observable<HomeComponent> {
    return this.http.get<HomeComponent>(this.baseUrl);
  }
}
