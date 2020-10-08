import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PendingOrderDetailsComponent } from './pending-order-details.component';

describe('PendingOrderDetailsComponent', () => {
  let component: PendingOrderDetailsComponent;
  let fixture: ComponentFixture<PendingOrderDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PendingOrderDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PendingOrderDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
