import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Items} from '../items';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  private baseUrl = 'https://tpw-api.herokuapp.com';
  constructor(private http: HttpClient) {}



  getItems(): Observable<Items[]> {
    return this.http.get<Items[]>(this.baseUrl + '/items/all');
  }
}
