import { Injectable } from '@angular/core';
import { Observable} from 'rxjs/internal/Observable';
import {HttpClient} from '@angular/common/http';
import {Items} from '../items';

@Injectable({
  providedIn: 'root'
})
export class ItemDetailsService {

  private baseUrl = 'https://tpw-api.herokuapp.com';

  constructor(private http: HttpClient) { }

  getItemDetails(id: number): Observable<Items> {
    return this.http.get<Items>(this.baseUrl + '/items/info/' + id);
  }
}
