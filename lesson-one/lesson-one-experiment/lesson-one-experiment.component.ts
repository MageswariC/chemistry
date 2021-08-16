import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  ViewChild,
  ElementRef,
  ChangeDetectorRef
} from '@angular/core';
import { equipment, drugSoluction, anaestheticAgent } from './experiContent';
import { drugs } from './drugDetail';
import { Drug } from './drug.interface';
import { DrugResponse } from './drugResponse';
import '../../../../../assets/canvas/canvas.bundle.js';
import { DomSanitizer } from '@angular/platform-browser';

@Component({
  selector: 'lesson-one-experiment',
  templateUrl: './lesson-one-experiment.component.html',
  styleUrls: ['./lesson-one-experiment.component.scss', './slider.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class LessonOneExperimentComponent implements OnInit {
  @ViewChild('modal', { static: true }) public modal: ElementRef;
  @ViewChild('closeBtnref', { static: true }) public closeBtnref: ElementRef;
  // @ViewChild("canvas", { read: ElementRef, static:false }) canvas: ElementRef;
  previewImge = false;
  imagename;
  iscanvasLoaded = false;
  isDogDead = false;
  removeMarkedBlr = true;
  removeAllBlr = true;

  injectActive = false;
  newdogActive = false;
  @ViewChild('canvas', { static: false }) set canvas(element) {
    if (element && !this.iscanvasLoaded) {
      this.iscanvasLoaded = true;

      const DogHeartLab = window['DogHeartLab'];

      this.dog = window['test'] = new DogHeartLab({
        canvas: element.nativeElement,
        scroller: document.getElementById('canvasScroller'),
        height: element.nativeElement.parentElement.offsetHeight,
        width: element.nativeElement.parentElement.offsetWidth,
        grids: {
          options: {
            color: '#f2f2f5',
            GridSize: Math.round(
              (element.nativeElement.parentElement.offsetHeight - 70) / 22
            ),
            LinesSize: 1
          },
          axis: {
            y: { start: 0, gap: 10, end: 220 }
          }
        },
        onComplete: () => {
          this.eliminateDrugLevel();
          this.canvasCompleted();
          this.antdrugBlockervalidation();
          if (this.isDogDead) {
            console.log('disabled');
            this.injectActive = true;
            this.newdogActive = false;
          }
          this.ref.markForCheck();
        },
        onStart: () => {
          this.canvasRunning();
          this.ref.markForCheck();
        }
      });

      this.dog.init();
      // this.dog.bpColor = "#283593"
    }
  }
  dog;

  showHint: Boolean = true;
  isAntAgo = false;
  isPro = false;
  showBtn = false;
  btnValue;
  isBlockerpopup = false;
  currentActingDrug: Drug;
  drugArray = drugs;
  selectedDrugDetails: Drug;
  drugName = '';
  recommandedDose;
  recoDose;
  range = '';
  labMode = 'tutorial';
  bpnormalVlaue = 20;
  hrnormalVlaue = 3;

  blockerEffect;

  antagonistArray = [];

  constructor(
    private drugResponse: DrugResponse,
    private ref: ChangeDetectorRef,
    private sanitizer: DomSanitizer
  ) {}
  ngOnInit() {
    this.createDrugArray();
  }
  openModal(img) {
    // this.imagename = img;
    this.injectActive = true;
    this.newdogActive = true;
    this.modal.nativeElement.setAttribute('style', 'display: block');
  }

  closeBtn1() {
    this.injectActive = false;
    this.newdogActive = false;
    this.modal.nativeElement.setAttribute('style', 'display: none');
  }

  // addNewDog() {
  //   this.isDogDead = false;
  //   this.dog.addDog();
  // }
  createDrugArray() {
    this.drugArray = drugs;
    this.drugArray.forEach(obj => {
      if (obj.drug_type == 'Ant') {
        obj['isChecked'] = false;
        this.antagonistArray.push(obj);
      }
    });
  }

  saveImage() {
    this.dog.convertCanvasToImage();
  }
  printCanvas() {
    this.dog.printCanvas();
  }

  drugSelect(drug: Drug) {
    this.isAntAgo = false;
    this.isPro = false;
    this.showBtn = true;
    if (drug.drug_type == 'Pro') {
      this.isPro = true;
      this.btnValue = 'Apply';
    } else if (drug.drug_type == 'Ago' || drug.drug_type == 'Ant') {
      this.isAntAgo = true;
      this.btnValue = 'Inject';
    }
    this.selectedDrugDetails = drug;
    this.drugName = drug.drug_name;
    this.recommandedDose = drug.drug_recdose;
    this.recoDose = drug.drug_recdose;
    this.range = drug.drug_doserange;
  }
  injectDose() {
    this.injectActive = true;
    this.newdogActive = true;
    if (this.isDogDead) return;
    this.currentActingDrug = this.selectedDrugDetails;
    this.currentActingDrug['toxicLevel'] = parseInt(
      this.selectedDrugDetails.drug_toxicdose
    );
    if (this.labMode == 'tutorial') {
      this.currentActingDrug['drugDose'] = parseInt(this.recommandedDose);
    }

    var drugAction = this.drugResponse.getDrugEffect(this.currentActingDrug);
    console.log('drugAction', drugAction);

    if (this.currentActingDrug.drug_type == 'Ant') {
      this.updateTheDrugLevel(
        this.currentActingDrug.drug_name,
        parseInt(this.recommandedDose)
      );
    }
    this.drugResponse.emitAntArray(this.antagonistArray);
    this.blockerEffect = false;
    try {
      if (drugAction['blockInfo'].drugDose != undefined) {
        this.blockerEffect = true;
        this.currentActingDrug.toxicLevel = drugAction['blockInfo'].toxicDose;
      }
    } catch (e) {}
    var obj = this.drugResponse.getDrug(this.currentActingDrug.intervention_no);
    if (
      this.currentActingDrug.drugDose >= this.currentActingDrug.toxicLevel &&
      String(this.currentActingDrug.drug_type) != 'Pro' &&
      parseInt(this.currentActingDrug.drug_toxicdose) !== 0
    ) {
      this.killTheDog(this.currentActingDrug.drug_name);
    } else {
      if (this.blockerEffect) {
        this.currentActingDrug.drugDose = drugAction['blockInfo'].drugDose;
      }
      this.dog.addDrug({
        name: this.currentActingDrug.drug_code,
        value: this.recommandedDose,
        ...drugAction
      });
      if (obj != null) {
        if (
          parseInt(obj['druglevel']) >= this.currentActingDrug.toxicLevel &&
          this.currentActingDrug.drug_type != 'Pro' &&
          parseInt(this.currentActingDrug.drug_toxicdose) != 0
        ) {
          this.killTheDog(this.currentActingDrug.drug_name);
        }
      }
    }
  }

  updateTheDrugLevel(drugname, level) {
    this.antagonistArray.forEach(antDrug => {
      if (drugname === antDrug.drug_name) {
        antDrug.druglevel = antDrug.druglevel + level;
      }
    });
  }
  doseIncreDecre(val) {
    if (val == 'incre') {
      this.recommandedDose =
        parseInt(this.recommandedDose) +
        parseInt(this.selectedDrugDetails.drugIncre);
    } else if (parseInt(this.recommandedDose) > 0) {
      this.recommandedDose =
        parseInt(this.recommandedDose) -
        parseInt(this.selectedDrugDetails.drugIncre);
    }
  }

  killTheDog(toxic_drug_name) {
    alert('dog killed');
    console.log('toxic_drug_name', toxic_drug_name);

    this.isDogDead = true;

    var n = -10;
    //trace("bpSegmentHeight   "+n)
    // displayMc.dogDead = true;
    var doseValArray = [-120];
    var hrValArray = [-120];
    var timingArray = [5];
    switch (toxic_drug_name.toLowerCase()) {
      case 'epinephrine':
      case 'norepinephrine':
      case 'ephedrine':
        doseValArray = [
          0,
          50,
          75,
          100,
          100,
          50,
          -70,
          -90,
          -95,
          -100,
          -110,
          -115
        ];
        hrValArray = [
          25,
          52,
          87,
          105,
          105,
          104,
          -40,
          -80,
          -100,
          -120,
          -155,
          -160
        ];
        timingArray = [1, 2, 3, 2, 1, 0.5, 3, 5, 1, 1, 2, 2];
        break;
      case 'isoprenaline':
        doseValArray = [
          5,
          11,
          10,
          5,
          -20,
          -25,
          -30,
          -40,
          -50,
          -60,
          -70,
          -80,
          -80,
          -80,
          -80,
          -90,
          -90,
          -100,
          -100,
          -105,
          -110,
          -115
        ]; //,014,-045,-065,-110,-130,-140,-155,-160];
        hrValArray = [
          6,
          14,
          15,
          14,
          6,
          -23,
          -23,
          -19,
          -18,
          -19,
          -25,
          -57,
          -57,
          -54,
          -53,
          -54,
          -90,
          -89,
          -88,
          -90,
          -135,
          -160
        ]; //,019,-037,-035,-037,-055,-075,-072,-075,-125,-160];
        timingArray = [
          1,
          1,
          1,
          0.5,
          1,
          2,
          0.5,
          0.5,
          1,
          0.5,
          1,
          1,
          0.5,
          0.2,
          1,
          0.2,
          1,
          0.5,
          0.5,
          0.5,
          2,
          2
        ]; //,001, 001, 0.5, 001, 001, 0.5, 001, 0.5, 001, 001];
        break;
      case 'phentolamine':
      case 'propranolol':
      case 'histamine':
        doseValArray = [
          10,
          11,
          10,
          0,
          -10,
          -35,
          -50,
          -70,
          -75,
          -80,
          -78,
          -82,
          -90,
          -95,
          -100,
          -110,
          -115
        ]; //,-85,-90,-120,-140,-160]//-90,-85,-90,-130,-140,-150,-160]//
        hrValArray = [
          17,
          20,
          17,
          0,
          8,
          9,
          6,
          -40,
          -50,
          -90,
          -88,
          -92,
          -90,
          -120,
          -130,
          -150,
          -160
        ]; //,-85,-110,-120,-140,-160]//-90,-85,-90,-130,-140,-150,-160]//s
        timingArray = [1, 1, 1, 1, 1, 1, 0.5, 1, 2, 1, 1, 3, 1, 4, 4, 2, 2]; //,003, 001, 002, 0.5, 001]//003,002,002,002,004, 001, 001]//
        break;
      case 'acetylcholine':
        doseValArray = [0, -10, -80, -95, -100, -105]; //
        hrValArray = [0, -10, -120, -125, -140, -160]; //
        timingArray = [1, 1, 4, 2, 2, 2]; //
        break;
    }
    for (var nn = 0; nn < doseValArray.length; nn++) {
      if (doseValArray[nn] < 0) {
        doseValArray[nn] -= n;
      }
      if (hrValArray[nn] < 0) {
        hrValArray[nn] -= n;
      }
    }
    var obj = {};
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    obj['drugCode'] = '';
    this.dog.addDrug({
      name: this.currentActingDrug.drug_code,
      value: this.recommandedDose,
      ...obj
    });
  }
  eliminateDrugLevel() {
    this.antagonistArray.forEach(antDrug => {
      if (antDrug.druglevel > 0) {
        this.removeAllBlr = false;
        var eliminatePer = parseInt(antDrug.Drug_quantity_eliminated);
        var val = antDrug.druglevel / 100;
        antDrug.druglevel = Math.round(antDrug.druglevel - val * eliminatePer);
      }
    });
  }

  addnewDog() {
    this.showBtn = false;
    this.isDogDead = false;
    this.antagonistArray.forEach(antDrug => {
      antDrug.druglevel = 0;
    });
    this.removeMarkedBlr = true;
    this.removeAllBlr = true;
    this.drugName = '';
    this.dog.addDog();
    this.isAntAgo = false;
    this.isPro = false;
  }
  blockerpopup() {
    this.isBlockerpopup = !this.isBlockerpopup;
  }
  closeBtn() {
    this.showHint = !this.showHint;
  }
  previewimagecloseBtn() {
    this.previewImge = !this.previewImge;
  }
  checkedBlocker(event, index) {
    this.antagonistArray[index].isChecked = event.target.checked;
    this.antdrugBlockervalidation();

    // if (event.target.checked) {
    //   this.removeMarkedBlr = false;
    // }
  }
  antdrugBlockervalidation() {
    this.removeAllBlr = true;
    this.removeMarkedBlr = true;
    let count = 0;
    let antCount = this.antagonistArray.filter(antdrug => {
      if (antdrug.druglevel) {
        count++;
      }
      if (antdrug.druglevel && !antdrug.isChecked) {
        return true;
      }
    });
    if (count !== 0) {
      if (count == antCount.length) {
        this.removeAllBlr = false;
      } else {
        this.removeMarkedBlr = false;
      }
    } else {
      this.removeAllBlr = true;
      this.removeMarkedBlr = true;
    }
  }
  MarkedBlockerBtn(condition) {
    this.removeMarkedBlr = false;
    this.isBlockerpopup = !this.isBlockerpopup;
    this.bockerDraw(condition);
  }
  injectSalain() {
    this.salineDraw();
  }
  canvasRunning() {
    this.injectActive = true;
    this.newdogActive = true;
  }
  canvasCompleted() {
    this.injectActive = false;
    this.newdogActive = false;
  }
  salineDraw() {
    this.antagonistArray.forEach(antdrug => {
      antdrug.druglevel = 0;
    });
    this.dog.addDrug({
      name: 'Sal',
      value: '',
      DoseValArray: [0, 0, 0],
      HrValArray: [0, 0, 0],
      TimingArray: [1, 3, 3]
    });
  }
  bockerDraw(condition) {
    let name = 'All Blockers';

    let antCount = this.antagonistArray.filter(antdrug => {
      if (condition == 'all' && antdrug.druglevel) {
        antdrug.druglevel = 0;
        return true;
      }
      if (antdrug.druglevel && antdrug.isChecked) {
        antdrug.druglevel = 0;
        antdrug.isChecked = false;
        return true;
      }
    });
    if (antCount && antCount.length == 1) {
      name = antCount[0].drug_code;
    }
    if (antCount && antCount.length) {
      this.dog.addDrug({
        name: name,
        value: 'Removed',
        DoseValArray: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        HrValArray: [
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0,
          0
        ],
        TimingArray: [
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2,
          0.2
        ]
      });
    }
  }
  handleUpload(e) {
    this.previewImge = true;
    this.imagename = this.sanitizer.bypassSecurityTrustUrl(
      URL.createObjectURL(e.target.files[0])
    );
  }
  onInstBook() {
    // this.showHint = !this.showHint;
  }
}
