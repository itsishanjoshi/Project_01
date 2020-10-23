import { MovieDetailService } from './../../movie-detail.service';
import { Component, OnInit, Input } from '@angular/core';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  
  constructor(private moviesDetailService:   MovieDetailService) { }
  movies;
  id;
  ngOnInit(): void {
    this.moviesDetailService.getMovies(this.id).subscribe(response=> {
      this.movies=response;
    });
  }

}
