import { TestBed } from '@angular/core/testing';

import { KindleBooksService } from './kindle-books.service';

describe('KindleBooksService', () => {
  let service: KindleBooksService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(KindleBooksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
