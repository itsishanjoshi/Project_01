import { EventEmitter, Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class TopBooksService {
  books: any[];
  private booksUrl: string =
    'https://jsonblob.com/api/dd76dfa7-144b-11eb-82c1-2d09e81986cf';
  constructor(private http: HttpClient) {}
  getBooks(id) {
    return this.http.get(this.booksUrl);
  }
}
