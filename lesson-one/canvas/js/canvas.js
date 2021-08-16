/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/test.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/drugs.js":
/*!*************************!*\
  !*** ./src/js/drugs.js ***!
  \*************************/
/*! exports provided: drugs */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drugs", function() { return drugs; });
var drugs = {
  drug: [{
    drug_name: "Carotid Occlusion",
    intervention_no: "1",
    unk_no: "0",
    drug_code: "CO",
    drug_recdose: "15 sec",
    drug_doserange: "15-30 sec",
    drug_maxdose: "0",
    drug_mindose: "0",
    drug_toxicdose: "0",
    Drug_quantity_eliminated: "",
    drug_actionbp: "1",
    drug_actionhr: "-1",
    drug_type: "Pro",
    changeinbp: "2",
    changeinhr: "2",
    nature: "",
    group: ""
  }, {
    drug_name: "Central Vagus",
    intervention_no: "2",
    unk_no: "0",
    drug_code: "CV",
    drug_recdose: "15 sec",
    drug_doserange: "15-30 sec",
    drug_maxdose: "0",
    drug_mindose: "0",
    drug_toxicdose: "0",
    Drug_quantity_eliminated: "",
    drug_actionbp: "1",
    drug_actionhr: "1",
    drug_type: "Pro",
    changeinbp: "-2",
    changeinhr: "-2",
    nature: "",
    group: ""
  }, {
    drug_name: "Peripheral Vagus",
    intervention_no: "3",
    unk_no: "0",
    drug_code: "PV",
    drug_recdose: "15 sec",
    drug_doserange: "15-30 sec",
    drug_maxdose: "0",
    drug_mindose: "0",
    drug_toxicdose: "0",
    Drug_quantity_eliminated: "",
    drug_actionbp: "-1",
    drug_actionhr: "-1",
    drug_type: "Pro",
    changeinbp: "-2",
    changeinhr: "-3",
    nature: "",
    group: ""
  }, {
    drug_name: "Epinephrine",
    intervention_no: "4",
    unk_no: "1",
    drug_code: "Epi",
    drug_recdose: "2",
    drug_doserange: "1-3",
    drug_maxdose: "10",
    drug_mindose: "0.5",
    drug_toxicdose: "15",
    Drug_quantity_eliminated: "",
    drug_actionbp: "1",
    drug_actionhr: "1",
    drug_type: "Ago",
    changeinbp: "2",
    changeinhr: "-3",
    doseIncrVal: "1",
    nature: "Neutral",
    group: "1"
  }, {
    drug_name: "Norepinephrine",
    intervention_no: "5",
    unk_no: "2",
    drug_code: "Nepi",
    drug_recdose: "3",
    drug_doserange: "2-5",
    drug_maxdose: "15",
    drug_mindose: "1.25",
    drug_toxicdose: "25",
    Drug_quantity_eliminated: "",
    drug_actionbp: "1",
    drug_actionhr: "-1",
    drug_type: "Ago",
    changeinbp: "3",
    changeinhr: "-3",
    doseIncrVal: "1",
    nature: "Neutral",
    group: "1"
  }, {
    drug_name: "Isoprenaline",
    intervention_no: "6",
    unk_no: "3",
    drug_code: "Iso",
    drug_recdose: "3",
    drug_doserange: "2-5",
    drug_maxdose: "15",
    drug_mindose: "1.25",
    drug_toxicdose: "25",
    Drug_quantity_eliminated: "",
    drug_actionbp: "-1",
    drug_actionhr: "1",
    drug_type: "Ago",
    changeinbp: "-3",
    changeinhr: "3",
    doseIncrVal: "1",
    nature: "Adrenergic drug",
    group: "2"
  }, {
    drug_name: "Acetylcholine",
    intervention_no: "7",
    unk_no: "4",
    drug_code: "ACh",
    drug_recdose: "5",
    drug_doserange: "2-10",
    drug_maxdose: "40",
    drug_mindose: "1.25",
    drug_toxicdose: "50",
    Drug_quantity_eliminated: "",
    drug_actionbp: "-1",
    drug_actionhr: "-1",
    drug_type: "Ago",
    changeinbp: "-3",
    changeinhr: "-3",
    doseIncrVal: "1",
    nature: "Adrenergic drug",
    group: "6"
  }, {
    drug_name: "Histamine",
    intervention_no: "8",
    unk_no: "5",
    drug_code: "Hist",
    drug_recdose: "3",
    drug_doserange: "2-5",
    drug_maxdose: "15",
    drug_mindose: "1.25",
    drug_toxicdose: "25",
    Drug_quantity_eliminated: "",
    drug_actionbp: "-1",
    drug_actionhr: "-1",
    drug_type: "Ago",
    changeinbp: "-3",
    changeinhr: "2",
    doseIncrVal: "1",
    nature: "Adrenergic drug",
    group: "2"
  }, {
    drug_name: "Ephedrine",
    intervention_no: "9",
    unk_no: "0",
    drug_code: "Ephe",
    drug_recdose: "200",
    drug_doserange: "100 - 200",
    drug_maxdose: "800",
    drug_mindose: "50",
    drug_toxicdose: "1000",
    Drug_quantity_eliminated: "",
    drug_actionbp: "1",
    drug_actionhr: "1",
    drug_type: "Ago",
    changeinbp: "3",
    changeinhr: "2",
    doseIncrVal: "20",
    nature: "Anticholinergic",
    group: "1"
  }, {
    drug_name: "Phentolamine",
    intervention_no: "10",
    unk_no: "7",
    drug_code: "Phen",
    drug_recdose: "1000",
    drug_doserange: "----",
    drug_maxdose: "2500",
    drug_mindose: "500",
    drug_toxicdose: "3000",
    Drug_quantity_eliminated: "10",
    drug_actionbp: "-1",
    drug_actionhr: "1",
    drug_type: "Ant",
    changeinbp: "-3",
    changeinhr: "2",
    doseIncrVal: "100",
    nature: "Anticholinergic",
    group: "2",
    druglevel: 0
  }, {
    drug_name: "Propranolol",
    intervention_no: "11",
    unk_no: "8",
    drug_code: "Prop",
    drug_recdose: "1000",
    drug_doserange: "----",
    drug_maxdose: "2500",
    drug_mindose: "500",
    drug_toxicdose: "3000",
    Drug_quantity_eliminated: "10",
    drug_actionbp: "-1",
    drug_actionhr: "-1",
    drug_type: "Ant",
    changeinbp: "-3",
    changeinhr: "-2",
    doseIncrVal: "100",
    nature: "Anticholinergic",
    group: "3",
    druglevel: 0
  }, {
    drug_name: "Atropine",
    intervention_no: "12",
    unk_no: "9",
    drug_code: "Atro",
    drug_recdose: "750",
    drug_doserange: "500 - 1000",
    drug_maxdose: "4000",
    drug_mindose: "250",
    drug_toxicdose: "5000",
    Drug_quantity_eliminated: "10",
    drug_actionbp: "0",
    drug_actionhr: "0",
    drug_type: "Ant",
    changeinbp: "0",
    changeinhr: "2",
    doseIncrVal: "100",
    nature: "Cholinergic drugs",
    group: "4",
    druglevel: 0
  }, {
    drug_name: "Mepyramine",
    intervention_no: "13",
    unk_no: "10",
    drug_code: "Mepy",
    drug_recdose: "5000",
    drug_doserange: "----",
    drug_maxdose: "0",
    drug_mindose: "2500",
    drug_toxicdose: "0",
    Drug_quantity_eliminated: "10",
    drug_actionbp: "0",
    drug_actionhr: "0",
    drug_type: "Ant",
    changeinbp: "0",
    changeinhr: "0",
    doseIncrVal: "100",
    nature: "Cholinergic drugs",
    group: "5",
    druglevel: 0
  }, {
    drug_name: "Cimetidine",
    intervention_no: "14",
    unk_no: "11",
    drug_code: "Cime",
    drug_recdose: "5000",
    drug_doserange: "----",
    drug_maxdose: "0",
    drug_mindose: "2500",
    drug_toxicdose: "0",
    Drug_quantity_eliminated: "10",
    drug_actionbp: "0",
    drug_actionhr: "0",
    drug_type: "Ant",
    changeinbp: "0",
    changeinhr: "0",
    doseIncrVal: "100",
    nature: "Cholinergic drugs",
    group: "5",
    druglevel: 0
  }]
};

