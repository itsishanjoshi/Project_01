import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KindleComponent } from './kindle.component';

describe('KindleComponent', () => {
  let component: KindleComponent;
  let fixture: ComponentFixture<KindleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KindleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KindleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
