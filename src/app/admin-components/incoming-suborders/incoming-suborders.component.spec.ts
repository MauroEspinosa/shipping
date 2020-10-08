import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IncomingSubordersComponent } from './incoming-suborders.component';

describe('IncomingSubordersComponent', () => {
  let component: IncomingSubordersComponent;
  let fixture: ComponentFixture<IncomingSubordersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IncomingSubordersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IncomingSubordersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
