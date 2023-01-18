function isNumber(str) {
    return !isNaN(str)
}

function CalcularIMC() {
    event.preventDefault();
    let nomeUsuario = nome.value.toUpperCase();
    let pesoUsuario = Number(peso.value);
    let alturaUsuario = Number(altura.value);
    let calc = pesoUsuario / (alturaUsuario * 2);
    let resultado = document.getElementById('resultado');

    if (isNumber(nomeUsuario) == true) {
        alert('Nome de usuário inválido');
        return
    }
    
    //console.log(isNaN(parseFloat(nome.value)) && isFinite(nome.value))
    if(nomeUsuario && pesoUsuario && alturaUsuario != 0) {
        (calc < 18.5) && (resultado.innerHTML = `${nomeUsuario} Você esta abaixo da media. IMC ${Math.round(calc)}`);
        (calc >= 18.5 && calc < 24.9) && (resultado.innerHTML = `${nomeUsuario} Você esta com o peso ideal. IMC ${Math.round(calc)}`);
        (calc >= 25 && calc < 29.9) && (resultado.innerHTML = `${nomeUsuario} Você esta com sobrepeso. IMC ${Math.round(calc)}`);
        (calc >= 30 && calc < 34.9) && (resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 1. IMC ${Math.round(calc)}`);
        (calc >= 35 && calc < 39.9) && (resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 2. IMC ${Math.round(calc)}`);
        (calc > 40) && (resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 3. IMC ${Math.round(calc)}`);
    } else {
        alert('Atenção alguns dados não foram preenchidos')
        nome.focus();
    }     
}  