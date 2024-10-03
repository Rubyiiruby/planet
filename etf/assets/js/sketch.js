(function () {
  let stars = [];

  window.setup = function () {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent("kv-sketch");

    const startCount = window.matchMedia("(max-width: 767px)").matches
      ? 150
      : 300;

    for (let i = 0; i < startCount; i++) {
      stars.push(new Star());
    }
  };

  window.draw = function () {
    clear();

    for (let star of stars) {
      star.update();
      star.show();
    }
  };
  class Star {
    constructor() {
      this.x = random(width);
      this.y = random(height);
      this.size = random(0.25, 4);
      this.t = random(TAU);
    }

    update() {
      this.t += 0.05;
      this.brightness = map(sin(this.t), -1, 1, 100, 255);
    }

    show() {
      noStroke();
      fill(this.brightness);
      ellipse(this.x, this.y, this.size);
    }
  }

  window.windowResized = function () {
    resizeCanvas(windowWidth, windowHeight);
  };
})();
