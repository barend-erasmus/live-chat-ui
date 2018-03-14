import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationCreateRouteComponent } from './application-create-route.component';

describe('ApplicationCreateRouteComponent', () => {
  let component: ApplicationCreateRouteComponent;
  let fixture: ComponentFixture<ApplicationCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
