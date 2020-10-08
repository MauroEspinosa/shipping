import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosContainerComponent } from './resultados-container.component';

describe('ResultadosContainerComponent', () => {
  let component: ResultadosContainerComponent;
  let fixture: ComponentFixture<ResultadosContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