/***/ }),

/***/ "./src/js/prototypes.js":
/*!******************************!*\
  !*** ./src/js/prototypes.js ***!
  \******************************/
/*! exports provided: initialise, drawGuideLines */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initialise", function() { return initialise; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "drawGuideLines", function() { return drawGuideLines; });
function initialise() {
  this.canvasClicked = false;
  this.dogs = [];
  this.antagonist = [];
  this.heartRateMaxVal = 220;
  this.heartRateMultiplesOf = 20;
  this.BPInitVal = 0;
  this.BPMaxVal = 200;
  this.BPMultiplesOf = 20;
  this.bottomSpace = 10;
  this.timerval = 200;
  this.newDogGap = 50;
  this.bpnormalVlaue = 20;
  this.hrnormalVlaue = 3;
  this.currentDrugVal = 0;
  this.drugObject = {};
  this.dogDead = false;
  this.footerIncr = 0;
  this.tempCnt = 1;
  this.dogCnt = 0;
  this.moveGraph = 0;
  this.initialBPValue = 110;
  this.initialHRValue = 138;
}

function drawGuideLines() {
  var event = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
  if (!event || !event.clientX) return null;

  var _this$ctx$canvas$getB = this.ctx.canvas.getBoundingClientRect(),
      left = _this$ctx$canvas$getB.left,
      top = _this$ctx$canvas$getB.top;

  var mouseX = event.clientX - left;
  var mouseY = event.clientY - top;

  if (mouseX >= this.horizontalLineStart && mouseX <= this.horizontalLineEnd && mouseY >= this.verticalLineStart && mouseY <= this.verticalLineEnd) {
    // this.ctx.save()
    //  this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.beginPath();
    this.ctx.moveTo(mouseX, this.verticalLineStart);
    this.ctx.lineTo(mouseX, this.verticalLineEnd);
    this.ctx.moveTo(this.horizontalLineStart, mouseY);
    this.ctx.lineTo(this.horizontalLineEnd, mouseY);
    this.ctx.lineWidth = "1";
    this.ctx.strokeStyle = "green";
    this.ctx.stroke();
    this.ctx.closePath(); // this.ctx.restore();
  }

  return;
}



