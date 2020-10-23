import { BooksService } from './../books.service';
import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
  books;
  id;

  constructor(private booksService: BooksService) { }

  ngOnInit(): void {
    from(this.booksService.getBooks(this.id)).subscribe(response=> {
      this.books=response;
    });
  }


}
