import state from "./state.js";
import * as sounds from "./sounds.js";
import * as el from "./elements.js";
import * as timer from "./timer.js";

let minutes = Number(el.minutes.textContent);
let seconds = Number(el.seconds.textContent);

export function toggleRunning() {
  state.isRunning = document.documentElement.classList.toggle("running");

  timer.countdown();
  sounds.buttonPressAudio.play();
}

export function reset() {
  state.isRunning = false;
  state.isRunning = document.documentElement.classList.remove("running");

  timer.updateDisplay();
  sounds.buttonPressAudio.play();
}

export function plusMinutes() {
  minutes += state.plusOrMinusMinutes;
  if (minutes > 60) {
    minutes = 25;
  }

  timer.updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

export function minusMinutes() {
  minutes -= state.plusOrMinusMinutes;
  if (minutes <= 0) {
    minutes = 25;
  }

  timer.updateDisplay(minutes, seconds);
  sounds.buttonPressAudio.play();
}

/**********************************************Action Iconnes */
export function toggleTree() {
  state.isTree = el.btnTree.classList.toggle("tree");

  state.isTree ? sounds.floresta.play() : sounds.floresta.pause();
}

export function toggleRain() {
  state.isRain = el.btnRain.classList.toggle("rain");

  state.isRain ? sounds.chuva.play() : sounds.chuva.pause();
}

export function toggleWind() {
  state.isWind = el.btnWind.classList.toggle("wind");

  state.isWind ? sounds.lareira.play() : sounds.lareira.pause();
}

export function toggleFire() {
  state.isFire = el.btnFire.classList.toggle("fire");

  state.isFire ? sounds.cafeteria.play() : sounds.cafeteria.pause();
}
