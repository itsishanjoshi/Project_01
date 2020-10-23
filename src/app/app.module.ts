import { FaqService } from './faq.service';
import { MovieDetailService } from './movie-detail.service';
import { BooksService } from './books.service';
import { MoviesService } from './movies.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MoviesComponent } from './movies/movies.component';

import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BooksComponent } from './books/books.component';
import { FaqComponent } from './faq/faq.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';
import { MovieFaqComponent } from './movie-faq/movie-faq.component';
import { BookFaqComponent } from './book-faq/book-faq.component';



const appRoutes: Routes = [
  {path:'movies', component:MoviesComponent},
  {path:'books', component:BooksComponent},
  {path:'faq', component:FaqComponent},
  {path:'movie-detail', component:MovieDetailComponent},
  {path:'movie-faq', component:MovieFaqComponent},
  {path:'book-faq',component:BookFaqComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    BooksComponent,
    FaqComponent,
    MovieDetailComponent,
    MovieFaqComponent,
    BookFaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes),
    NgbModule
  ],
  providers: [MoviesService, BooksService, MovieDetailService, FaqService],
  bootstrap: [AppComponent]
})
export class AppModule { }
