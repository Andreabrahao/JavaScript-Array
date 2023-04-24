const notas = [10, 6.5, 8, 7.5];

let somaDasNotas = 0;

for(let elementos of notas){
    somaDasNotas += elementos;
}

const media = somaDasNotas / notas.length;

console.log(`A media das notas e ${media}`);