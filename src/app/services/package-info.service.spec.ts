import { TestBed } from '@angular/core/testing';

import { PackageInfoService } from './package-info.service';

describe('PackageInfoService', () => {
  let service: PackageInfoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PackageInfoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
