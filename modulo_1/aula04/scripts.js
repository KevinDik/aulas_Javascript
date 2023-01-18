function helloWorld(nome = null) {
    return console.log('hello world ' + (nome ? nome : ''));
}
helloWorld();

function somar(valor1, valor2) {
    return console.log(valor1 + valor2);
}

function contarLetras(texto) {
    return console.log(texto.length);
}
