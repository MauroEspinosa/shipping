import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandSloganComponent } from './brand-slogan.component';

describe('BrandSloganComponent', () => {
  let component: BrandSloganComponent;
  let fixture: ComponentFixture<BrandSloganComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandSloganComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandSloganComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
