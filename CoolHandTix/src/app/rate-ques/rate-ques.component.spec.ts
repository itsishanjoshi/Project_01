import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RateQuesComponent } from './rate-ques.component';

describe('RateQuesComponent', () => {
  let component: RateQuesComponent;
  let fixture: ComponentFixture<RateQuesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RateQuesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RateQuesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
