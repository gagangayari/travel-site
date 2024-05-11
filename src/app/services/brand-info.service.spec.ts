import { TestBed } from '@angular/core/testing';

import { BrandInfoService } from './brand-info.service';

describe('BrandInfoService', () => {
  let service: BrandInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrandInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
