import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef, OnDestroy } from '@angular/core';
import { procedureContainter } from '../lesson-one.model';

@Component({
  selector: 'lesson-one-procedure',
  templateUrl: './lesson-one-procedure.component.html',
  styleUrls: ['./lesson-one-procedure.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneProcedure implements OnInit, OnDestroy {
  activeProcedureData: procedureContainter = {
    procedureText: [],
    procedureImage: []
  };
  count = 0;
  currentProcedure = null;
  pillhead = [
    {
      title: 1,
      indexId: 'one'
    },
    {
      title: 2,
      indexId: 'two'
    },
    {
      title: 3,
      indexId: 'three'
    },
    {
      title: 4,
      indexId: 'four'
    }
  ];

  procedureContainerData = [
    {
      procedureText: [
        'A dog is weighed and anaesthetized using intravenous chloralose(100 mg/kg of body weight)',
        'It is fixed on a dog table in supine position'
      ],
      procedureImage: ['', '']
    },
    {
      procedureText: [
        'Right femoral vein is cannulated with a catheter to injected drugs',
        'Its neck is dissected to expose carotid ariteries and vagus nerves'
      ],
      procedureImage: ['', '']
    },
    {
      procedureText: [
        'After seperating from the vagus nerve, the left common carotid is inserted with an arterial cannula connected to the data acquistion system and a computer display through a pressure transducer. The change in blood pressure are graphically reprsented on the computer display.',
        'The left side vagus is cut into central and peripheral end for applying electical stimulation later in experiment.',
        'The right commom carotid is identified and exposed for later use.'
      ],
      procedureImage: ['', '','']
    },
    {
      procedureText: [
        'Drugs are injected (one by one) into the femoral vein and BP is recorded and displayed on the computer screen. At any ponit BP and HR can be noted using the cross hair which will appear by clicking the display. The drug administration is marked on the chart.'
      ],
      procedureImage: ['']
    }
  ];

  constructor(private changeDetectorRef: ChangeDetectorRef) {}

  ngOnInit() {}

  activeIndexPillHead(index: number): void {
    this.count = 0;
    this.activeProcedureData = {
      procedureText: [],
      procedureImage: []
    };
    this.currentProcedure = this.procedureContainerData[index - 1];
    this.dynamicText();
  }

  dynamicText(): void {
    const procedureObj = this.currentProcedure;
    if(this.count < procedureObj.procedureText.length) {
    this.activeProcedureData.procedureText.push(procedureObj.procedureText[this.count]);
    this.activeProcedureData.procedureImage.push(procedureObj.procedureImage[this.count]);
    this.changeDetectorRef.detectChanges();
    this.readMessage(this.activeProcedureData.procedureText[this.count]);
    }
  }

  readMessage(textToSpeak: string): void {
    speechSynthesis.cancel();
    const speak = new SpeechSynthesisUtterance();
    const voices = window.speechSynthesis.getVoices();
    speak.voice = voices['Rishi'];
    speak.rate = 7 / 10;
    speak.pitch = .7;
    speak.text = textToSpeak;
    speak.onend = (e) => {
      console.log(e);
      this.count++;
    this.dynamicText();
    };
    speechSynthesis.speak(speak);
  }

  pauseControl(isPause: boolean): void {
    if(isPause) {
      speechSynthesis.resume();
    } else {
      speechSynthesis.pause();
    }
  }

  ngOnDestroy(): void {
    speechSynthesis.cancel();
  }

}
