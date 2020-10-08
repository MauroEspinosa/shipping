import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceivedSubordersComponent } from './received-suborders.component';

describe('ReceivedOrdersComponent', () => {
  let component: ReceivedSubordersComponent;
  let fixture: ComponentFixture<ReceivedSubordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReceivedSubordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceivedSubordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
