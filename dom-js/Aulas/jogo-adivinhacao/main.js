const randomNumber = Math.round(Math.random() * 10);
let xAttempts = 1;

const button = document.querySelector("button");

button.addEventListener("click", function (event) {
  event.preventDefault();

  const inputNumber = document.querySelector("#inputNumber");
  console.log("Valor do input = " + inputNumber.value);

  if (Number(inputNumber.value) == randomNumber) {
    document.querySelector(".screen1").classList.add("hide");
    document.querySelector(".screen2").classList.remove("hide");

    document.querySelector(
      ".screen2 h2"
    ).innerText = `acertou em ${xAttempts} tentativas`;
  }

  console.log("Tentativas " + xAttempts);
  xAttempts++;
});

/**function normal */

// function handleClick(event) {
//   event.preventDefault();

//   const inputNumber = document.querySelector("#inputNumber");
//   console.log("Valor do input = " + inputNumber.value);

//   if (Number(inputNumber.value) == randomNumber) {
//     document.querySelector(".screen1").classList.add("hide");
//     document.querySelector(".screen2").classList.remove("hide");

//     document.querySelector(
//       ".screen2 h2"
//     ).innerText = `acertou em ${xAttempts} tentativas`;
//   }

//   console.log("Tentativas " + xAttempts);
//   xAttempts++;
// }
