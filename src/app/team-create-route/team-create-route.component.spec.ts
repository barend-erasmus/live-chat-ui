import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCreateRouteComponent } from './team-create-route.component';

describe('TeamCreateRouteComponent', () => {
  let component: TeamCreateRouteComponent;
  let fixture: ComponentFixture<TeamCreateRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCreateRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCreateRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
