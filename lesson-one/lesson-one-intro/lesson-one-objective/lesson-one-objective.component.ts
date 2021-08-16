import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'lesson-one-objective',
  templateUrl: './lesson-one-objective.component.html',
  styleUrls: ['./lesson-one-objective.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneObjective implements OnInit, OnDestroy {
  objectiveTexts = [
    'To demonstrate the changes on BP and heart rate due to carotid occlusion, and electrical stimulation of central and peripheral vagus nerves.',
    'To find the action of a few drugs on the BP and heart rate of dog.'
  ];
  constructor() {}

  ngOnInit() {
    const textToSpeak = this.objectiveTexts.toString();
    this.readMessage(textToSpeak);
  }

  readMessage(textToSpeak: string): void {
    speechSynthesis.cancel();
    const speak = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    speak.voice = voices['Rishi'];
    speak.rate = 7 / 10;
    speak.pitch = 0.7;
    speak.text = textToSpeak;
    speak.onend = e => {};
    speechSynthesis.speak(speak);
  }

  ngOnDestroy(): void {
    speechSynthesis.cancel();
  }
}
