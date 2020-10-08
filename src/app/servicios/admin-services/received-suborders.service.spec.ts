import { TestBed } from '@angular/core/testing';

import { ReceivedSubordersService } from './received-suborders.service';

describe('ReceivedSubordersService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReceivedSubordersService = TestBed.get(ReceivedSubordersService);
    expect(service).toBeTruthy();
  });
});
