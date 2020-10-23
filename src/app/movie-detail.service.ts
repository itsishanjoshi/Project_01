import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MovieDetailService {

  constructor(private http: HttpClient) { }
  getMovies(id)
  {
    return this.http.get('https://jsonblob.com/api/ee46d1c7-1436-11eb-82c1-4b28464d0eaa');
  }
}
