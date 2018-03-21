import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationRouteComponent } from './application-route.component';

describe('ApplicationRouteComponent', () => {
  let component: ApplicationRouteComponent;
  let fixture: ComponentFixture<ApplicationRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
