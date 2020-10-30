import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { KindleBooksService } from 'src/app/Services/kindle-books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit {
books : any;
  id;
  constructor(private kindleBooksService: KindleBooksService) { }

  ngOnInit(): void {
    from(this.kindleBooksService.getBooks(this.id)).subscribe(data => {
      this.books =data;
    })
  }

}
