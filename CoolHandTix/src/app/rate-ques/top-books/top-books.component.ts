import { TopBooksService } from './../../Services/top-books.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';

@Component({
  selector: 'app-top-books',
  templateUrl: './top-books.component.html',
  styleUrls: ['./top-books.component.css'],
})
export class TopBooksComponent implements OnInit {
  books : any;
  id;
  constructor(private topBooks: TopBooksService) {}

  ngOnInit() {
    from(this.topBooks.getBooks(this.id)).subscribe(data => {
      this.books = data;
    }) 
  }
}
