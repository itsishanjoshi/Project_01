import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }
  getBooks(id)
  {
    return this.http.get('https://jsonblob.com/api/dd76dfa7-144b-11eb-82c1-2d09e81986cf');
  }
}
