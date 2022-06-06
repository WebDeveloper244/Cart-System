import { TestBed } from '@angular/core/testing';

import { Service22Service } from './service22.service';

describe('Service22Service', () => {
  let service: Service22Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Service22Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
