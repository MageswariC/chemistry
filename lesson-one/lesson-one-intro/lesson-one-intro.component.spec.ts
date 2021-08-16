import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneIntroComponent } from './lesson-one-intro.component';

describe('LessonOneIntroComponent', () => {
  let component: LessonOneIntroComponent;
  let fixture: ComponentFixture<LessonOneIntroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneIntroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
