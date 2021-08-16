import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef
} from '@angular/core';
@Component({
  selector: 'anms-tab-pill',
  templateUrl: './tab-pill.component.html',
  styleUrls: ['../../styles/common.scss', './tab-pill.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TabPillComponent implements OnInit {
  @ViewChild('intro', { static: true }) introDiv: ElementRef;
  introBottom = [
    {
      title: 'OBJECTIVES',
      indexId: 'objectives'
    },
    {
      title: 'MATERIALS REQUIRED',
      indexId: 'meterial_req'
    },
    {
      title: 'PROCEDURE',
      indexId: 'procedure'
    },
    {
      title: 'PRECAUTION',
      indexId: 'precaution'
    },
    {
      title: 'TIPS',
      indexId: 'tips'
    }
  ];
  selectedTab = 'intro';
  public customClass = 'mob-te-tabs';

  constructor() {}

  ngOnInit() {
    console.log('tabsContainer', this.introDiv);
  }

  tabClick(e) {
    this.selectedTab = e;
  }
  introTab() {
    this.selectedTab = 'intro';
  }
}
