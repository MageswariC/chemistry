import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
  Output,
  EventEmitter
} from '@angular/core';

@Component({
  selector: 'procedure-pill',
  templateUrl: './procedure-pill.component.html',
  styleUrls: ['./procedure-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProcedurePillComponent implements OnInit {
  @Input() pillhead;
  @Output() activeIndex = new EventEmitter();
  @Output() isPause = new EventEmitter();
  paused = true;
  activeIndexId: number;
  constructor() {}

  ngOnInit() {
    this.activeIndexId = 1;
    this.activeIndex.emit(this.activeIndexId);
  }
  changeTab(index) {
    this.activeIndexId = index;
    this.activeIndex.emit(index);
  }
  checkPause() {
    this.paused = !this.paused;
    this.isPause.emit(this.paused);
  }
}
