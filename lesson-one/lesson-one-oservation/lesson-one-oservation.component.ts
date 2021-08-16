import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { drugs } from '../lesson-one-experiment/drugDetail'
@Component({
  selector: 'lesson-one-oservation',
  templateUrl: './lesson-one-oservation.component.html',
  styleUrls: ['./lesson-one-oservation.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneOservationComponent implements OnInit {

  observationForm: FormGroup;
  column = [
    {header:'SI.No', body: 'si.no'},
    {header:'Drug / Procedure', body: 'procedure'},
    {header:'HR (beats/min)', body: 'hr'},
    {header:'Mean BP(mm Hg)', body: 'meanBp'},
    {header:'Remarks', body: 'remarks'},
  ];
  drugs=drugs;

  constructor(private fb:FormBuilder) {}

  ngOnInit() {

    this.observationForm = new FormGroup({
      basalHR: new FormControl(null),
      basalBp: new FormControl(null),
      observationTable: new FormArray([this.observationRowGroup])
    });
    console.log(this.observationForm);
    // this.observationForm.controls.observationTable.valueChanges.subscribe(data)
  }

  get observationRowGroup(): FormGroup {
    return new FormGroup({
      procedure: new FormControl('Select a Procedure/Drug'),
      hr: new FormControl(1),
      meanBp: new FormControl(1),
      remarks: new FormControl(null),
    }) as FormGroup;
  }

  get observationArray(): FormArray {
    return <FormArray>this.observationForm.get('observationTable');
  }

  addObservationRow(isLast: boolean): void {
    if(isLast)
    (<FormArray>this.observationForm.get('observationTable')).push(this.observationRowGroup);
  }

  openModel(): void {
    
  }
}
