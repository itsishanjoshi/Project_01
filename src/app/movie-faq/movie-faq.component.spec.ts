import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieFaqComponent } from './movie-faq.component';

describe('MovieFaqComponent', () => {
  let component: MovieFaqComponent;
  let fixture: ComponentFixture<MovieFaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieFaqComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
