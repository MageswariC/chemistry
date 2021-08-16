import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'lesson-one-precaution',
  templateUrl: './lesson-one-precaution.component.html',
  styleUrls: ['./lesson-one-precaution.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOnePrecaution implements OnInit, OnDestroy {
  precautionTexts = [
    'The trachea should be exposed and cannulated to maintain respiration. In case of distress, the cannula should be connected to a respirator.',
    'The antagonists act on the body for a long time and hence the same antagonist should not be repeated frequently. Otherwise the dog will die due to cumulation of antagonist in the body.',
    'The dose must be selected from the conventional dose range given. A low dose will not evoke any response whereas a large dose will kill the dog.',
    'For some drugs, different doses will produce different effects. Appropriate dose should be used depending on the effect desired.',
    'Adequate anesthesia should be maintained throughout the experiment. At the end of the experiment, the dog must be killed using one of the ethically accepted procedures.'
  ];
  count = 0;
  activePrecautionTexts = [];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {
    this.dynamicText();
  }

  dynamicText(): void {
    if (this.count < this.precautionTexts.length) {
      this.activePrecautionTexts.push(this.precautionTexts[this.count]);
      this.changeDetectorRef.detectChanges();
      this.readMessage(this.precautionTexts[this.count]);
    }
  }

  readMessage(textToSpeak: string): void {
    speechSynthesis.cancel();
    const speak = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    speak.voice = voices['Rishi'];
    speak.rate = 7 / 10;
    speak.pitch = 0.7;
    speak.text = textToSpeak;
    speak.onend = e => {
      console.log(e);
      this.count++;
      this.dynamicText();
    };
    speechSynthesis.speak(speak);
  }

  ngOnDestroy(): void {
    speechSynthesis.cancel();
  }
}
