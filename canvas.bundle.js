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
  this.disableAll = false;
  this.isCanvasOnFocus = true;
  this.footerIncr = 0;
  this.tempCnt = 1;
  this.dogCnt = 0;
  this.moveGraph = 0;
  this.initialBPValue = 95;
  this.initialHRValue = 130;
  this.initialHRValue = this.initialHRValue + Math.round(Math.random() * 6);
  this.initialBPValue = this.initialBPValue + Math.round(Math.random() * 12);
  this.bpColor = "#2575ff"; // this.bpColor = "#283593";
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
/* harmony import */ var _prototypes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./prototypes */ "./src/js/prototypes.js");
// import { drugs } from "./drugs";

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
      scroller = _ref.scroller,
      _ref$onComplete = _ref.onComplete,
      onComplete = _ref$onComplete === void 0 ? function () {} : _ref$onComplete,
      _ref$onStart = _ref.onStart,
      onStart = _ref$onStart === void 0 ? function () {} : _ref$onStart;
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
      ctx.beginPath();
      ctx.lineWidth = LinesSize;
      ctx.strokeStyle = color;
      GridSize = parseInt(grids.options.GridSize); // draw horizontal lines

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
            ctx.strokeStyle = this.bpColor;
            ctx.font = "9px Arial";
            ctx.textAlign = "baseline";
            ctx.fillStyle = this.bpColor;
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
            ctx.strokeStyle = this.bpColor;
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
      ctx.fillStyle = this.bpColor;
      var text = "Mean BP (mm Hg)";
      ctx.fillText(text, this.horizontalLineEnd - ctx.measureText(text).width, this.heightOfZeroValue + padding);
      ctx.closePath(); // ctx.stroke();
    };

    _this.convertCanvasToImage = function (param) {
      if (!canvas) return false;
      var width = canvas.width;
      var horizontalLineEnd = this.horizontalLineEnd;
      this.horizontalLineStart = this.verticalLineStart = canvasBorder;

      if (this.moveGraph > horizontalLineEnd - canvasBorder) {
        canvas.width = this.moveGraph + 2 * canvasBorder + GridSize + 15;
      }

      this.noOfHorizontalGrids = Math.floor((canvas.width - canvasBorder - canvasBorder) / GridSize);
      this.horizontalLineEnd = canvasBorder + this.noOfHorizontalGrids * GridSize;
      ctx.save();
      this.draw();
      ctx.globalCompositeOperation = "destination-over";
      ctx.fillStyle = "white";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      var image = new Image();
      var url = image.src = canvas.toDataURL("image/png");
      ctx.restore();
      canvas.width = width;
      this.horizontalLineEnd = horizontalLineEnd;
      this.draw();
      if (param !== "print") saveBase64AsFile(url, "dog-heartlab.jpg");
      return image;
    };

    _this.printCanvas = function () {
      var image = this.convertCanvasToImage("print");
      var myWindow = window.open("", "saveImage", "width=" + 900 + ",height=" + 400);

      if (myWindow.document) {
        myWindow.document.open(); // myWindow.document.body.innerHTML = "";

        myWindow.document.write("<div id='canvasImage' style='width:auto;display:block'></div>");
        myWindow.document.getElementById("canvasImage").append(image); // myWindow.close();

        setTimeout(function () {
          myWindow.focus();
          myWindow.print();
          myWindow.document.close();
          myWindow.close();
        }, 100);
      }
    };

    function saveBase64AsFile(base64, fileName) {
      var link = document.createElement("a");
      document.body.appendChild(link); // for Firefox

      link.setAttribute("href", base64);
      link.setAttribute("download", fileName);
      link.click();
    }

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

    _this.getCurvePoints = function (points, tension, numOfSeg, close) {
      "use strict";

      if (typeof points === "undefined" || points.length < 2) return new Float32Array(0); // options or defaults

      tension = typeof tension === "number" ? tension : 0.5;
      numOfSeg = typeof numOfSeg === "number" ? numOfSeg : 25;
      var pts,
          // for cloning point array
      i = 1,
          l = points.length,
          rPos = 0,
          rLen = (l - 2) * numOfSeg + 2 + (close ? 2 * numOfSeg : 0),
          res = new Float32Array(rLen),
          cache = new Float32Array(numOfSeg + 2 << 2),
          cachePtr = 4;
      pts = points.slice(0);

      if (close) {
        pts.unshift(points[l - 1]); // insert end point as first point

        pts.unshift(points[l - 2]);
        pts.push(points[0], points[1]); // first point as last point
      } else {
        pts.unshift(points[1]); // copy 1. point and insert at beginning

        pts.unshift(points[0]);
        pts.push(points[l - 2], points[l - 1]); // duplicate end-points
      } // cache inner-loop calculations as they are based on t alone


      cache[0] = 1; // 1,0,0,0

      for (; i < numOfSeg; i++) {
        var st = i / numOfSeg,
            st2 = st * st,
            st3 = st2 * st,
            st23 = st3 * 2,
            st32 = st2 * 3;
        cache[cachePtr++] = st23 - st32 + 1; // c1

        cache[cachePtr++] = st32 - st23; // c2

        cache[cachePtr++] = st3 - 2 * st2 + st; // c3

        cache[cachePtr++] = st3 - st2; // c4
      }

      cache[++cachePtr] = 1; // 0,1,0,0
      // calc. points

      parse(pts, cache, l, tension);

      if (close) {
        //l = points.length;
        pts = [];
        pts.push(points[l - 4], points[l - 3], points[l - 2], points[l - 1], // second last and last
        points[0], points[1], points[2], points[3]); // first and second

        parse(pts, cache, 4, tension);
      }

      function parse(pts, cache, l, tension) {
        for (var i = 2, t; i < l; i += 2) {
          var pt1 = pts[i],
              // x1
          pt2 = pts[i + 1],
              // y1
          pt3 = pts[i + 2],
              // x2
          pt4 = pts[i + 3],
              // y2
          t1x = (pt3 - pts[i - 2]) * tension,
              // x2-x0
          t1y = (pt4 - pts[i - 1]) * tension,
              // y2-y0
          t2x = (pts[i + 4] - pt1) * tension,
              // x3-x1
          t2y = (pts[i + 5] - pt2) * tension,
              // y3-y1
          c = 0,
              c1,
              c2,
              c3,
              c4;

          for (t = 0; t < numOfSeg; t++) {
            c1 = cache[c++];
            c2 = cache[c++];
            c3 = cache[c++];
            c4 = cache[c++];
            res[rPos++] = c1 * pt1 + c2 * pt3 + c3 * t1x + c4 * t2x;
            res[rPos++] = c1 * pt2 + c2 * pt4 + c3 * t1y + c4 * t2y;
          }
        }
      } // add last point


      l = close ? 0 : points.length - 2;
      res[rPos++] = points[l++];
      res[rPos] = points[l];
      return res;
    }; // this.getCurvePoints = function getCurvePoints(
    //   pts,
    //   tension,
    //   isClosed,
    //   numOfSegments
    // ) {
    //   // use input value if provided, or use a default value
    //   tension = typeof tension != "undefined" ? tension : 0.5;
    //   isClosed = isClosed ? isClosed : false;
    //   numOfSegments = numOfSegments ? numOfSegments : 16;
    //   var _pts = [],
    //     res = [], // clone array
    //     x,
    //     y, // our x,y coords
    //     t1x,
    //     t2x,
    //     t1y,
    //     t2y, // tension vectors
    //     c1,
    //     c2,
    //     c3,
    //     c4, // cardinal points
    //     st,
    //     t,
    //     i; // steps based on num. of segments
    //   // clone array so we don't change the original
    //   //
    //   _pts = pts.slice(0);
    //   // The algorithm require a previous and next point to the actual point array.
    //   // Check if we will draw closed or open curve.
    //   // If closed, copy end points to beginning and first points to end
    //   // If open, duplicate first points to befinning, end points to end
    //   if (isClosed) {
    //     _pts.unshift(pts[pts.length - 1]);
    //     _pts.unshift(pts[pts.length - 2]);
    //     _pts.unshift(pts[pts.length - 1]);
    //     _pts.unshift(pts[pts.length - 2]);
    //     _pts.push(pts[0]);
    //     _pts.push(pts[1]);
    //   } else {
    //     _pts.unshift(pts[1]); //copy 1. point and insert at beginning
    //     _pts.unshift(pts[0]);
    //     _pts.push(pts[pts.length - 2]); //copy last point and append
    //     _pts.push(pts[pts.length - 1]);
    //   }
    //   // ok, lets start..
    //   // 1. loop goes through point array
    //   // 2. loop goes through each segment between the 2 pts + 1e point before and after
    //   for (i = 2; i < _pts.length - 4; i += 2) {
    //     for (t = 0; t <= numOfSegments; t++) {
    //       // calc tension vectors
    //       t1x = (_pts[i + 2] - _pts[i - 2]) * tension;
    //       t2x = (_pts[i + 4] - _pts[i]) * tension;
    //       t1y = (_pts[i + 3] - _pts[i - 1]) * tension;
    //       t2y = (_pts[i + 5] - _pts[i + 1]) * tension;
    //       // calc step
    //       st = t / numOfSegments;
    //       // calc cardinals
    //       c1 = 2 * Math.pow(st, 3) - 3 * Math.pow(st, 2) + 1;
    //       c2 = -(2 * Math.pow(st, 3)) + 3 * Math.pow(st, 2);
    //       c3 = Math.pow(st, 3) - 2 * Math.pow(st, 2) + st;
    //       c4 = Math.pow(st, 3) - Math.pow(st, 2);
    //       // calc x and y cords with common control vectors
    //       x = c1 * _pts[i] + c2 * _pts[i + 2] + c3 * t1x + c4 * t2x;
    //       y = c1 * _pts[i + 1] + c2 * _pts[i + 3] + c3 * t1y + c4 * t2y;
    //       //store points in array
    //       res.push([x, y]);
    //       // res.push(y);
    //     }
    //   }
    //   return res;
    // };


    _this.plotSine = function (ctx, xOffset, yOffset) {
      var _this2 = this;

      ctx.beginPath();
      ctx.lineWidth = 1.1;
      ctx.strokeStyle = "rgb(66,44,255)";
      var HR_x = 0;
      var HR_y = 0;
      var HR_amplitude = 2; // var frequency = 0.1;
      // var amplitude = 40;

      var HR_frequency = 0.2;
      var BP_x = 0;
      var BP_y = 0;
      var BP_amplitude = 20;
      var BP_frequency = "0.2";
      var currentBpValue = calculateHeightInPixel(this.initialBPValue);
      var currentHrValue = calculateHeightInPixel(this.initialHRValue);
      var currentX = calculateHeightInPixel(this.initialBPValue); // console.log(this.dogs)

      this.dogs.forEach(function (dogs) {
        //
        ctx.save();
        ctx.beginPath();
        HR_y = BP_y = 0;
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

            if (drug.value === "Removed") {
              _this2.canvas_arrow(ctx, BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(15), BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(7));
            } else {
              _this2.canvas_arrow(ctx, BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(7), BP_x + _this2.horizontalLineEnd - _this2.moveGraph - 5, calculateHeightInPixel(15));
            }

            ctx.fillText(drug.name, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(15));
            ctx.fillText(drug.value, BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(5));
            ctx.closePath();
            ctx.restore();
          }

          ctx.beginPath();
          ctx.strokeStyle = _this2.bpColor;
          ctx.moveTo(BP_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(_this2.initialBPValue));
          var TimingArray = drug.TimingArray;
          drug.DoseValArray.forEach(function (val, index, bpArray) {
            var timing = TimingArray[index];

            var points = _this2.getCurvePoints([BP_x, BP_y, BP_x + GridSize * timing / 2.5, val], 0.5, // (BP_x + (GridSize * timing) / 2.5 - BP_x) *  2.5,
            GridSize * timing / 2.5 * 2.5, false);

            if (points.length) {
              // let increment = points[0];
              var increment = 1;

              var _inc = points[2] - points[0] < 0.2 ? 2 : 1;

              for (var i = 0, l = points.length; i < l; i += 2) {
                var xAxis = points[i] + _this2.horizontalLineEnd - _this2.moveGraph;
                var yaXis = currentBpValue - GridSize / y.gap * points[i + 1] + BP_amplitude * Math.sin(increment / BP_frequency);
                ctx.lineTo(xAxis, yaXis);
                increment += 1;
              }

              if (points.length % 2 === 0) {
                BP_x = points[points.length - 2];
                BP_y = points[points.length - 1];
              } else {
                BP_x = points[points.length - 1];
                BP_y = points[points.length - 2];
              }
            } // }

          });
          ctx.stroke();
          ctx.closePath();
          ctx.save();
          ctx.beginPath();
          ctx.strokeStyle = "red";
          ctx.moveTo(HR_x + _this2.horizontalLineEnd - _this2.moveGraph, calculateHeightInPixel(_this2.initialHRValue));
          drug.HrValArray.forEach(function (val, index, hrArray) {
            var timing = TimingArray[index];

            var points = _this2.getCurvePoints([HR_x, HR_y, HR_x + GridSize * timing / 2.5, val], 0.5, (HR_x + GridSize * timing / 2.5 - HR_x) * 2.5, false);

            if (points.length) {
              var increment = points[0];

              for (var i = 0, l = points.length; i < l; i += 2) {
                var xAxis = points[i] + _this2.horizontalLineEnd - _this2.moveGraph;
                var yaXis = currentHrValue - GridSize / y.gap * points[i + 1] + HR_amplitude * Math.sin(increment / HR_frequency);
                increment++;
                ctx.lineTo(xAxis, yaXis);
              }

              if (points.length % 2 === 0) {
                HR_x = points[points.length - 2];
                HR_y = points[points.length - 1];
              } else {
                HR_x = points[points.length - 1];
                HR_y = points[points.length - 2];
              }
            }
          });
          var maxX = Math.max(HR_x, BP_x);

          while (HR_x < maxX) {
            var xAxis = HR_x + _this2.horizontalLineEnd - _this2.moveGraph;
            var yaXis = currentHrValue + HR_amplitude * Math.sin(HR_x / HR_frequency);
            HR_x += 0.44;
            ctx.lineTo(xAxis, yaXis);
          }

          ctx.stroke();
          ctx.closePath();
          ctx.beginPath();
          ctx.strokeStyle = _this2.bpColor;
          ctx.moveTo(BP_x + _this2.horizontalLineEnd - _this2.moveGraph, currentBpValue + BP_amplitude * Math.sin(BP_x / BP_frequency));
          var inc = 1;

          while (BP_x < maxX) {
            var _xAxis = BP_x + _this2.horizontalLineEnd - _this2.moveGraph;

            var _yaXis = currentBpValue + BP_amplitude * Math.sin(inc++ / BP_frequency);

            BP_x += 0.44;
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
      ctx.save();
      ctx.rect(canvasBorder, canvasBorder, this.horizontalLineEnd - canvasBorder, this.verticalLineEnd - canvasBorder);
      ctx.clip();
      this.plotSine(ctx, 10, 50);
      ctx.restore();
      this.canvasClicked && this.drawGuideLines(this.mouseObj); // step += 1;
      // window.requestAnimationFrame(this.draw.bind(this));
    };

    _this.getDrug = function (drugName) {
      return drugs.drug.filter(function (val) {
        return val.drug_name === drugName;
      });
    };

    _this.addDrug = function () {
      var drugs = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
      this.dogs[this.dogs.length - 1].drugs.push(drugs);
      this.dogCalculateX();
      onStart({
        name: "drug"
      });
    };

    _this.moveDog = function (value) {
      var _this3 = this;

      clearTimeout(moveDogTimer);

      if (this.moveGraph <= value) {
        this.moveGraph++;
        this.disableAll = true;
        this.draw();
        moveDogTimer = setTimeout(function () {
          _this3.moveDog(value);
        }, 60);
      } else {
        this.disableAll = false;
        this.animate();
        onComplete(JSON.parse(JSON.stringify(this.dogs)));
      }

      if (this.moveGraph < this.horizontalLineEnd - canvasBorder) {
        scroller.style.display = "none";
      } else {
        scroller.removeAttribute("disabled");
        scroller.style.display = "block";

        if (scroller.parentNode) {
          scroller.parentNode.style.setProperty("--val", this.moveGraph);
          scroller.parentNode.style.setProperty("--min", this.horizontalLineEnd - canvasBorder - 15);
          scroller.parentNode.style.setProperty("--max", this.moveGraph);
        }

        scroller.setAttribute("min", this.horizontalLineEnd - canvasBorder - 15);
        scroller.setAttribute("max", this.moveGraph);
        scroller.value = this.moveGraph;
      }
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
          TimingArray: [1, 3, 3]
        }],
        drugDose: 0
      };
      this.dogs.push(newDog);

      if (this.dogs.length > 1) {
        this.moveGraph += 3 * GridSize;
      }

      this.dogCalculateX();
      onStart({
        name: "dog"
      });
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

            var points = _this4.getCurvePoints([dosevalX, dosevalY, dosevalX + GridSize * timing / 2.5, val], 0.5, dosevalX + GridSize * timing / 2.5, false);

            console.log(points, bpArray);

            if (points.length) {
              if (points.length % 2 === 0) {
                dosevalX = points[points.length - 2];
                dosevalY = points[points.length - 1];
              } else {
                dosevalX = points[points.length - 1];
                dosevalY = points[points.length - 2];
              }
            }
          });
          drug.HrValArray.forEach(function (val, index, hrArray) {
            var timing = TimingArray[index];

            var points = _this4.getCurvePoints([HRvalX, HRvalY, HRvalX + GridSize * timing / 2.5, val], 0.5, HRvalX + GridSize * timing / 2.5, false);

            if (points.length) {
              if (points.length % 2 === 0) {
                HRvalX = points[points.length - 2];
                HRvalY = points[points.length - 1];
              } else {
                HRvalX = points[points.length - 1];
                HRvalY = points[points.length - 2];
              }
            }
          });
          totalDrawX = Math.max(dosevalX, HRvalX);
        });

        if (arr[index + 1]) {
          HRvalX += 3 * GridSize;
          dosevalX += 3 * GridSize;
        }
      });
      tempMoveGraph = totalDrawX;
      this.moveDog(totalDrawX);
    };

    _this.animate = function () {
      if (this.canvasClicked && !this.disableAll && this.isCanvasOnFocus) {
        this.draw();
        console.log("draw");
        window.requestAnimationFrame(this.animate.bind(this));
      }
    };

    _this.init = function () {
      var _this5 = this;

      this.initialise();
      canvas.addEventListener("mousemove", function (e) {
        _this5.mouseObj = e; // if (this.canvasClicked && !this.disableAll) {
        //   this.draw();
        // }
      });
      canvas.addEventListener("click", function (e) {
        _this5.canvasClicked = !_this5.canvasClicked;

        if (_this5.canvasClicked && !_this5.disableAll) {
          _this5.animate();
        } else {
          _this5.draw();
        }
      });
      canvas.addEventListener("mouseleave", function (e) {
        _this5.draw();

        console.log("leave");
        _this5.isCanvasOnFocus = false;

        _this5.draw();
      });
      canvas.addEventListener("mouseenter", function (e) {
        _this5.isCanvasOnFocus = true;

        _this5.animate();
      });
      scroller.setAttribute("step", 1);
      scroller.addEventListener("input", function (e) {
        _this5.moveGraph = e.target.value;
        scroller.parentNode.style.setProperty("--val", e.target.value);
        if (!_this5.disableAll) _this5.draw();
      });
      this.draw();
      this.addDog();
    };
  }(canvas, step);
}
DogHeartLab.prototype.initialise = _prototypes__WEBPACK_IMPORTED_MODULE_0__["initialise"];
DogHeartLab.prototype.drawGuideLines = _prototypes__WEBPACK_IMPORTED_MODULE_0__["drawGuideLines"];
window.DogHeartLab = DogHeartLab; // var dogHeartLab = (window.test = new DogHeartLab({
//   canvas: document.getElementById("canvas"),
//   scroller: document.getElementById("canvasScroller"),
//   onComplete: () => {},
//   onStart: () => {},
//   height: 400,
//   width: 800,
//   grids: {
//     options: {
//       color: "#f2f2f5",
//       GridSize: 16,
//       LinesSize: 1,
//     },
//     axis: {
//       y: { start: 0, gap: 10, end: 220 },
//     },
//   },
// }));
// dogHeartLab.init();
// dogHeartLab.bpColor = "#283593";

/***/ })

/******/ });
//# sourceMappingURL=canvas.bundle.js.map