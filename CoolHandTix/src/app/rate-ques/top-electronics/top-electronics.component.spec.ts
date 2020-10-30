import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopElectronicsComponent } from './top-electronics.component';

describe('TopElectronicsComponent', () => {
  let component: TopElectronicsComponent;
  let fixture: ComponentFixture<TopElectronicsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopElectronicsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TopElectronicsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
