import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserInfoContainerComponent } from './user-info-container.component';

describe('UserInfoContainerComponent', () => {
  let component: UserInfoContainerComponent;
  let fixture: ComponentFixture<UserInfoContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserInfoContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
