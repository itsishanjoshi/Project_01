import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FaqService {

  constructor(private http: HttpClient) { }
  getData(id)
  {
    return this.http.get('https://jsonblob.com/api/8a4cc1ef-1513-11eb-ab18-e7279dae33ff');
  }
  getfaq(id)
  {
    return this.http.get('https://jsonblob.com/api/9a71b8bf-1516-11eb-ab18-454a72c2d010');
  }
}
