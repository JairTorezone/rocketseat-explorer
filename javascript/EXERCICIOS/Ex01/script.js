const number01 = Number(prompt("Digite o primeiro número:"));
const number02 = Number(prompt("Digite o segundo número:"));

const sum = number01 + number02;
const sub = number01 - number02;
const mult = number01 * number02;
const div = number01 / number02;
const resto = number01 % number02;

alert(`A soma dos números é : ${sum}`);
alert(`A subtração dos números é : ${sub}`);
alert(`A multiplicação dos números é : ${mult}`);
alert(`A divisão dos números é : ${div}`);
alert(`O resto da divisão dos números é : ${resto}`);

if (sum % 2 == 0) {
  alert(`A soma dos números é par : ${sum}`);
} else {
  alert(`A soma dos números é ímpar : ${sum}`);
}
if (number01 == number02) {
  alert("os números são iguais");
} else {
  alert("os números são diferentes");
}
