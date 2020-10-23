import { FaqService } from './../faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movie-faq',
  templateUrl: './movie-faq.component.html',
  styleUrls: ['./movie-faq.component.css']
})
export class MovieFaqComponent implements OnInit {
data;
id;
  constructor(private faq: FaqService) { }

  ngOnInit(): void {
    this.faq.getData(this.id).subscribe(response=> {
      this.data=response;
    });
  }

}
