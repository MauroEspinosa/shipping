import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProbandingComponent } from './probanding.component';

describe('ProbandingComponent', () => {
  let component: ProbandingComponent;
  let fixture: ComponentFixture<ProbandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProbandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProbandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
