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

  saveItem(item) {
    // Save item in localStorage
    const items = JSON.parse(localStorage.getItem('items'));
    if (items !== null) {
      items.push(JSON.stringify(item));
      localStorage.setItem('items', JSON.stringify(items));
    } else {
      const toAdd = JSON.stringify(item);
      localStorage.setItem('items', JSON.stringify([toAdd]));
    }
  }

  getItemDetails(id: number): Observable<Items> {
    return this.http.get<Items>(this.baseUrl + '/items/info/' + id);
  }
}
