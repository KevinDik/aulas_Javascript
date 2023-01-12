function soma() {
    let v1 = valor1.value;
    let v2 = valor2.value;

    document.getElementById("resultado").innerHTML = Number(v1) + Number(v2);
}
function subtrair() {
    let v1 = valor1.value;
    let v2 = valor2.value;

    document.getElementById("resultado").innerHTML = Number(v1) - Number(v2);
}
function multiplicar() {
    let v1 = valor1.value;
    let v2 = valor2.value;

    document.getElementById("resultado").innerHTML = Number(v1) * Number(v2);
}
function dividir() {
    let v1 = valor1.value;
    let v2 = valor2.value;

    document.getElementById("resultado").innerHTML = Number(v1) / Number(v2);
}