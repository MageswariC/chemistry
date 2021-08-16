import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Drug } from './drug.interface';

@Injectable({
  providedIn: 'root'
})
export class DrugResponse {
  public antArray = new Subject();
  ephedrineCount = 2;
  antagonistArray = [];
  labMode = 'tutorial';
  currentActiveDrug: Drug;
  recommandedDose;
  drugName = '';
  range = '';
  returnObj: Object;
  bpnormalVlaue = 20;
  hrnormalVlaue = 3;
  randMaxValue = 0.5;
  drug;
  constructor() {}
  emitAntArray(arr) {
    this.antagonistArray = arr;
  }
  getDrugEffect(currentDrug) {
    this.drug = currentDrug;
    this.currentActiveDrug = currentDrug;
    var returnObj = {};
    switch (currentDrug.drug_name.toString()) {
      case 'Cimetidine (Cime)':
        returnObj = this.cimetidine();
        break;
      case 'Mepyramine (Mepy)':
        returnObj = this.mepyramine();
        break;
      case 'Atropine (Atro)':
        returnObj = this.atropine();
        break;
      case 'Propranolol (Prop)':
        returnObj = this.propranolol();
        break;
      case 'Phentolamine (Phen)':
        returnObj = this.phentolamine();
        break;
      case 'Isoprenaline (Iso)':
        returnObj = this.isoprenaline();
        break;

      case 'Ephedrine (Ephe)':
        returnObj = this.ephedrine();
        break;
      case 'Histamine (Hist)':
        returnObj = this.histamine();
        break;
      case 'Carotid Occlusion (CO)':
        returnObj = this.carotidOcclusion();
        break;
      case 'Central Vagus (CV)':
        returnObj = this.centralVagus();
        break;
      case 'Peripheral Vagus (PV)':
        returnObj = this.peripheralVagus();
        break;
      case 'Epinephrine (Epi)':
        returnObj = this.epinephrine();
        break;
      case 'Norepinephrine (Nepi)':
        returnObj = this.norEpinePhrine();
        break;
      case 'Acetylcholine (ACh)':
        returnObj = this.acetylcholine();
        break;
      default:
        break;
    }
    return returnObj;
  }

