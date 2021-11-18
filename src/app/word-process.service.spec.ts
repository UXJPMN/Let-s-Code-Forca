import { TestBed } from '@angular/core/testing';

import { WordProcessService } from './word-process.service';

describe('WordProcessService', () => {
  let service: WordProcessService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WordProcessService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
