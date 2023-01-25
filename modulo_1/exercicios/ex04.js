function calcularMedia(teorica=0, pratica1=0, pratica2=0) {
    let container = document.getElementById("container");
    teorica = teorica * 5;
    pratica1 = pratica1 * 2.5;
    pratica2 = pratica2 * 2.5;
    resultado = (teorica + pratica1 + pratica2) / 10;
    return resultado;
}
container.innerHTML = `Media do aluno é de ${resultado}`;

calcularMedia(10, 9, 8);