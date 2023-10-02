import * as el from "./element.js";

export function addColorWihteHome() {
  addMenuBoldHome();
  addMenuBoldExploration();
  addMenuBoldUniverse();
}

const home = el.home;
const universe = el.universe;
const exploration = el.exploration;

function addMenuBoldHome() {
  home.addEventListener("click", () => {
    home.classList.add("colorWhite");

    if (universe.classList.contains("colorWhite")) {
      universe.classList.remove("colorWhite");
    }

    if (exploration.classList.contains("colorWhite")) {
      exploration.classList.remove("colorWhite");
    }
  });
}

function addMenuBoldExploration() {
  exploration.addEventListener("click", () => {
    exploration.classList.add("colorWhite");

    if (universe.classList.contains("colorWhite")) {
      universe.classList.remove("colorWhite");
    }

    if (home.classList.contains("colorWhite")) {
      home.classList.remove("colorWhite");
    }
  });
}

function addMenuBoldUniverse() {
  universe.addEventListener("click", () => {
    universe.classList.add("colorWhite");

    if (home.classList.contains("colorWhite")) {
      home.classList.remove("colorWhite");
    }

    if (exploration.classList.contains("colorWhite")) {
      exploration.classList.remove("colorWhite");
    }
  });
}
