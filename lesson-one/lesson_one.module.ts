import { LessonOneExperimentComponent } from './lesson-one-experiment/lesson-one-experiment.component';
import { LesonOneTipComponent } from './lesson-one-intro/leson-one-tip/leson-one-tip.component';
import { LessonOneIntroComponent } from './lesson-one-intro/lesson-one-intro.component';
import { LessonOneMeterialReq } from './lesson-one-intro/lesson-one-meterial-req/lesson-one-meterial-req.component';
import { LessonOneObjective } from './lesson-one-intro/lesson-one-objective/lesson-one-objective.component';
import { LessonOnePrecaution } from './lesson-one-intro/lesson-one-precaution/lesson-one-precaution.component';
import { LessonOneProcedure } from './lesson-one-intro/lesson-one-procedure/lesson-one-procedure.component';
import { ProcedurePillComponent } from './lesson-one-intro/lesson-one-procedure/procedure-pill/procedure-pill.component';
import { LessonOneOservationComponent } from './lesson-one-oservation/lesson-one-oservation.component';
import { LessonOneComponent } from './lesson-one.component';
import { TabPillComponent } from './tab-pill/tab-pill.component';

export const Lesson_oneComponents = [
  LessonOneComponent,
  TabPillComponent,
  LessonOneIntroComponent,
  LessonOneExperimentComponent,
  LessonOneOservationComponent,
  LessonOneObjective,
  LessonOneProcedure,
  LessonOneMeterialReq,
  LessonOnePrecaution,
  LesonOneTipComponent,
  ProcedurePillComponent
];

export class LessonsOne {
  constructor() {}
}
