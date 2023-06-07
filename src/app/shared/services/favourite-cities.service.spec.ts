import { TestBed } from '@angular/core/testing';

import { FavouriteCitiesService } from './favourite-cities.service';

describe('FavouriteCitiesService', () => {
  let service: FavouriteCitiesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FavouriteCitiesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
