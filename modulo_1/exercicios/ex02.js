function mostra_idade(ano) {
    let data = new Date().getFullYear();
    ano > data ? console.log('Erro a data informada não pode ser computada') : console.log(`Thiago possui ${data - ano} anos`);
}

mostra_idade(1995)