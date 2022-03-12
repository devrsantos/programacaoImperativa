let participanteA = [5, 8, 4, 9, 5];
let participanteB = [8, 7, 8, 6, 8];
let participanteC = [7, 5, 10, 8, 3];

const pontuacaoMedia = (arr) => {
    let media = 0;
    for (let i = 0; i < arr.length; i++) {
        media = media + arr[i];
    }
    media = media / arr.length;
    return media;
};
let mediaParticipanteA = pontuacaoMedia(participanteA);
let mediaParticipanteB = pontuacaoMedia(participanteB);
let mediaParticipanteC = pontuacaoMedia(participanteC);

const pontuacaoMaior = (arr) => {
    let cont = 0;
    for (let i = 0; i < arr.length; i++) {
        if (cont < arr[i]) {
            cont = arr[i];
        }
    }
    return cont;
};
let maiorPontuacaoParticipanteA = pontuacaoMaior(participanteA);
let maiorPontuacaoParticipanteB = pontuacaoMaior(participanteB);
let maiorPontuacaoParticipanteC = pontuacaoMaior(participanteC);

const competicao = (arr1, arr2, arr3) => {
    let vencedorMedia;
    let maiorMédia;
    let participanteA = pontuacaoMedia(arr1);
    let participanteB = pontuacaoMedia(arr2);
    let participanteC = pontuacaoMedia(arr3);

    if (participanteA > participanteB) {
        vencedorMedia = `A`;
    } else if (participanteB > participanteC) {
        vencedorMedia = `B`;
    } else {
        vencedorMedia = `C`;
    }

    console.log(`O participante com maior média é ${vencedorMedia}`);

    let maiorPontuacaoA = pontuacaoMaior(arr1);
    let maiorPontuacaoB = pontuacaoMaior(arr2);
    let maiorPontuacaoC = pontuacaoMaior(arr3);

    if (maiorPontuacaoA > maiorPontuacaoB) {
        vencedorMedia = `A`;
    } else if (maiorPontuacaoB > maiorPontuacaoC) {
        vencedorMedia = `B`;
    } else {
        vencedorMedia = `C`;
    }

    console.log(`O participante com maior nota individual é ${vencedorMedia}`);
};
competicao(participanteA, participanteB, participanteC);
