import { Modal } from "./modal.js";

//variáveis - variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

form.onsubmit = (event) => {
  event.preventDefault();

  const width = inputWeight.value;
  const height = inputHeight.value;

  const result = IMC(width, height);
  const message = `Seu IMC é de ${result}`;

  Modal.message.innerText = message;
  Modal.open();
};

function IMC(weight, height) {
  return (weight / (height / 100) ** 2).toFixed(2);
}
