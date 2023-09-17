import { controls } from "./elements.js";
import * as actions from "./actions.js";
import { icons } from "./elements.js";

export function registerActions() {
  registerControls();
  registerIcons();
}

function registerControls() {
  controls.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== "function") {
      return;
    }
    actions[action]();
  });
}

function registerIcons() {
  icons.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== "function") {
      return;
    }

    actions[action]();
  });
}
