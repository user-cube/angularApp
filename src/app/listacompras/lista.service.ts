import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Encomenda} from '../encomenda';

const httpOptions = {
  headers: new HttpHeaders({'Content-Type': 'application/json', 'Bearer ': localStorage.getItem('access_token')})
}

@Injectable({
  providedIn: 'root'
})
export class ListaService {

  private baseUrl = 'https://tpw-api.herokuapp.com';
  constructor(private http: HttpClient) {}

  getItems(): Observable<Encomenda[]> {
    return this.http.get<Encomenda[]>(this.baseUrl + '/encomendas');
  }

  search(value): Observable<Encomenda[]> {
    return this.http.get<Encomenda[]>(this.baseUrl + '/encomendas/' + value.search);
  }
}
