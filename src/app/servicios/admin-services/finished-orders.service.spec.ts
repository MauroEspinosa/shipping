import { TestBed } from '@angular/core/testing';

import { FinishedOrdersService } from './finished-orders.service';

describe('FinishedOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FinishedOrdersService = TestBed.get(FinishedOrdersService);
    expect(service).toBeTruthy();
  });
});
