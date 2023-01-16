function CalcularIMC() {
    event.preventDefault();
    let nomeUsuario = nome.value.toUpperCase();
    let pesoUsuario = Number(peso.value);
    let alturaUsuario = Number(altura.value);
    let calc = pesoUsuario / (alturaUsuario * 2);
    let resultado = document.getElementById('resultado');
    
    //console.log(isNaN(parseFloat(nome.value)) && isFinite(nome.value))
    if(nomeUsuario && pesoUsuario && alturaUsuario != 0) {
        if(calc < 18.5){
            resultado.innerHTML = `${nomeUsuario} Você esta abaixo da media. IMC ${calc}`;
        } else if(18.5 >= calc < 24.9){
            resultado.innerHTML = `${nomeUsuario} Você esta com o peso ideal. IMC ${calc}`;
        } else if(25 >= calc < 29.9){
            resultado.innerHTML = `${nomeUsuario} Você esta com sobrepeso. IMC ${calc}`;
        } else if(30 >= calc < 34.9){
            resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 1. IMC ${calc}`;
        } else if(35 >= calc < 39.9){
            resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 2. IMC ${calc}`;
        } else if(calc > 40){
            resultado.innerHTML = `${nomeUsuario} Você esta em obesidade nivel 3. IMC ${calc}`;
        }
    } else {
        resultado.innerHTML = "Atenção, preencha todos os dados!"
        nome.focus();
    } 
}  