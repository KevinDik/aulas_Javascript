function calcularMedia(teorica=0, pratica1=0, pratica2=0) {
    teorica = teorica * 5;
    pratica1 = pratica1 * 2.5;
    pratica2 = pratica2 * 2.5;
    resultado = (teorica + pratica1 + pratica2) / 10;
    return console.log(`Media do aluno é de ${resultado}`);
}

calcularMedia(4, 6, 7);