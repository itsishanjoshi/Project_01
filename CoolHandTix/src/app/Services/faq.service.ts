import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class FaqService {
  constructor(private http: HttpClient) {}
  getfaq(id) {
    return this.http.get(
      'https://jsonblob.com/api/9a71b8bf-1516-11eb-ab18-454a72c2d010'
    );
  }
}
