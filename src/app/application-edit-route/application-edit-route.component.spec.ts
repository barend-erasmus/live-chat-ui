import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationEditRouteComponent } from './application-edit-route.component';

describe('ApplicationEditRouteComponent', () => {
  let component: ApplicationEditRouteComponent;
  let fixture: ComponentFixture<ApplicationEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApplicationEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApplicationEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
