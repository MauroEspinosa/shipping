import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminatedOrdersContainerComponent } from './terminated-orders-container.component';

describe('TerminatedOrdersContainerComponent', () => {
  let component: TerminatedOrdersContainerComponent;
  let fixture: ComponentFixture<TerminatedOrdersContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerminatedOrdersContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminatedOrdersContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
