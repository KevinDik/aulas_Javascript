function porcentoClasse(alunosPresentes) {
    salaCheia = 20 * 0.5;
    alunosPresentes = alunosPresentes * 0.5;
    return console.log(`A porcentagem de alunos faltantes é de ${(salaCheia - alunosPresentes) * 10} %`);
}

porcentoClasse(11);