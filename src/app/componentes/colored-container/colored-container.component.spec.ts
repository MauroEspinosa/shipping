import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColoredContainerComponent } from './colored-container.component';

describe('ColoredContainerComponent', () => {
  let component: ColoredContainerComponent;
  let fixture: ComponentFixture<ColoredContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColoredContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColoredContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
