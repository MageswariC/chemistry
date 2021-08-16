import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneOservationComponent } from './lesson-one-oservation.component';

describe('LessonOneOservationComponent', () => {
  let component: LessonOneOservationComponent;
  let fixture: ComponentFixture<LessonOneOservationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneOservationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneOservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
