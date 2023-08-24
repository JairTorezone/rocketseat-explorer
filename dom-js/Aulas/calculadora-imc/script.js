//variáveis - variables
const form = document.querySelector("form");
const inputWeight = document.querySelector("#inputWeight");
const inputHeight = document.querySelector("#inputHeight");

form.onsubmit = (event) => {
  event.preventDefault();

  const width = inputWeight.value;
  const height = inputHeight.value;

  console.log(width, height);
};
