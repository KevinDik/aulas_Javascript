function porcentoClasse(alunosPresentes, faltaram) {
    let container = document.getElementById("container");
    let porcentagem = ((faltaram / alunosPresentes) * 100).toFixed(1)
    return porcentagem;
}

container.innerHTML = `A porcentagem de alunos faltantes é de ${porcentoClasse(19, 8)} %`;
