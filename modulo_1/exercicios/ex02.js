function mostra_idade(ano) {
    let container = document.getElementById("container");
    let data = new Date().getFullYear();
    ano > data ? container.innerHTML = 'Erro a data informada não pode ser computada' : container.innerHTML = `Thiago possui ${data - ano} anos`;
}

mostra_idade(1995)