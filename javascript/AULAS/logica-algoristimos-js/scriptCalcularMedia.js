const nome = prompt("Aluno: ");
let nota1 = prompt("Informe a primeira nota");
let nota2 = prompt("Informe a segunda nota");
let nota3 = prompt("Informe a terceira  nota");

let media = (Number(nota1) + Number(nota2) + Number(nota3)) / 3;
media = media.toFixed(2);

if (media >= 7) {
  alert(`Parabéns você passou! ${nome} - nota final: ${media}`);
} else {
  alert(
    `${nome} - nota final: ${media} - ficou de recuperação, estude um pouco mais`
  );
}