  cimetidine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drugDose = this.currentActiveDrug.drugDose;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drugDose;
      recDrugVal = recDose;
    } else {
      var num = drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(this.currentActiveDrug.drug_mindose)) {
      changeInBp =
        parseInt(this.currentActiveDrug.changeinbp) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        parseInt(this.currentActiveDrug.changeinhr) *
        (drugVal / recDrugVal) *
        this.hrnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    let doseValArray = [changeInBp, changeInBp, 0, 0, 0, 0];
    let hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
    let timingArray = [1, 1, 2, 1, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  atropine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drugDose = this.currentActiveDrug.drugDose;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drugDose;
      recDrugVal = recDose;
    } else {
      var num = drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(this.currentActiveDrug.drug_mindose)) {
      changeInBp =
        parseInt(this.currentActiveDrug.changeinbp) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        parseInt(this.currentActiveDrug.changeinhr) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    let doseValArray = [
      changeInBp,
      changeInBp,
      changeInBp,
      changeInBp,
      changeInBp,
      changeInBp,
      0,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.2,
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      changeInHr / 1.2,
      0,
      0,
      0,
      0
    ];
    let timingArray = [0.5, 0.5, 1, 1, 0.5, 0.5, 10, 1, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  propranolol() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let drugDose = this.currentActiveDrug.drugDose;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drugDose;
      recDrugVal = recDose;
    } else {
      var num = drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    var unit = (drug.toxicLevel - drugVal) / 10;
    unit = (drug.toxicLevel - drugVal) / unit;
    if (changeInHr < -150) {
      changeInHr = -150 - unit;
    }
    if (changeInBp < -100) {
      changeInBp = -100 - unit;
    }

    let doseValArray = [
      changeInBp,
      changeInBp,
      changeInBp,
      changeInBp,
      0,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      0,
      0,
      0,
      0
    ];
    let timingArray = [1, 1, 2, 1, 10, 1, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  phentolamine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    var unit = (drug.toxicLevel - drugVal) / 10;
    unit = (drug.toxicLevel - drugVal) / unit;
    if (changeInHr < -150) {
      changeInHr = -150 - unit;
    }
    if (changeInBp < -100) {
      changeInBp = -100 - unit;
    }

    let doseValArray = [
      changeInBp,
      changeInBp,
      changeInBp,
      changeInBp,
      0,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      0,
      0,
      0,
      0
    ];
    let timingArray = [1, 1, 2, 1, 10, 2, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  isoprenaline() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    var unit = (drug.toxicLevel - drugVal) / 10;
    unit = (drug.toxicLevel - drugVal) / unit;
    if (changeInHr < -150) {
      changeInHr = -150 - unit;
    }
    if (changeInBp < -100) {
      changeInBp = -100 - unit;
    }

    let doseValArray = [
      changeInBp / 1.2,
      changeInBp,
      changeInBp,
      changeInBp / 1.2,
      0,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.2,
      changeInHr,
      changeInHr,
      changeInHr / 1.2,
      0,
      0,
      0,
      0
    ];
    let timingArray = [1, 1, 1, 1, 6, 3, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  mepyramine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }

    let doseValArray = [changeInBp, changeInBp, 0, 0, 0, 0];
    let hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
    let timingArray = [1, 1, 2, 1, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  ephedrine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (this.checkDrugActing('10+11') == true) {
      changeInBp = 0;
      changeInHr = 0;
      var objArray = [];
      objArray.push({
        interventionNo: '10+11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10+11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'DoubleTheValue',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('10') == true) {
      changeInBp = 0;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;

      var objArray = [];
      objArray.push({
        interventionNo: '10',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11+12') == true) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 0; //Number(drug.changeinhr)*(drugVal/recDrugVal)*lab.displayMc.bpnormalVlaue

      var objArray = [];
      objArray.push({
        interventionNo: '11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11') == true) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue *
        -0.5;

      var objArray = [];
      objArray.push({
        interventionNo: '11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (drugVal > parseInt(drug.drug_mindose)) {
      //   ephedrineCount++;
      //   ephedrineTimer.reset();
      //   ephedrineTimer.start();
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      if (this.ephedrineCount > 1) {
        changeInBp = (changeInBp / this.ephedrineCount) * 1.2;
        changeInHr = (changeInHr / this.ephedrineCount) * 1.2;
      }
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    changeInBp = changeInBp * 1.34;
    changeInHr = changeInHr * 1.34;
    let doseValArray = [
      changeInBp / 1.5,
      changeInBp / 1.1,
      changeInBp,
      changeInBp,
      changeInBp / 1.1,
      changeInBp,
      0,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.5,
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      changeInHr / 1.5,
      0,
      0,
      0,
      0
    ];
    let timingArray = [1, 0.5, 1, 1, 0.5, 1, 5, 3, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  histamine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (this.checkDrugActing('13+14') == true) {
      changeInBp = 0;
      changeInHr = 0;
      //trace("drug 13 14")
      var objArray = [];
      objArray.push({
        interventionNo: '13+14',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '13+14',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'DoubleTheValue',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('13') == true) {
      //trace("drug 13")
      changeInBp =
        (parseInt(drug.changeinbp) / 2) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        (parseInt(drug.changeinhr) + parseInt(drug.changeinhr) / 2) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr = changeInHr / 2;
      var objArray = [];
      objArray.push({
        interventionNo: '13',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '13',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('14') == true) {
      //trace("drug 14")
      changeInBp =
        (parseInt(drug.changeinbp) / 2) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        (parseInt(drug.changeinhr) + parseInt(drug.changeinhr) / 2) *
        (drugVal / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr = changeInHr / 2;
      var objArray = [];
      objArray.push({
        interventionNo: '13',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '13',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11') == true) {
      //trace("drug 11")
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 0;
    } else if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    var unit = (drug.toxicLevel - drugVal) / 10;
    unit = (drug.toxicLevel - drugVal) / unit;
    if (changeInHr < -150) {
      changeInHr = -150 - unit;
    }
    if (changeInBp < -100) {
      changeInBp = -100 - unit;
    }
    let doseValArray = [
      changeInBp / 1.1,
      changeInBp,
      changeInBp / 1.1,
      0,
      0,
      0
    ];
    let hrValArray = [changeInHr / 1.1, changeInHr, changeInHr / 1.1, 0, 0, 0];
    let timingArray = [1, 2, 1, 16, 3, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  carotidOcclusion() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);
    if (this.checkDrugActing('10+11') == true) {
      changeInBp = 0;
      changeInHr = 0;
    } else if (this.checkDrugActing('10') == true) {
      changeInBp = 0;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue;
    } else if (this.checkDrugActing('11+12') == true) {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
      changeInHr = 0;
    } else if (this.checkDrugActing('11') == true) {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue * -0.5;
    } else {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue;
    }

    let doseValArray = [
      changeInBp / 1.1,
      changeInBp,
      changeInBp,
      changeInBp / 1.1,
      changeInBp / 3,
      0,
      0,
      0
    ];
    let hrValArray = [
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      0,
      0,
      0,
      0
    ];
    let timingArray = [1, 1, 1, 1, 5, 3, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  centralVagus() {
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    if (this.checkDrugActing('10+12') == true) {
      changeInBp = (parseInt(drug.changeinbp) / 3) * this.bpnormalVlaue;
      changeInHr = (parseInt(drug.changeinhr) / 3) * this.bpnormalVlaue;
    } else if (this.checkDrugActing('12') == true) {
      changeInBp = 0; //(drug.changeinbp/3)*lab.displayMc.bpnormalVlaue;
      changeInHr = 0;
    } else if (this.checkDrugActing('10') == true) {
      changeInBp = (parseInt(drug.changeinbp) / 3) * this.bpnormalVlaue;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue;
    } else if (this.checkDrugActing('11') == true) {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
    } else {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue;
    }

    let doseValArray = [
      changeInBp / 1.1,
      changeInBp,
      changeInBp,
      changeInBp / 1.1,
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
    ];
    let hrValArray = [
      changeInHr / 1.2,
      changeInHr,
      changeInHr,
      changeInHr / 1.2,
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
    ];
    let timingArray = [
      0.5,
      0.4,
      0.6,
      0.4,
      0.5,
      3,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5,
      0.5
    ];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  peripheralVagus() {
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    if (this.checkDrugActing('12') == true) {
      //trace("insdie 11")
      changeInBp = 0;
      changeInHr = 0;
    } else {
      changeInBp = parseInt(drug.changeinbp) * this.bpnormalVlaue;
      changeInHr = parseInt(drug.changeinhr) * this.bpnormalVlaue;
    }

    let doseValArray = [changeInBp, changeInBp, 0, 0, 0, 0];
    let hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
    let timingArray = [0.7, 1, 0.7, 3, 4, 4];

    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  epinephrine() {
    let changeInBp = 0;
    let changeInHr = 0;
    let changeInHr2;
    let drugVal;
    let recDrugVal;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);
    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (this.checkDrugActing('10+11') == true) {
      //trace("Func 1")
      changeInBp = 0;
      changeInHr = 0;

      var doseValArray = [changeInBp, changeInBp, 0, 0, 0, 0];
      var hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
      var timingArray = [2, 2, 5, 3, 4, 4];
      var objArray = [];
      objArray.push({
        interventionNo: '10+11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10+11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'DoubleTheValue',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('12') == true) {
      //trace("Func 2")
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 2 * (drugVal / recDrugVal) * this.bpnormalVlaue;

      doseValArray = [changeInBp, changeInBp, -20, 0, 0, 0];
      hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
      timingArray = [2, 2, 5, 3, 4, 4];
    } else if (this.checkDrugActing('10') == true) {
      changeInBp = -2 * (recDrugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 2 * (recDrugVal / recDrugVal) * this.bpnormalVlaue;

      doseValArray = [changeInBp, changeInBp / 4, 0, 0, 0, 0];
      hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
      timingArray = [2, 2, 5, 3, 4, 4];

      var objArray = [];
      objArray.push({
        interventionNo: '10',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11') == true) {
      //trace("Func 4")
      changeInBp = 3 * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = -2 * (drugVal / recDrugVal) * this.bpnormalVlaue;

      doseValArray = [changeInBp, changeInBp / 2, 0, 0, 0, 0];
      hrValArray = [changeInHr, changeInHr, 0, 0, 0, 0];
      timingArray = [2, 2, 5, 3, 4, 4];
      var objArray = [];
      objArray.push({
        interventionNo: '11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (
      drugVal > parseInt(drug.drug_mindose) ||
      (drugVal >= 0.08 && drugVal <= this.randMaxValue)
    ) {
      var mindosFlag: Boolean = false;
      if (drugVal >= 0.08 && drugVal <= this.randMaxValue) {
        mindosFlag = true;
        drugVal = 0.6;
      }
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = changeInHr * -1;
      changeInHr = changeInHr / 1.5;
      var randVal = Math.round(Math.random() * 3);
      randVal = (randVal + 1) / 10;
      changeInHr2 =
        (parseInt(drug.changeinhr) / 2) *
        ((drugVal / 1.5 - randVal) / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr2 = changeInHr2 * -1;
      doseValArray = [
        0,
        0,
        changeInBp / 2,
        changeInBp / 1.5,
        changeInBp / 1.2,
        changeInBp,
        changeInBp,
        changeInBp / 1.2,
        changeInBp / 1.5,
        changeInBp / 2,
        -10,
        -20,
        0,
        0,
        0,
        0
      ];
      //hrValArray=[changeInHr/2,changeInHr/1.2,changeInHr,changeInHr,changeInHr/1.2,changeInHr/2,(changeInHr2*-1)/4,(changeInHr2*-1)/4,changeInHr2/1.2,changeInHr2,changeInHr2,changeInHr2/1.2,0,0,0];
      //hrValArray=[0,changeInHr/2,changeInHr/1.2,changeInHr,changeInHr,(changeInHr2)/2,(changeInHr2)/6,(changeInHr2)/6,(changeInHr2)/2,changeInHr2/1.2,changeInHr2,changeInHr2,changeInHr2/1.2,0,0,0];

      changeInHr2 = 13;
      hrValArray = [
        0,
        changeInHr / 2,
        changeInHr / 1.2,
        changeInHr,
        changeInHr,
        changeInHr2 - 7,
        changeInHr2 - 9,
        changeInHr2 - 9,
        changeInHr2 - 7,
        changeInHr2 - 4,
        changeInHr2,
        changeInHr2,
        changeInHr2 - 4,
        0,
        0,
        0
      ];
      timingArray = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 4];
      if (mindosFlag) {
        changeInHr2 =
          (parseInt(drug.changeinhr) / 2) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        changeInHr2 = changeInHr2 * -1;
        changeInHr2 = changeInHr2 * 1.5; //multiplied because Increase in HR (0.08 - 0.12) is not that clear

        doseValArray = [0, 0, 0, -10, -20, 0, 0, 0, 0, 0];
        hrValArray = [
          0,
          changeInHr2 / 1.2,
          changeInHr2,
          changeInHr2,
          changeInHr2 / 1.2,
          0,
          0,
          0,
          0,
          0
        ];
        timingArray = [2, 1, 1, 1, 1, 1, 4, 4, 1, 1];
      }
    } else {
      //trace("Func 6")
      doseValArray = [0, 0, 0, 0, 0, 0];
      hrValArray = [0, 0, 0, 0, 0, 0];
      timingArray = [2, 2, 2, 3, 2, 2];
    }
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  norEpinePhrine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let obj = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);

    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (this.checkDrugActing('10+12') == true) {
      //trace("inside 10+12 success")
      changeInBp = 0;
      changeInHr = 2 * this.bpnormalVlaue;
      var objArray = [];
      objArray.push({
        interventionNo: '10+12',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10+12',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11+12') == true) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 0;
      //trace("inside 11+12 success");
      var objArray = [];
      objArray.push({
        interventionNo: '11+12',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '100',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '11+12',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('10+11') == true) {
      changeInBp = 0;
      changeInHr = 0;

      var objArray = [];
      objArray.push({
        interventionNo: '10+11',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10+11',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'DoubleTheValue',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('12') == true) {
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr = 3 * this.bpnormalVlaue;
    } else if (this.checkDrugActing('10') == true) {
      changeInBp = 0;
      changeInHr = 2 * this.bpnormalVlaue;
      var objArray = [];
      objArray.push({
        interventionNo: '10',
        startRange: 50,
        endRange: 100,
        changeOfPerc: '50',
        effect: 'increase'
      });
      objArray.push({
        interventionNo: '10',
        startRange: 0,
        endRange: 49,
        changeOfPerc: 'ActualPerc',
        effect: 'increase'
      });
      this.checkToxicVal(objArray);
    } else if (this.checkDrugActing('11') == true) {
      changeInBp =
        parseInt(drug.changeinbp) *
        ((drugVal + 1) / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp =
        parseInt(drug.changeinbp) *
        ((drugVal + 1) / recDrugVal) *
        this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    if (changeInHr < -150) {
      var unit = (drug.toxicLevel - drugVal) / 10;
      unit = (drug.toxicLevel - drugVal) / unit;
      changeInHr = -150 - unit;
    }
    var doseValArray = [
      changeInBp / 1.5,
      changeInBp / 1.1,
      changeInBp,
      changeInBp,
      changeInBp / 1.1,
      changeInBp,
      0,
      0,
      0,
      0
    ];
    var hrValArray = [
      changeInHr / 1.5,
      changeInHr / 1.1,
      changeInHr,
      changeInHr,
      changeInHr / 1.1,
      changeInHr / 1.5,
      0,
      0,
      0,
      0
    ];

    var timingArray = [1, 0.5, 1, 1, 0.5, 1, 5, 3, 4, 4];
    obj['DoseValArray'] = doseValArray;
    obj['HrValArray'] = hrValArray;
    obj['TimingArray'] = timingArray;
    return obj;
  }
  acetylcholine() {
    console.log('currentActiveDrug', this.currentActiveDrug);
    let ganglionFlag = false;
    let drugVal;
    let recDrugVal;
    let changeInBp = 0;
    let changeInHr = 0;
    let returnobj = {};
    var blockInfo = {};
    let drug = this.currentActiveDrug;
    let recDose = parseInt(this.currentActiveDrug.drug_recdose);
    if (this.labMode == 'tutorial') {
      drugVal = drug.drugDose;
      recDrugVal = recDose;
    } else {
      var num = drug.drugDose / recDose;
      drugVal = recDose * num;
      recDrugVal = recDose;
    }
    if (this.checkDrugActing('12') == true) {
      changeInBp = 0;
      changeInHr = 0;
      var objArray = [];
      objArray.push({
        interventionNo: '12',
        startRange: 0,
        endRange: 100,
        changeOfPerc: 'MultiplyOf5',
        effect: 'increase'
      });
      var obj = this.checkToxicVal(objArray);
      var atropinePercent = Math.round(
        (parseInt(obj['druglevel']) / 750) * 100
      );
      if (
        obj['drug_toxicdose'] > obj['minDose'] &&
        atropinePercent <= 134 &&
        atropinePercent >= 67
      ) {
        blockInfo = {};
        blockInfo['drugDoseOrig'] = drugVal;
        drugVal = drugVal - 25 + 5 + (drugVal - 25) / 2;
        if (drugVal < 0) {
          drugVal = 0;
        }
        changeInBp =
          parseInt(drug.changeinbp) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        changeInHr =
          parseInt(drug.changeinhr) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        blockInfo['drugDose'] = drugVal;
        blockInfo['toxicDose'] = 400;
      }
      if (atropinePercent > 134 && atropinePercent <= 266) {
        blockInfo = {};
        blockInfo['drugDoseOrig'] = drugVal;
        drugVal = drugVal - 50 + 5 + (drugVal - 50) / 2;
        if (drugVal < 0) {
          drugVal = 0;
        }

        changeInBp =
          parseInt(drug.changeinbp) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        changeInHr =
          parseInt(drug.changeinhr) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        blockInfo['drugDose'] = drugVal;
        blockInfo['toxicDose'] = 400;
      }
      if (atropinePercent > 266) {
        ganglionFlag = true;
        blockInfo = {};
        blockInfo['drugDoseOrig'] = drugVal;
        if (drugVal < 120) {
          drugVal = 0;
        }
        if (drugVal < 150 && drugVal >= 120) {
          drugVal = (drugVal - 120) * 0.25;
        } else if (drugVal >= 150) {
          drugVal = (155 - 120) * 0.25;
        }
        if (drugVal < 0) {
          drugVal = 0;
        }
        //trace("4 Over here"+drugVal,Number(drug.drug_mindose))
        changeInBp =
          parseInt(drug.changeinbp) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        changeInHr =
          parseInt(drug.changeinhr) *
          (drugVal / 1.5 / recDrugVal) *
          this.bpnormalVlaue;
        changeInBp = changeInBp * -1;
        changeInHr = changeInHr * -1;
        blockInfo['drugDose'] = drugVal;
        blockInfo['toxicDose'] = 400;
      }
      if (drugVal > parseInt(drug.drug_mindose) && atropinePercent < 67) {
        changeInBp = 0;
        changeInHr = 0;
        changeInBp =
          parseInt(drug.changeinbp) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
        changeInHr =
          parseInt(drug.changeinhr) *
          (drugVal / recDrugVal) *
          this.bpnormalVlaue;
      }
    } else if (drugVal > parseInt(drug.drug_mindose)) {
      changeInBp = 0;
      changeInHr = 0;
      changeInBp =
        parseInt(drug.changeinbp) * (drugVal / recDrugVal) * this.bpnormalVlaue;
      changeInHr =
        parseInt(drug.changeinhr) * (drugVal / recDrugVal) * this.bpnormalVlaue;
    } else {
      changeInBp = 0;
      changeInHr = 0;
    }
    var unit = (drug.toxicLevel - drugVal) / 10;
    unit = (drug.toxicLevel - drugVal) / unit;
    if (changeInHr < -150) {
      changeInHr = -150 - unit;
    }
    if (changeInBp < -100) {
      changeInBp = -100 - unit;
    }
    var doseValArray = [
      changeInBp / 1.1,
      changeInBp,
      changeInBp / 1.1,
      0,
      0,
      0,
      0
    ];
    var hrValArray = [
      changeInHr / 1.1,
      changeInHr,
      changeInHr / 1.1,
      0,
      0,
      0,
      0
    ];

    var timingArray = [1, 1.5, 0.5, 1, 3, 4, 4];
    returnobj['DoseValArray'] = doseValArray;
    returnobj['HrValArray'] = hrValArray;
    returnobj['TimingArray'] = timingArray;
    returnobj['blockInfo'] = blockInfo;
    return returnobj;
  }
  checkDrugActing(str) {
    var ar = str.split('+');
    var cnt = 0;
    var antagonistArr = this.antagonistArray;
    var flg: Boolean = false;
    for (var i = 0; i < ar.length; i++) {
      for (var j = 0; j < antagonistArr.length; j++) {
        var antagonistDrugLevel = antagonistArr[j].druglevel;
        if (
          parseInt(ar[i]) == parseInt(antagonistArr[j].intervention_no) &&
          antagonistArr[j].druglevel > 0 &&
          antagonistArr[j].druglevel > parseInt(antagonistArr[j].drug_mindose)
        ) {
          flg = true;
          cnt++;
          break;
        } else if (
          j == antagonistArr.length - 1 &&
          parseInt(ar[i]) != parseInt(antagonistArr[j].intervention_no) &&
          flg == true
        ) {
          flg = false;
        }
      }
      if (flg == false) {
        break;
      }
      if (cnt == ar.length) {
        flg = true;
      } else {
        flg = false;
      }
    }
    return flg;
  }
  checkToxicVal(infrArray) {
    var val = 0;
    var retObj = {};
    infrArray.forEach(ele => {
      let infrObj = ele;
      let drugObject = {};
      var interventionArr = infrObj.interventionNo.split('+');
      interventionArr.forEach(ele => {
        var obj = this.getDrug(ele);
        console.log(obj);
        if (
          drugObject != null &&
          parseInt(obj['druglevel']) > parseInt(drugObject['druglevel'])
        ) {
          drugObject = obj;
        } else if (drugObject == null) {
          drugObject = obj;
        }
        var toxicPercent = Math.round(
          (parseInt(drugObject['druglevel']) /
            parseInt(drugObject['drug_recdose'])) *
            100
        );
        retObj['toxicPercent'] = toxicPercent;
        retObj['minDose'] = drugObject['drug_mindose'];
        retObj['druglevel'] = drugObject['druglevel'];
        retObj['drug_toxicdose'] = this.drug['drug_toxicdose'];
        if (
          toxicPercent >= infrObj.startRange &&
          toxicPercent <= infrObj.endRange
        ) {
          var drugPerval = parseInt(this.drug.drug_toxicdose) / 100;

          if (infrObj.changeOfPerc == 'ActualPerc') {
            val = drugPerval * toxicPercent;
            //trace(val+"   1")
          } else if (infrObj.changeOfPerc == 'DoubleTheValue') {
            val = drugPerval * 2 * toxicPercent;
            //trace(val+"   2")
          } else if (infrObj.changeOfPerc == 'MultiplyOf5') {
            val = drugPerval * 5 * toxicPercent;
            //trace(val+"   3")
          } else {
            val = drugPerval * parseInt(infrObj.changeOfPerc);
            //trace(val+"   4")
          }
          if ((infrObj.effect = 'increase')) {
            this.drug.toxicLevel = parseInt(this.drug.toxicLevel) + val;
            //trace(val+"   5")
          } else {
            this.drug.toxicLevel = parseInt(this.drug.toxicLevel) - val;
            //trace(val+"   6")
          }
          //trace("drug perc-------- "+drugObject.druglevel+"  "+toxicPercent+"  "+infrObj.changeOfPerc+"  "+drugPerval+"  "+val);
        }
      });
    });
    return retObj;
  }
  getDrug(str) {
    var retObj = {};
    this.antagonistArray.forEach(ele => {
      if (parseInt(str) === parseInt(ele.intervention_no)) {
        retObj = ele;
      }
    });
    return retObj;
  }
}
