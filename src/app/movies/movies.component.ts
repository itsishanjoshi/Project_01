import { MovieDetailService } from './../movie-detail.service';
import { Component, OnInit, Input } from '@angular/core';
import { MoviesService } from './../movies.service';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';
import { renderFlagCheckIfStmt } from '@angular/compiler/src/render3/view/template';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {
  
  movies;
  id;

  
  constructor(private moviesService:   MoviesService) { }

  ngOnInit(): void {
    this.moviesService.getMovies(this.id).subscribe(response=> {
      this.movies=response;
    });
  }

}
