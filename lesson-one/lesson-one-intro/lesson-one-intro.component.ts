import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild
} from '@angular/core';
import { TabsContainer } from '../../../components/tabs-container/tabs-container.component';
import { LessonOneMeterialReq } from './lesson-one-meterial-req/lesson-one-meterial-req.component';

import { LessonOneObjective } from './lesson-one-objective/lesson-one-objective.component';
import { LessonOnePrecaution } from './lesson-one-precaution/lesson-one-precaution.component';
import { LessonOneProcedure } from './lesson-one-procedure/lesson-one-procedure.component';

@Component({
  selector: 'lesson-one-intro',
  templateUrl: './lesson-one-intro.component.html',
  styleUrls: ['./lesson-one-intro.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneIntroComponent implements OnInit {
  // @ViewChild(TabsContainer, { static: true }) tabsContainer: TabsContainer;
  // intro: Boolean = true;
  // tab: string = 'introduction';
  // public customClass = 'mob-te-tabs';
  // public tabsContainerSettings = {
  //   tabs: [
  //     {
  //       id: 'objectives',
  //       title: 'OBJECTIVES',
  //       component: LessonOneObjective
  //     },
  //     {
  //       id: 'meterial_required',
  //       title: 'METERIAL REQUIRED',
  //       component: LessonOneMeterialReq
  //     },
  //     {
  //       id: 'procedure',
  //       title: 'PROCEDURE',
  //       component: LessonOneProcedure
  //     },
  //     {
  //       id: 'precation',
  //       title: 'PRECATION',
  //       component: LessonOnePrecaution
  //     }
  //   ],
  //   tabsToShow: ['objectives', 'meterial_required', 'procedure', 'precation'],
  //   defaultTab: ''
  // };
  constructor() {}

  ngOnInit() {
    // console.log('tabsContainer', this.tabsContainer);
  }

  // onTabEvent(e) {
  //   console.log('e', e);
  //   this.intro = false;
  // }
}
