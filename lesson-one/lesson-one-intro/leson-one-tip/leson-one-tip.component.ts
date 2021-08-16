import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'leson-one-tip',
  templateUrl: './leson-one-tip.component.html',
  styleUrls: ['./leson-one-tip.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LesonOneTipComponent implements OnInit, OnDestroy {
  TipTexts = [
    'Chloralose, an I.V. anesthetic suitable for acute experiments ,does not depress reflexes (but they may be slightly exaggerated) unlike barbiturates ,which depress cardiovascular and spinal cord reflexes.',
    'Mean arterial BP (mean BP) and average BP are not the same. Average BP is (systolic + diastolic BPs)/2. Mean BP is approximately diastolic BP + one-third of the pulse pressure. For example, if systolic and diastolic BPs are 120 and 80 mm Hg respectively, then the average BP is 100 mm Hg and the mean BP is 96 mm Hg.',
    'The reading that is corresponding to the midpoint of the BP recording should be taken as mean BP. The trough and peak roughly correspond to diastolic and systolic BPs respectively.',
    'Changes in BP lead to compensatory alteration in the heart rate. For example, an increase in BP by norepinephrine will reduce the heart rate which is mediated by vagal stimulation. Atropine can block the compensatory vagal action leading to an increase in heart rate by norepinephrine. Similarly, the compensatory increase in heart rare (due to a decrease in BP by the depressors) can be blocked by beta adrenergic receptors.',
    'Blockers (antagonists) act for a long time because of their high affinity (strong bonding) with the receptors. Hence repeated administration can lead to accumulation of blockers and kill the animal.'
  ];
  constructor() {}

  ngOnInit() {
    const tipTextString = this.TipTexts.toString();
    this.readMessage(tipTextString);
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