/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DogHeartLab; });
/* harmony import */ var _drugs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./drugs */ "./src/js/drugs.js");
/* harmony import */ var _prototypes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./prototypes */ "./src/js/prototypes.js");
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(n); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }



function DogHeartLab(_ref) {
  var _this = this;

  var canvas = _ref.canvas,
      _ref$step = _ref.step,
      step = _ref$step === void 0 ? -4 : _ref$step,
      grids = _ref.grids,
      _ref$height = _ref.height,
      height = _ref$height === void 0 ? 300 : _ref$height,
      _ref$width = _ref.width,
      width = _ref$width === void 0 ? 700 : _ref$width,
      scroller = _ref.scroller;
  return function (canvas, step) {
    var canvas = canvas;
    var tempMoveGraph = 0;
    var ctx;
    canvas.height = height;
    canvas.width = width;
    var step = 0;
    var canvasBorder = 30;
    var padding = 15;
    var moveDogTimer = null;
    _this.ctx = ctx = canvas.getContext("2d");

    var _ref2 = (grids === null || grids === void 0 ? void 0 : grids.options) || {},
        _ref2$GridSize = _ref2.GridSize,
        GridSize = _ref2$GridSize === void 0 ? 1 : _ref2$GridSize,
        _ref2$LinesSize = _ref2.LinesSize,
        LinesSize = _ref2$LinesSize === void 0 ? 1 : _ref2$LinesSize,
        _ref2$color = _ref2.color,
        color = _ref2$color === void 0 ? "#f2f2f2" : _ref2$color;

    var _ref3 = (grids === null || grids === void 0 ? void 0 : grids.axis) || {},
        _ref3$y = _ref3.y,
        y = _ref3$y === void 0 ? {
      start: 0,
      end: 0,
      gap: 10
    } : _ref3$y;

    _this.heightOfZeroValue = _this.verticalLineEnd = canvasBorder + (y.end - y.start) / y.gap * GridSize;
    _this.noOfHorizontalGrids = Math.floor((width - canvasBorder - canvasBorder) / GridSize);
    _this.horizontalLineStart = _this.verticalLineStart = canvasBorder;
    _this.horizontalLineEnd = canvasBorder + _this.noOfHorizontalGrids * GridSize;

    function calculateHeightInPixel(px) {
      return canvasBorder + (y.end - px) / y.gap * GridSize;
    }

    _this.drawAxes = function (ctx, axes) {
      var i;
      var width = ctx.canvas.width;
      var height = ctx.canvas.height;
      var xMin = 0;
      ctx.beginPath();
      ctx.lineWidth = LinesSize;
      ctx.strokeStyle = color;
      GridSize = parseInt(grids.options.GridSize); // console.log(this.horizontalLineEnd)
      // draw horizontal lines

      for (var _i = canvasBorder; _i <= this.heightOfZeroValue; _i += GridSize) {
        if (_i === canvasBorder) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(canvasBorder, _i + 3);
          ctx.lineTo(this.horizontalLineEnd, _i + 3);
          ctx.lineWidth = "6";
          ctx.strokeStyle = "#797979";
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        } else if (_i === this.heightOfZeroValue) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(canvasBorder, _i);
          ctx.lineTo(this.horizontalLineEnd, _i);
          ctx.lineWidth = "2";
          ctx.strokeStyle = "#797979";
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.moveTo(canvasBorder, _i);
          ctx.lineTo(this.horizontalLineEnd, _i);
          ctx.stroke();
          ctx.closePath();
        }
      }

      for (var _i2 = canvasBorder, pos = y.end; _i2 <= this.horizontalLineEnd; _i2 += GridSize) {
        // draw vertical lines
        //  console.log(i, this.horizontalLineEnd, noOfHorizontalGrids)
        if (_i2 === canvasBorder || _i2 === this.horizontalLineEnd) {
          ctx.save();
          ctx.beginPath();
          ctx.moveTo(_i2, canvasBorder);
          ctx.lineTo(_i2, this.heightOfZeroValue);
          ctx.lineWidth = "2";
          ctx.strokeStyle = "#797979";
          ctx.stroke();
          ctx.closePath();
          ctx.restore();
        } else {
          ctx.beginPath();
          ctx.moveTo(_i2, canvasBorder);
          ctx.lineTo(_i2, this.heightOfZeroValue);
          ctx.stroke();
          ctx.closePath();
        } //draw point marks eg --
        //draw left and right points


        if (pos >= 0) {
          if (pos % 20 == 0) {
            // draw for heart rate
            ctx.beginPath();
            ctx.save();
            ctx.moveTo(canvasBorder, _i2 + 1);
            ctx.lineTo(canvasBorder + 12, _i2 + 1);
            ctx.lineWidth = "2";
            ctx.strokeStyle = "#797979";
            ctx.stroke();
            ctx.font = "9px Arial";
            ctx.textAlign = "baseline";
            ctx.fillStyle = "red";
            ctx.fillText(pos, padding - 5, _i2 + 4);
            ctx.restore();
            ctx.closePath(); //draw for Mean BP

            ctx.beginPath();
            ctx.save();
            ctx.moveTo(this.horizontalLineEnd, _i2 + 1);
            ctx.lineTo(this.horizontalLineEnd - 12, _i2 + 1);
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.font = "9px Arial";
            ctx.textAlign = "baseline";
            ctx.fillStyle = "blue";
            ctx.fillText(pos, width - canvasBorder, _i2 + 2);
            ctx.stroke();
            ctx.restore();
            ctx.closePath();
          }

          if (pos % 10 == 0) {
            ctx.beginPath();
            ctx.save();
            ctx.moveTo(canvasBorder, _i2 + 1);
            ctx.lineTo(canvasBorder + 7, _i2 + 1);
            ctx.lineWidth = "2";
            ctx.strokeStyle = "#797979";
            ctx.stroke();
            ctx.restore();
            ctx.closePath();
            ctx.beginPath();
            ctx.save();
            ctx.moveTo(this.horizontalLineEnd, _i2 + 1);
            ctx.lineTo(this.horizontalLineEnd - 7, _i2 + 1);
            ctx.lineWidth = "2";
            ctx.strokeStyle = "blue";
            ctx.stroke();
            ctx.restore();
          }
        }

        pos -= y.gap;
      }

      ctx.beginPath();
      ctx.font = "14px Arial";
      ctx.textAlign = "baseline";
      ctx.fillStyle = "red";
      ctx.fillText("Heart Rate (bpm)", canvasBorder, this.heightOfZeroValue + padding);
      ctx.closePath();
      ctx.beginPath();
      ctx.font = "14px Arial";
      ctx.textAlign = "baseline";
      ctx.fillStyle = "blue";
      var text = "Mean BP (mm Hg)";
      ctx.fillText(text, this.horizontalLineEnd - ctx.measureText(text).width, this.heightOfZeroValue + padding);
      ctx.closePath(); // ctx.stroke();
    };

    _this.convertCanvasToImage = function () {
      if (!canvas) return false;
      var image = new Image();
      image.src = canvas.toDataURL();
      var myWindow = window.open("", "saveImage", "width=" + width + ",height=" + height);
      myWindow.document.write("<div id='canvasImage'></div>");
      myWindow.document.getElementById("canvasImage").append(image);
      return image;
    };

    _this.canvas_arrow = function (context, fromx, fromy, tox, toy) {
      var headlen = 6; // length of head in pixels

      var dx = tox - fromx;
      var dy = toy - fromy;
      var angle = Math.atan2(dy, dx);
      context.beginPath();
      context.moveTo(fromx, fromy);
      context.lineTo(tox, toy);
      context.lineTo(tox - headlen * Math.cos(angle - Math.PI / 6), toy - headlen * Math.sin(angle - Math.PI / 6));
      context.moveTo(tox, toy);
      context.lineTo(tox - headlen * Math.cos(angle + Math.PI / 6), toy - headlen * Math.sin(angle + Math.PI / 6));
      context.strokeStyle = "black";
      context.stroke();
      context.closePath();
    };

    _this.getCurvePoints = function getCurvePoints(pts, tension, isClosed, numOfSegments) {
      // use input value if provided, or use a default value
      tension = typeof tension != "undefined" ? tension : 0.5;
      isClosed = isClosed ? isClosed : false;
      numOfSegments = numOfSegments ? numOfSegments : 16;
      var _pts = [],
          res = [],
          // clone array
      x,
          y,
          // our x,y coords
      t1x,
          t2x,
          t1y,
          t2y,
          // tension vectors
      c1,
          c2,
          c3,
          c4,
          // cardinal points
      st,
          t,
          i; // steps based on num. of segments
      // clone array so we don't change the original
      //

      _pts = pts.slice(0); // The algorithm require a previous and next point to the actual point array.
      // Check if we will draw closed or open curve.
      // If closed, copy end points to beginning and first points to end
      // If open, duplicate first points to befinning, end points to end

      if (isClosed) {
        _pts.unshift(pts[pts.length - 1]);

        _pts.unshift(pts[pts.length - 2]);

        _pts.unshift(pts[pts.length - 1]);

        _pts.unshift(pts[pts.length - 2]);

        _pts.push(pts[0]);

        _pts.push(pts[1]);
      } else {
        _pts.unshift(pts[1]); //copy 1. point and insert at beginning


        _pts.unshift(pts[0]);

        _pts.push(pts[pts.length - 2]); //copy last point and append


        _pts.push(pts[pts.length - 1]);
      } // ok, lets start..
      // 1. loop goes through point array
      // 2. loop goes through each segment between the 2 pts + 1e point before and after


      for (i = 2; i < _pts.length - 4; i += 2) {
        for (t = 0; t <= numOfSegments; t++) {
          // calc tension vectors
          t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
          t2x = (_pts[i + 4] - _pts[i]) * tension;
          t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
          t2y = (_pts[i + 5] - _pts[i + 1]) * tension; // calc step

          st = t / numOfSegments; // calc cardinals

          c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
          c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
          c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
          c4 = Math.pow(st, 3) - Math.pow(st, 2); // calc x and y cords with common control vectors

          x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
          y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y; //store points in array

          res.push([x, y]); // res.push(y);
        }
      }

      return res;
    };

    _this.findPosition = function (_ref4) {
      var max = _ref4.max,
          current = _ref4.current,
          time = _ref4.time,
          conditionPositive = _ref4.conditionPositive;

      // if(max === current) return max;
      if (conditionPositive) {
        var distance = current / (max - current) * time; // console.log(distance, max, current, time)

        return Number.isFinite(max - distance) ? max - distance : 0;
      } else {
        var _distance = max / (current - max) * time; // console.log(distance, max, current, time)


        return Number.isFinite(_distance - current) ? _distance - current : 0;
      } // return ((max - current)  ) * time

    };

    _this.checkCondition = function (_ref5) {
      var conditionPositive = _ref5.conditionPositive,
          position = _ref5.position,
          val = _ref5.val,
          current = _ref5.current;

      // calculation values for positive eg. point from 0 to 10
      if (conditionPositive) {
        if (current < 0) return false; // debugger;

        return position <= val;
      } else {
        // if(current > val) return false;
        if (val < 0) {
          if (current < val) return false;
        }

        return position >= val;
      }
    };

    _this.plotSine = function (ctx, xOffset, yOffset) {
      var _this2 = this;

      var width = ctx.canvas.width;
      var height = ctx.canvas.height;
      var scale = 20;
      ctx.beginPath();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = "rgb(66,44,255)"; // console.log("Drawing point...");
      // drawPoint(ctx, yOffset+step);

      var singleGridSizeHR = this.horizontalLineEnd - 100;
      var HR_x = 0;
      var HR_y = 0;
      var HR_amplitude = 2; // var frequency = 0.1;
      // var amplitude = 40;

      var HR_frequency = 0.1;
      var singleGridSizeBP = this.horizontalLineEnd;
      var BP_x = 0;
      var BP_y = 0;
      var BP_amplitude = 20;
      var BP_frequency = 0.1;
      var currentBpValue = calculateHeightInPixel(this.initialBPValue);
      var currentHrValue = calculateHeightInPixel(this.initialHRValue);
      var currentX = calculateHeightInPixel(this.initialBPValue); // console.log(this.dogs)

      this.dogs.forEach(function (dogs) {
        //
        ctx.save();
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.font = "11px Arial";

        _this2.canvas_arrow(ctx, BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(206), BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(198));

        ctx.fillText(dogs.dogtxt, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(200));
        ctx.fillText(dogs.dogCount, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(190));
        ctx.closePath();
        ctx.restore();
        dogs.drugs.forEach(function (drug, drugIndex) {
          if (drugIndex !== 0) {
            ctx.save();
            ctx.beginPath();
            ctx.fillStyle = "black";
            ctx.font = "11px Arial";

            _this2.canvas_arrow(ctx, BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(7), BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(15));

            ctx.fillText(drug.name, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(10));
            ctx.fillText(drug.value, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(3));
            ctx.closePath();
            ctx.restore();
          }

          ctx.beginPath();
          ctx.strokeStyle = "blue";
          ctx.moveTo(BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(_this2.initialBPValue)); // ctx.shadowColor = "blue";
          // ctx.shadowOffsetY = 1;
          // ctx.shadowBlur = 0.9;

          var TimingArray = drug.TimingArray;
          drug.DoseValArray.forEach(function (val, index, bpArray) {
            var timing = TimingArray[index];
            var current = index === 0 ? val : val - bpArray[index - 1];
            var speed = !isNaN(current / timing) ? Math.abs(current / timing) : 0;
            var distance = speed * timing;

            var points = _this2.getCurvePoints([BP_x, BP_y, BP_x + Math.abs(current), val], timing, false, (val + Math.abs(current)) * timing);

            BP_y += current;
            var increment = points[0][0];
            points.forEach(function (point) {
              var xAxis = point[0] + _this2.horizontalLineEnd - _this2.moveGraph;
              var yaXis = currentBpValue - GridSize / y.gap * point[1] + BP_amplitude * Math.sin(increment / BP_frequency);
              increment++;
              ctx.lineTo(xAxis, yaXis);
            });
            BP_x = points[points.length - 1][0];

            if (current === 0 && val === 0) {
              var loopZer0 = y.gap;

              while (loopZer0 > 0) {
                var xAxis = BP_x + _this2.horizontalLineEnd - _this2.moveGraph;
                var yaXis = currentBpValue + BP_amplitude * Math.sin(BP_x / BP_frequency);
                BP_x = BP_x + 1;
                ctx.lineTo(xAxis, yaXis);
                loopZer0--;
              }
            }
          });
          ctx.stroke();
          ctx.closePath();
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.moveTo(HR_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(_this2.initialHRValue));
          drug.HrValArray.forEach(function (val, index, hrArray) {
            var timing = TimingArray[index];
            var current = index === 0 ? val : val - hrArray[index - 1];
            var speed = !isNaN(current / timing) ? Math.abs(current / timing) : 0;
            var distance = speed * timing;

            var points = _this2.getCurvePoints([HR_x, HR_y, HR_x + Math.abs(current), val], timing, false, (val + Math.abs(current)) * timing);

            HR_y += current;
            var increment = points[0][0];
            points.forEach(function (point) {
              var xAxis = point[0] + _this2.horizontalLineEnd - _this2.moveGraph;
              var yaXis = currentHrValue - GridSize / y.gap * point[1] + HR_amplitude * Math.sin(increment / HR_frequency);
              increment++;
              ctx.lineTo(xAxis, yaXis);
            });
            HR_x = points[points.length - 1][0];

            if (current === 0 && val === 0) {
              var loopZer0 = y.gap;

              while (loopZer0 > 0) {
                var xAxis = HR_x + _this2.horizontalLineEnd - _this2.moveGraph;
                var yaXis = currentHrValue + HR_amplitude * Math.sin(HR_x / HR_frequency);
                HR_x = HR_x + 1;
                ctx.lineTo(xAxis, yaXis);
                loopZer0--;
              }
            }
          });
          var maxX = Math.max(HR_x, BP_x);

          while (HR_x < maxX) {
            var xAxis = HR_x + _this2.horizontalLineEnd - _this2.moveGraph;
            var yaXis = currentBpValue + BP_amplitude * Math.sin(HR_x / BP_frequency);
            HR_x += 1;
            ctx.lineTo(xAxis, yaXis);
          }

          ctx.stroke();
          ctx.closePath();
          ctx.beginPath();
          ctx.strokeStyle = "blue";
          ctx.moveTo(BP_x + _this2.horizontalLineEnd - _this2.moveGraph, currentBpValue + BP_amplitude * Math.sin(BP_x / BP_frequency));

          while (BP_x < maxX) {
            var _xAxis = BP_x + _this2.horizontalLineEnd - _this2.moveGraph;

            var _yaXis = currentBpValue + BP_amplitude * Math.sin(BP_x / BP_frequency);

            BP_x += 1;
            ctx.lineTo(_xAxis, _yaXis);
          }

          ctx.stroke();
          ctx.closePath();
          HR_x = BP_x = maxX;
          ctx.restore();
        });
        BP_x += 3 * GridSize;
        HR_x += 3 * GridSize;
      });
    };

    _this.draw = function () {
      ctx.clearRect(0, 0, width, height);
      this.drawAxes(ctx);
      this.canvasClicked && this.drawGuideLines(this.mouseObj);
      ctx.save();
      ctx.rect(canvasBorder, canvasBorder, this.horizontalLineEnd - canvasBorder, this.verticalLineEnd - canvasBorder);
      ctx.clip();
      this.plotSine(ctx, 10, 50);
      ctx.restore();
      step += 1;
      window.requestAnimationFrame(this.draw.bind(this));
    };

    _this.getDrug = function (drugName) {
      return _drugs__WEBPACK_IMPORTED_MODULE_0__["drugs"].drug.filter(function (val) {
        return val.drug_name === drugName;
      });
    };

    _this.addDrug = function () {
      var drugs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.dogs[this.dogs.length - 1].drugs.push(drugs);
      this.dogCalculateX();
    };

    _this.moveDog = function (value) {
      var _this3 = this;

      clearTimeout(moveDogTimer);

      if (this.moveGraph <= value) {
        this.moveGraph++;
        moveDogTimer = setTimeout(function () {
          _this3.moveDog(value);
        }, 1);
      }

      if (this.moveGraph < this.horizontalLineEnd - canvasBorder) {
        scroller.setAttribute("disabled", true);
      } else {
        scroller.removeAttribute("disabled");
        scroller.setAttribute("min", this.horizontalLineEnd - canvasBorder - 5);
        scroller.setAttribute("max", this.moveGraph);
        scroller.value = this.moveGraph;
      }
    };

    _this.wrapText = function wrapText(context, text, x, y, maxWidth, lineHeight) {
      var words = text.split(" ");
      var line = "";

      for (var n = 0; n < words.length; n++) {
        var testLine = line + words[n] + " ";
        var metrics = context.measureText(testLine);
        var testWidth = metrics.width;

        if (testWidth > maxWidth) {
          context.fillText(line, x, y);
          line = words[n] + " ";
          y += lineHeight;
        } else {
          line = testLine;
        }
      }

      context.fillText(line, x, y);
    };

    _this.addDog = function () {
      // const newDog = drugs.drug
      this.currentActingDrug = {};
      this.dogDeadFlg = false;
      var newDog = {
        dogtxt: "Dog",
        dogCount: "No:" + (this.dogs.length + 1),
        drugCode: "normalnew",
        val: "",
        drugs: [{
          DoseValArray: [0, 0, 0],
          HrValArray: [0, 0, 0],
          TimingArray: [0, 0, 0]
        }],
        drugDose: 0
      };
      this.dogs.push(newDog);

      if (this.dogs.length > 1) {
        this.moveGraph += 3 * GridSize;
      }

      this.dogCalculateX();
    };

    _this.dogCalculateX = function () {
      var _this4 = this;

      var totalDrawX = 0;
      var dosevalX = 0;
      var dosevalY = 0;
      var HRvalX = 0;
      var HRvalY = 0;
      if (tempMoveGraph > 0) this.moveGraph = tempMoveGraph;
      this.dogs.forEach(function (dogs, index, arr) {
        dogs.drugs.forEach(function (drug) {
          var TimingArray = drug.TimingArray;
          drug.DoseValArray.forEach(function (val, index, bpArray) {
            var timing = TimingArray[index];
            var current = index === 0 ? val : val - bpArray[index - 1];

            var points = _this4.getCurvePoints([dosevalX, dosevalY, dosevalX + Math.abs(current), val], timing, false, (val + Math.abs(current)) * timing);

            dosevalY += current;
            dosevalX = points[points.length - 1][0];

            if (current === 0 && val === 0) {
              var loopZer0 = y.gap;

              while (loopZer0 > 0) {
                dosevalX = dosevalX + 1;
                loopZer0--;
              }
            }
          });
          drug.HrValArray.forEach(function (val, index, hrArray) {
            var timing = TimingArray[index];
            var current = index === 0 ? val : val - hrArray[index - 1];

            var points = _this4.getCurvePoints([HRvalX, HRvalY, HRvalX + Math.abs(current), val], timing, false, (val + Math.abs(current)) * timing);

            HRvalY += current;
            HRvalX = points[points.length - 1][0];

            if (current === 0 && val === 0) {
              var loopZer0 = y.gap;

              while (loopZer0 > 0) {
                HRvalX = HRvalX + 1;
                loopZer0--;
              }
            }
          });
          if (totalDrawX < Math.max(dosevalX, HRvalX)) totalDrawX = Math.max(dosevalX, HRvalX); // console.log(totalDrawX)
        });

        if (arr[index + 1]) {
          HRvalX += 3 * GridSize;
          dosevalX += 3 * GridSize; // console.log(totalDrawX)
        }

        ;
      });
      tempMoveGraph = totalDrawX;
      this.moveDog(totalDrawX);
    };

    _this.shuffleArray = function (arr) {
      var arr2 = [];

      while (arr.length > 0) {
        arr2.push(arr.splice(Math.round(Math.random() * arr.length - 1), 1)[0]);
      }

      return arr2;
    };

    _this.getArrayByGroup = function () {
      var group_1 = [];
      var group_2 = [];
      var group_3 = [];
      var group_4 = [];
      var group_5 = [];
      var group_6 = [];
      var tempArr = [];
      _drugs__WEBPACK_IMPORTED_MODULE_0__["drugs"].drug.forEach(function (thing) {
        if (thing.drug_type != "Pro") {
          switch (thing.group.toString()) {
            case "1":
              group_1.push(thing);
              break;

            case "2":
              group_2.push(thing);
              break;

            case "3":
              group_3.push(thing);
              break;

            case "4":
              group_4.push(thing);
              break;

            case "5":
              group_5.push(thing);
              break;

            case "6":
              group_6.push(thing);
              break;

            default:
              break;
          }
        }
      });

      var _this$shuffleArray = this.shuffleArray(group_1),
          _this$shuffleArray2 = _slicedToArray(_this$shuffleArray, 1),
          group_1_index = _this$shuffleArray2[0];

      var _this$shuffleArray3 = this.shuffleArray(group_2),
          _this$shuffleArray4 = _slicedToArray(_this$shuffleArray3, 1),
          group_2_index = _this$shuffleArray4[0];

      var _this$shuffleArray5 = this.shuffleArray(group_3),
          _this$shuffleArray6 = _slicedToArray(_this$shuffleArray5, 1),
          group_3_index = _this$shuffleArray6[0];

      var _this$shuffleArray7 = this.shuffleArray(group_4),
          _this$shuffleArray8 = _slicedToArray(_this$shuffleArray7, 1),
          group_4_index = _this$shuffleArray8[0];

      var _this$shuffleArray9 = this.shuffleArray(group_5),
          _this$shuffleArray10 = _slicedToArray(_this$shuffleArray9, 1),
          group_5_index = _this$shuffleArray10[0];

      var _this$shuffleArray11 = this.shuffleArray(group_6),
          _this$shuffleArray12 = _slicedToArray(_this$shuffleArray11, 1),
          group_6_index = _this$shuffleArray12[0];

      tempArr.push(group_1_index, group_2_index, group_3_index, group_4_index, group_5_index, group_6_index);
      return tempArr;
    };

    _this.timer = function () {};

    _this.injectSaline = function () {};

    _this.injectDrug = function () {
      //injectable object
      var drugObject = {
        DoseValArray: DoseValArray,
        HrValArray: HrValArray,
        TimingArray: TimingArray,
        val: val,
        drugCode: drugCode
      };
    };

    _this.init = function () {
      var _this5 = this;

      this.initialise();
      canvas.addEventListener("mousemove", function (e) {
        _this5.mouseObj = e;
      });
      canvas.addEventListener("click", function (e) {
        _this5.canvasClicked = !_this5.canvasClicked;
      });
      scroller.setAttribute("step", 1);
      scroller.addEventListener("input", function (e) {
        _this5.moveGraph = e.target.value;
      });
      var getArray = this.getArrayByGroup();
      getArray = this.shuffleArray(getArray);
      console.log(getArray.splice(5, 1));
      this.antagonist = _drugs__WEBPACK_IMPORTED_MODULE_0__["drugs"].drug.filter(function (val) {
        return val.drug_type === "Ant";
      });
      this.draw();
      this.addDog();
    };
  }(canvas, step);
}
DogHeartLab.prototype.initialise = _prototypes__WEBPACK_IMPORTED_MODULE_1__["initialise"];
DogHeartLab.prototype.drawGuideLines = _prototypes__WEBPACK_IMPORTED_MODULE_1__["drawGuideLines"];
var dogHeartLab = window.dogHeartLab = new DogHeartLab({
  canvas: document.getElementById("canvas"),
  scroller: document.getElementById("canvasScroller"),
  height: 400,
  width: 800,
  grids: {
    options: {
      color: "#f2f2f5",
      GridSize: 16,
      LinesSize: 1
    },
    axis: {
      y: {
        start: 0,
        gap: 10,
        end: 220
      }
    }
  }
}); // dogHeartLab.init();

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map