import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LocQueriesComponent } from './loc-queries.component';

describe('LocQueriesComponent', () => {
  let component: LocQueriesComponent;
  let fixture: ComponentFixture<LocQueriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LocQueriesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LocQueriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
