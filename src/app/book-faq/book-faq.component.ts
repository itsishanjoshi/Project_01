import { FaqService } from './../faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-faq',
  templateUrl: './book-faq.component.html',
  styleUrls: ['./book-faq.component.css']
})
export class BookFaqComponent implements OnInit {
data;
id;
  constructor(private faq:FaqService) { }

  ngOnInit(): void {
    this.faq.getfaq(this.id).subscribe(response=> {
      this.data=response;
    });
  }
  

}
