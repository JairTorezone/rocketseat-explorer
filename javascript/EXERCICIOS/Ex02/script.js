const studants = [];

//função para calcular a média
function calcAvarage(firstNota, secondNota) {
  return (firstNota + secondNota) / 2;
}

//função para ler os dados do estudante
function readStudantData(qtd) {
  for (let i = 0; i < qtd; i++) {
    const nome = prompt(`Informe o nome do ${i + 1}º aluno `);
    const nota1 = Number(prompt("Informe a primeira nota:"));
    const nota2 = Number(prompt("Informe a segunda nota:"));

    let studant = {
      nome: nome,
      firstNota: nota1,
      secondNota: nota2,
    };

    studants.push(studant);
  }
}

//função mostrar dados na tela
function printResult() {
  for (let student of studants) {
    const media = calcAvarage(student.firstNota, student.secondNota);

    if (media >= 7) {
      alert(`A média do(a) aluno(a) ${student.nome} é ${media}
      Parabéns, ${student.nome}! Você foi aprovado(a) no concurso!`);
    } else {
      alert(`A média do(a) aluno(a) ${student.nome} é ${media}
      Não foi dessa vez, ${student.nome}! Tente novamente!`);
    }
  }
}

let qtdStudants = prompt("Informe quantidade alunos?");
readStudantData(qtdStudants);
printResult();
