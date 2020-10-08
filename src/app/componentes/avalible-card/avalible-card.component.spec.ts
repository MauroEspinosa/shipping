import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvalibleCardComponent } from './avalible-card.component';

describe('AvalibleCardComponent', () => {
  let component: AvalibleCardComponent;
  let fixture: ComponentFixture<AvalibleCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvalibleCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvalibleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
