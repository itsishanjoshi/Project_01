import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KnavComponent } from './knav.component';

describe('KnavComponent', () => {
  let component: KnavComponent;
  let fixture: ComponentFixture<KnavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KnavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KnavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
