import { TestBed } from '@angular/core/testing';

import { Service11Service } from './service11.service';

describe('Service11Service', () => {
  let service: Service11Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service11Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
