import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagosInfoComponent } from './pagos-info.component';

describe('PagosInfoComponent', () => {
  let component: PagosInfoComponent;
  let fixture: ComponentFixture<PagosInfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagosInfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagosInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
