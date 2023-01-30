let tentativas = 0;
let numeroRandomico = Math.floor(Math.random() * 100) + 1;
function checarTentativa() {
    tentativas++;
    if(tentativas == 10) {
        alert("game over");
        perdeu();
        return;
    }
    alert(tentativas);
}

function perdeu() {
    tentativas = 0;
    numeroRandomico = Math.floor(Math.random() * 100) + 1;
    //window.location.reload();
}