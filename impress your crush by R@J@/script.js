let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  constructor(paper) {
    this.paper = paper;
  }

  updatePaperPosition() {
    this.paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
  }

  onMouseMove(e) {
    if(!this.rotating) {
      this.mouseX = e.clientX;
      this.mouseY = e.clientY;

      this.velX = this.mouseX - this.prevMouseX;
      this.velY = this.mouseY - this.prevMouseY;
    }
      
    const dirX = e.clientX - this.mouseTouchX;
    const dirY = e.clientY - this.mouseTouchY;
    const dirLength = Math.sqrt(dirX * dirX + dirY * dirY);
    const dirNormalizedX = dirX / dirLength;
    const dirNormalizedY = dirY / dirLength;

    const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
    let degrees = 180 * angle / Math.PI;
    degrees = (360 + Math.round(degrees)) % 360;
    if(this.rotating) {
      this.rotation = degrees;
    }

    if(this.holdingPaper) {
      if(!this.rotating) {
        this.currentPaperX += this.velX;
        this.currentPaperY += this.velY;
      }
      this.prevMouseX = this.mouseX;
      this.prevMouseY = this.mouseY;

      requestAnimationFrame(this.updatePaperPosition.bind(this));
    }
  }

  onMouseDown(e) {
    if(this.holdingPaper) return; 
    this.holdingPaper = true;

    this.paper.style.zIndex = highestZ;
    highestZ += 1;

    if(e.button === 0) {
      this.mouseTouchX = e.clientX;
      this.mouseTouchY = e.clientY;
      this.prevMouseX = this.mouseTouchX;
      this.prevMouseY = this.mouseTouchY;

      // Listen for mousemove only when dragging starts
      document.addEventListener('mousemove', this.onMouseMove.bind(this));
    }
    if(e.button === 2) {
      this.rotating = true;
      e.preventDefault(); // Prevent context menu on right-click
    }
  }

  onMouseUp() {
    this.holdingPaper = false;
    this.rotating = false;
    document.removeEventListener('mousemove', this.onMouseMove.bind(this));
  }

  init() {
    this.paper.addEventListener('mousedown', this.onMouseDown.bind(this));
    window.addEventListener('mouseup', this.onMouseUp.bind(this));

    // Prevent context menu when right-clicking to rotate
    this.paper.addEventListener('contextmenu', (e) => e.preventDefault());
  }
}

const papers = Array.from(document.querySelectorAll('.paper'));

papers.forEach(paper => {
  const p = new Paper(paper);
  p.init();
});
