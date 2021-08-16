import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOnePrecautionComponent } from './lesson-one-precaution.component';

describe('LessonOnePrecautionComponent', () => {
  let component: LessonOnePrecautionComponent;
  let fixture: ComponentFixture<LessonOnePrecautionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOnePrecautionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOnePrecautionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
