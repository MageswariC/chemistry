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
  this.moveGraph = 460;
  this.initialBPValue = 120;
}

function drawGuideLines(event = {}) {
  if (!event || !event.clientX) return null;
  const mouseX = event.clientX;
  const mouseY = event.clientY;

  if (
    mouseX >= this.horizontalLineStart &&
    mouseX <= this.horizontalLineEnd &&
    mouseY >= this.verticalLineStart &&
    mouseY <= this.verticalLineEnd
  ) {
    // this.ctx.save()
    //  this.ctx.globalCompositeOperation = "destination-over";
    this.ctx.beginPath();

    this.ctx.moveTo(mouseX, this.verticalLineStart);
    this.ctx.lineTo(mouseX, this.verticalLineEnd);

    this.ctx.moveTo(this.horizontalLineStart, mouseY);
    this.ctx.lineTo(this.horizontalLineEnd, mouseY);

    this.ctx.lineWidth = '1';
    this.ctx.strokeStyle = 'green';
    this.ctx.stroke();
    this.ctx.closePath();
    // this.ctx.restore();
  }
  return;
}

export { initialise, drawGuideLines };
