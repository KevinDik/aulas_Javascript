function porcentoClasse(alunosPresentes) {
    let container = document.getElementById("container");
    salaCheia = 19 * 0.5;
    alunosPresentes = alunosPresentes * 0.5;
    return container.innerHTML = `A porcentagem de alunos faltantes é de ${(salaCheia - alunosPresentes) * 10} %`;
}

porcentoClasse(11);