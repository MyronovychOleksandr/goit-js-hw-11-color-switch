const colors = [
  "#FFFFFF",
  "#2196F3",
  "#4CAF50",
  "#FF9800",
  "#009688",
  "#795548",
];

const refs = {
  body: document.querySelector("body"),
  startBtn: document.querySelector('button[data-action="start"]'),
  stopBtn: document.querySelector('button[data-action="stop"]'),
};

class Switch {
  constructor() {
    this.interval = "";
    this.isActive = false;
  }
  randomIntegerFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  startSwithColor() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    this.interval = setInterval(() => {
      const index = this.randomIntegerFromInterval(0, 5);
      refs.body.style.background = colors[index];
    }, 1000);
  }

  stopSwithColor() {
    clearInterval(this.interval);
    this.interval = "";
    this.isActive = false;
  }
}

const switcher = new Switch();

refs.startBtn.addEventListener("click", () => {
  switcher.startSwithColor();
});

refs.stopBtn.addEventListener("click", () => {
  switcher.stopSwithColor();
});
