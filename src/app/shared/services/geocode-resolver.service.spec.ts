import { TestBed } from '@angular/core/testing';

import { GeocodeResolverService } from './geocode-resolver.service';

describe('GeocodeResolverService', () => {
  let service: GeocodeResolverService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GeocodeResolverService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
