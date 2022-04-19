const a_atual = 2022;
const m_atual = 4;
const m_nascimento = 08;
const a_nascimento = 1975;


if (a_atual < a_nascimento) {
console.log("\n Impossível continuar, pois o ano de nascimento não pode ser maior que o atual\n");
}
else{

//diferença de 1 ano exato ⬇
if ((a_atual - a_nascimento) <= 1) {
if ((a_atual - a_nascimento) == 1) {
const ano = (1*365);

// se não deu 1 ano completo  ⬇
if (m_atual < m_nascimento) {
const diferenca_meses = m_nascimento - m_atual;
const meses = 12 - diferenca_meses;
console.log(`\nVocê tem ${meses} meses de vida`);

const dias = (meses * 30);
console.log(`\nSua idade é de ${dias} dias\n`);

}

// se completou 1 ano exato ⬇
if (m_atual >= m_nascimento) {
const diferenca_meses = m_atual - m_nascimento;
idade = ano + (diferenca_meses * 30);
console.log(`\nSua idade é de ${idade} dias\n`);
}
}

//mesmo ano com meses diferentes ⬇
else {
const meses = m_atual - m_nascimento;
const dias = (meses * 30);

// meses = a 0, 30 dias de vida no máximo

meses == 0 ? console.log(`n Mesmo mês ou ano de nascimento informado, sua idade é de 30 dias no máximo\n`):
console.log(`\nSua idade é de ${dias} dias\n`);
}
}

// diferença do ano atual e o de nascimento > 1 ⬇
if((a_atual - a_nascimento)>1){
const ano = (a_atual - a_nascimento) * 365;

// mês atual < ano de nascimento ⬇
if (m_atual < m_nascimento) {
const diferenca_meses = m_nascimento - m_atual;
idade = ano + (diferenca_meses * 30);
console.log(`\nSua idade é de ${idade} dias\n`);
}

//mês atual > mês de nascimento ⬇
if (m_atual >= m_nascimento) {
const diferenca_meses = m_atual -m_nascimento;
idade = ano + (diferenca_meses * 30);
console.log(`\nSua idade é de ${idade} dias\n`);
}
}
}