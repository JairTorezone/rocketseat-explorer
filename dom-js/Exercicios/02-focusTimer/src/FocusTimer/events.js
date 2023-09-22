import * as actions from "./actions.js";
import { btnApp } from "./elements.js";

export function registerActions() {
  btnApp.addEventListener("click", (event) => {
    const action = event.target.dataset.action;

    if (typeof actions[action] !== "function") {
      return;
    }

    actions[action]();
  });
}
