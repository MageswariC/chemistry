import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'anms-lesson-one',
  templateUrl: './lesson-one.component.html',
  styleUrls: ['../../styles/common.scss', './lesson-one.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  initTutorialMode() {
    this.router.navigateByUrl('/excology/lesson_one/course').then(e => {
      if (e) {
        console.log('Navigation is successful!');
      } else {
        console.log('Navigation has failed!');
      }
    });
  }
}
