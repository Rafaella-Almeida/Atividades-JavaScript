
const anoAtual = new Date().getFullYear();
const anoAniversario =  2003;
console.log(`${anoAtual - anoAniversario} anos de idade`);

const mesAtual = new Date().getMonth() +1;
const mesAniversario = 12;
console.log(`faltam ${mesAniversario - mesAtual} meses para completar essa idade`);


const diasAno = (dias) => {
    dias = 365
}
const vividos = parseInt((anoAtual - anoAniversario) * 365 + mesAtual - mesAniversario + mesAtual);
console.log(`--> Sua idade em dias é: ${vividos} <--`);

