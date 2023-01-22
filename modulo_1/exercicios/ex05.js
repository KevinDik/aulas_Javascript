function consultarEstacionamento(horario) {
    horario = horario.slice(0, 2)
    if (horario >= 5 && horario < 12) {
        return console.log("Acessou no periodo manha");
    } else if (horario >= 12 && horario < 18) {
        return console.log("Acessou no periodo tarde");
    } else if (horario >= 18 || horario < 5) {
        return console.log("Acessou no periodo noite");
    }
}

consultarEstacionamento('05:00')
consultarEstacionamento('14:00')
consultarEstacionamento('02:00')
consultarEstacionamento('13:00')
consultarEstacionamento('16:00')
consultarEstacionamento('18:00')
consultarEstacionamento('22:00')
consultarEstacionamento('01:00')