
const eleitores = { votosNulos: 200, votosEmBranco: 550, votosValidos: 3750 };

const votosNulos = eleitores.votosNulos;
const votosEmBranco = eleitores.votosEmBranco;
const votosValidos = eleitores.votosValidos;

const totalEleitores = votosNulos + votosEmBranco + votosValidos;
console.log(totalEleitores);

//  INTEIRO E EM FORMA DE PORCENTAGEM: 

const percentNulo = votosNulos / totalEleitores * 100;
const  percentNuloInter = Math.floor(percentNulo);
console.log(`${percentNuloInter}% Representa os votos nulos`)

const percentBranco = votosEmBranco / totalEleitores * 100;
const  percentBrancoInter = Math.floor(percentBranco);
console.log(`${percentBrancoInter}% Representa os votos em branco`)

const percentValidos = votosValidos / totalEleitores * 100;
const  percentValidosInter = Math.floor(percentValidos);
console.log(`${percentValidosInter}% Representa os votos validos`)

