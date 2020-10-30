import { FaqService } from './../../Services/faq.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-faqs',
  templateUrl: './faqs.component.html',
  styleUrls: ['./faqs.component.css']
})
export class FaqsComponent implements OnInit {
data; id;
  constructor(private faq : FaqService) { }

  ngOnInit(): void {
    this.faq.getfaq(this.id).subscribe((response) => {
      this.data = response;
    });
  }

}
