import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatManageRouteComponent } from './chat-manage-route.component';

describe('ChatManageRouteComponent', () => {
  let component: ChatManageRouteComponent;
  let fixture: ComponentFixture<ChatManageRouteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChatManageRouteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatManageRouteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
