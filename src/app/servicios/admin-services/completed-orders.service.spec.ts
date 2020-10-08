import { TestBed } from '@angular/core/testing';

import { CompletedOrdersService } from './completed-orders.service';

describe('CompletedOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CompletedOrdersService = TestBed.get(CompletedOrdersService);
    expect(service).toBeTruthy();
  });
});
