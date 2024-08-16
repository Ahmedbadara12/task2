import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiDataService {
  constructor(private _httpClient: HttpClient) {}
  getData(): Observable<any> {
    return this._httpClient.get('https://fakestoreapi.com/products');
  }
}
