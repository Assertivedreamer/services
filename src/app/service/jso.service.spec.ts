import { TestBed } from '@angular/core/testing';

import { JsoService } from './jso.service';

describe('JsoService', () => {
  let service: JsoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JsoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
