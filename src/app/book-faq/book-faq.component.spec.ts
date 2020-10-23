import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookFaqComponent } from './book-faq.component';

describe('BookFaqComponent', () => {
  let component: BookFaqComponent;
  let fixture: ComponentFixture<BookFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
