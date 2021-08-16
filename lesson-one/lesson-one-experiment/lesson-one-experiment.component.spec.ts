import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneExperimentComponent } from './lesson-one-experiment.component';

describe('LessonOneExperimentComponent', () => {
  let component: LessonOneExperimentComponent;
  let fixture: ComponentFixture<LessonOneExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
