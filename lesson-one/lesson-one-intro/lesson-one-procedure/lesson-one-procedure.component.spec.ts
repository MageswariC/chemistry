import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LessonOneProcedureComponent } from './lesson-one-procedure.component';

describe('LessonOneProcedureComponent', () => {
  let component: LessonOneProcedureComponent;
  let fixture: ComponentFixture<LessonOneProcedureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LessonOneProcedureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LessonOneProcedureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
