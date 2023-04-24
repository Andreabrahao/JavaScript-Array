const salaJS = [7, 8, 8, 7, 10, 6.5, 4, 10, 7];
const salaJava = [6, 5, 8, 9, 5, 6];
const salaPython = [7, 3.5, 8, 9.5];

function calculaMedia(notasDaSala) { //cc = acumulador
    const somaDasNotas = notasDaSala.reduce((cc, nota) => {
        return cc + nota;
    }, 0); // o valor do 'acumulador' e 0

    const media = somaDasNotas / notasDaSala.length;

    return media;
}

console.log(`A media da sala JS e ${calculaMedia(salaJS)}`);
console.log(`A media da sala J e ${calculaMedia(salaJava)}`);
console.log(`A media da sala P e ${calculaMedia(salaPython)}`);