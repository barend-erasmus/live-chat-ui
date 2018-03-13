import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamEditRouteComponent } from './team-edit-route.component';

describe('TeamEditRouteComponent', () => {
  let component: TeamEditRouteComponent;
  let fixture: ComponentFixture<TeamEditRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamEditRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamEditRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
