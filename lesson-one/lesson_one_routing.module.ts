import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LessonOneComponent } from './lesson-one.component';
import { TabPillComponent } from './tab-pill/tab-pill.component';
export const Lesson_oneRoutes: Routes = [
  {
    path: 'lesson_one',
    component: LessonOneComponent,
    pathMatch: 'full'
  },
  {
    path: 'lesson_one/course',
    component: TabPillComponent,
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(Lesson_oneRoutes)],
  exports: [RouterModule]
})
export class Lessons_oneRoutingModule {}
