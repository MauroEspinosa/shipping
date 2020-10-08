import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersOnWayComponent } from './orders-on-way.component';

describe('OrdersOnWayComponent', () => {
  let component: OrdersOnWayComponent;
  let fixture: ComponentFixture<OrdersOnWayComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersOnWayComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersOnWayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
