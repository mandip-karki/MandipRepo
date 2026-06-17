import { TestBed } from '@angular/core/testing';

import { CSharpApiService } from './c-sharp-api.service';

describe('CSharpApi', () => {
  let service: CSharpApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CSharpApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
