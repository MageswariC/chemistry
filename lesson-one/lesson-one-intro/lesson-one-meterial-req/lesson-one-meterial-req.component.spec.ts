import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneMeterialReqComponent } from './lesson-one-meterial-req.component';

describe('LessonOneMeterialReqComponent', () => {
  let component: LessonOneMeterialReqComponent;
  let fixture: ComponentFixture<LessonOneMeterialReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneMeterialReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneMeterialReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
