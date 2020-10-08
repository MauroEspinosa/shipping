import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrandnameHeaderComponent } from './brandname-header.component';

describe('BrandnameHeaderComponent', () => {
  let component: BrandnameHeaderComponent;
  let fixture: ComponentFixture<BrandnameHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrandnameHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrandnameHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
