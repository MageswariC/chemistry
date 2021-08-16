import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneObjectiveComponent } from './lesson-one-objective.component';

describe('LessonOneObjectiveComponent', () => {
  let component: LessonOneObjectiveComponent;
  let fixture: ComponentFixture<LessonOneObjectiveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneObjectiveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneObjectiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
