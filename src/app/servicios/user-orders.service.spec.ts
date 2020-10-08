import { TestBed } from '@angular/core/testing';

import { UserOrdersService } from './user-orders.service';

describe('UserOrdersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: UserOrdersService = TestBed.get(UserOrdersService);
    expect(service).toBeTruthy();
  });
});
