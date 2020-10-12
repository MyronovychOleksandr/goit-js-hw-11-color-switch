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

  startSwitchColor() {
    if (this.isActive) {
      return;
    }
    this.isActive = true;
    refs.startBtn.setAttribute('disabled', true)
    let maxNumber = colors.length - 1
    this.interval = setInterval(() => {
      const index = this.randomIntegerFromInterval(0, maxNumber);
      refs.body.style.background = colors[index];
    }, 1000);
  }

  stopSwitchColor() {
    clearInterval(this.interval);
    this.interval = "";
    this.isActive = false;
    refs.startBtn.removeAttribute('disabled')
  }
}

const switcher = new Switch();

refs.startBtn.addEventListener("click", () => {
  switcher.startSwitchColor();
});

refs.stopBtn.addEventListener("click", () => {
  switcher.stopSwitchColor();
});
