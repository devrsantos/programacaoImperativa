let alice = [23, 82, 46];
let bob = [45, 8, 32];

const encontrarGanhador = (a, b) => {
    let pontosPrimeiroParticipante = 0;
    let pontosSegundoParticipante = 0;

    for (let i = 0; i < a.length; i++) {
        if (a.length === b.length) {
            if (a[i] > b[i]) {
                pontosPrimeiroParticipante += 1;
            } else if (a[i] < b[i]) {
                pontosSegundoParticipante += 1;
            } else {
                pontosPrimeiroParticipante += 0;
                pontosSegundoParticipante += 0;
            }
        }
    }
    if (pontosPrimeiroParticipante > pontosSegundoParticipante) {
        return `Alice`;
    } else {
        return `Bob`;
    }
};

console.log('O ganhador é: ' + encontrarGanhador(alice, bob));
