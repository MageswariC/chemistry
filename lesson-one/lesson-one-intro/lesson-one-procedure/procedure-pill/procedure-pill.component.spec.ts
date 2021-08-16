import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcedurePillComponent } from './procedure-pill.component';

describe('ProcedurePillComponent', () => {
  let component: ProcedurePillComponent;
  let fixture: ComponentFixture<ProcedurePillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcedurePillComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcedurePillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
