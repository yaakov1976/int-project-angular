import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestAreaComponent } from './guest-area.component';

describe('GuestAreaComponent', () => {
  let component: GuestAreaComponent;
  let fixture: ComponentFixture<GuestAreaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuestAreaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuestAreaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
