// let number01;
// let number02;
// /** 1 - Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador*/

// console.log("Hello Word!");
// alert("Hello Word!");

// /**2 - Crie um script que declare duas variáveis e exiba o resultado da soma entre elas */
// number01 = Number(prompt("Informe o primeiro número"));
// number02 = Number(prompt("Informe o Segundo número"));

// const sum = number01 + number02;
// alert("Soma dos números: " + sum);

// /** 3 - Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número".*/
// const charNumber = "7";

// if (typeof charNumber === "number") {
//   alert(`O caracter "${charNumber}"  é um número`);
// } else {
//   alert(`O caracter "${charNumber}" não é um número`);
// }

// /**4 - Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string". */
// const charString = "sete";
// if (typeof charString === "string") {
//   alert(`O caracter "${charString}"  é uma string`);
// } else {
//   alert(`O caracter "${charString}" não é uma string`);
// }

// /**5 -Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano". */
// const charBoolean = false;
// if (typeof charBoolean === "boolean") {
//   alert(`O caracter "${charBoolean}"  é um boolean`);
// } else {
//   alert(`O caracter "${charBoolean}" não é um boolean`);
// }

// /**6 -Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas. */
// number01 = Number(prompt("Informe o primeiro número"));
// number02 = Number(prompt("Informe o Segundo número"));

// const sub = number01 - number02;
// alert("Subtração dos números: " + sub);

// /**7 - Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas. */
// number01 = Number(prompt("Informe o primeiro número"));
// number02 = Number(prompt("Informe o Segundo número"));

// const mult = number01 * number02;
// alert("Multiplicação dos números: " + mult);

// /** 8 -Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas. */
// number01 = Number(prompt("Informe o primeiro número"));
// number02 = Number(prompt("Informe o Segundo número"));

// const div = number01 / number02;
// alert("Divisão dos números: " + div);

// /** 9 - Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par". */
// let number = Number(prompt("Informe o primeiro número"));

// if (number % 2 == 0) {
//   alert("É um número par");
// } else {
//   alert("Não é um número par");
// }

// /** 10 - Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar". */
// number = Number(prompt("Informe o primeiro número"));

// if (number % 2 != 0) {
//   alert("É um número ímpar");
// } else {
//   alert("Não é um número ímpar");
// }

function calculeOperacao(operator) {
  const number01 = Number(prompt("Informe o primeiro número"));
  const number02 = Number(prompt("Informe o Segundo número"));

  switch (operator) {
    case "+":
      return number01 + number02;
      break;
    case "-":
      return number01 - number02;
      break;
    case "*":
      return number01 * number02;
      break;
    case "/":
      return number01 / number02;
      break;
    default:
      return 0;
      break;
  }
}

console.log("Resultado soma: " + calculeOperacao("*"));
