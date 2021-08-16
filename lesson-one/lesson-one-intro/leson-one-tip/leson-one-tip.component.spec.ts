import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LesonOneTipComponent } from './leson-one-tip.component';

describe('LesonOneTipComponent', () => {
  let component: LesonOneTipComponent;
  let fixture: ComponentFixture<LesonOneTipComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LesonOneTipComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LesonOneTipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
