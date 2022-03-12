let numbers = [22, 33, 54, 66, 72];
console.log(numbers[numbers.length]); // undefined;

let grupoDeAmigos = [
    ['Harry', 'Ron', 'Hermione'],
    ['Spiderman', 'Hulk', 'Ironman'],
    ['Penélope Glamour', 'Pierre Nodoyuna', 'Patán'],
];
console.log(grupoDeAmigos[1][0]); // Spiderman

let str = 'uma string qualquer';
grupoDeAmigos2 = [
    [45, 89, 0],
    ['Digital', 'House', true],
    ['string', '123', 'false', 54, true, str],
];
console.log(grupoDeAmigos2[2][grupoDeAmigos2[2].length - 1]); // uma string qualquer

function imprimirInverso(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[arr.length - 1 - i]); // 4 3 2 1
    }
}
imprimirInverso([1, 2, 3, 4]);

let newArr = [];
function inverter(arr) {
    newArr[0] = arr[arr.length - 1];
    arr.pop();
    newArr[1] = arr[arr.length - 1];
    arr.pop();
    newArr[2] = arr[arr.length - 1];
    arr.pop();
    newArr[3] = arr[arr.length - 1];
    arr.pop();
}
inverter([1, 2, 3, 4]);
console.log(newArr);

function somarArray(arr) {
    let soma = 0;
    for (let i = 0; i < arr.length; i++) {
        soma = soma + arr[i];
    }
    return soma;
}

console.log(somarArray([1, 2, 3]));
console.log(somarArray([10, 3, 10, 4]));
console.log(somarArray([-5, 100]));

function arrayJoin(arr) {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += arr[i];
    }
    return str;
}
console.log(arrayJoin(['o', 'l', 'a']));
console.log(arrayJoin(['t', 'c', 'h', 'a', 'u']));

let arrFilmesSeries1 = [
    'star wars',
    'matrix',
    'mr. robot',
    'o preço do amanhã',
    'a vida é bela',
];

let arrFilmesSeries2 = [
    'Toy Story',
    'Procurando Nemo',
    'Kung-fu Panda',
    'Wally',
    'Fortnite',
];

let filmesSeries = [];
function maiscula(arr) {
    for (let i = 0; i < arr.length; i++) {
        filmesSeries[i] = arr[i].toUpperCase();
    }
    console.log(filmesSeries);
}
maiscula(arrFilmesSeries1);

let arrUnico = [];
const juntaArr = (arr1, arr2) => arr1 + arr2;
arrUnico = juntaArr(arrFilmesSeries1, arrFilmesSeries2);
console.log(arrUnico.split(','));

let removeGame = arrFilmesSeries2.pop();

const asiaScores = [8, 10, 6, 9, 10, 6, 6, 8, 4];
const euroScores = [8, 10, 6, 8, 10, 6, 7, 9, 5];

const compareNote = (arr1, arr2) => {
    if (arr1.length === arr2.length) {
        for (let i = 0; i < arr1.length; i++) {
            if (arr1[i] === arr2[i]) {
                console.log(`Notas são Iguais`);
            } else {
                console.log(`Notas são Diferentes`);
            }
        }
    }
};
compareNote(asiaScores, euroScores);
