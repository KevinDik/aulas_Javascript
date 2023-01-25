let manha = 0;
let tarde = 0;
let noite = 0;

function consultarEstacionamento(horario) {
    let container = document.getElementById("container");
    horario = horario.slice(0, 2)
    if (horario >= 5 && horario < 12) {
        manha += 1
    } else if (horario >= 12 && horario < 18) {
        tarde += 1
    } else if (horario >= 18 || horario < 5) {
        noite += 1
    }
    return container.innerHTML = `Total de acessos durante o dia foram de: Manhã ${manha} | Tarde ${tarde} | Noite ${noite}`
}

consultarEstacionamento('05:00')
consultarEstacionamento('14:00')
consultarEstacionamento('02:00')
consultarEstacionamento('13:00')
consultarEstacionamento('16:00')
consultarEstacionamento('18:00')
consultarEstacionamento('22:00')
consultarEstacionamento('01:00')
consultarEstacionamento('07:00')
consultarEstacionamento('07:45')
