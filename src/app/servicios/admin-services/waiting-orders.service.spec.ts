import { TestBed } from '@angular/core/testing';

import { WaitingOrdersService } from './waiting-orders.service';

describe('WaitingOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WaitingOrdersService = TestBed.get(WaitingOrdersService);
    expect(service).toBeTruthy();
  });
});
