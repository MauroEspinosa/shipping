import { TestBed } from '@angular/core/testing';

import { SelectedStoreService } from './selected-store.service';

describe('SelectedStoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedStoreService = TestBed.get(SelectedStoreService);
    expect(service).toBeTruthy();
  });
});
