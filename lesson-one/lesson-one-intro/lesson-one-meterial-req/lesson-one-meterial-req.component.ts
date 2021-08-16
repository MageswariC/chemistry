import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
import { CuiModalComponent } from '../../../../components/cui-modal/cui-modal.component';
import {
  anaestheticAgent,
  drugSoluction,
  equipment
} from '../../lesson-one-experiment/experiContent';
// import { CuiModalComponent } from '../../../../../../assets/images/dog';

@Component({
  selector: 'lesson-one-meterial-req',
  templateUrl: './lesson-one-meterial-req.component.html',
  styleUrls: ['./lesson-one-meterial-req.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneMeterialReq implements OnInit {
  @ViewChild('mycui', { static: true }) public mycui: CuiModalComponent;
  @ViewChild('modal', { static: true }) public modal: ElementRef;
  @ViewChild('closeBtn', { static: true }) public closeBtn: ElementRef;
  imagename: string = 'dog';
  getLogo(): string {
    if (this.imagename) {
      return require('../../../../../../assets/images/' +
        this.imagename +
        '.jpg');
    }
  }
  constructor() {}
  // rowClick() {
  //   this.mycui.openModal();
  // }
  openModal(img) {
    this.imagename = img;
    this.modal.nativeElement.setAttribute('style', 'display: block');

  }
  closeBtn1() {
    this.modal.nativeElement.setAttribute('style', 'display: none');
  }
  equipments = equipment;
  drugSoluctions = drugSoluction;
  anaestheticAgents = anaestheticAgent;

  ngOnInit() {
    console.log('equipment', equipment);
  }
}
