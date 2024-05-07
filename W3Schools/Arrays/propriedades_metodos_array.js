//SORT() - Classifica os elementos de um array em ordem crescente.
function metodoSort(){
    resultado = document.getElementById("resultado-sort");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    resultado.innerHTML = profissoes.sort();
}
//Resultado: Balconista,Engenheiro,Faxineiro,Motorista,Pedreiro

//REVERSE() - Inverte a ordem do arrays de trás para frente
function metodoReverse(){
    resultado = document.getElementById("resultado-reverse");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    resultado.innerHTML = profissoes.reverse();
}
// Resultado: Motorista,Faxineiro,Balconista,Pedreiro,Engenheiro

//ORDEM DESCRESCENTE USANDO SORT() E REVERSE()
function ordemDecrescente(){
    resultado = document.getElementById("resultado-decrescente");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    profissoes.sort();
    profissoes.reverse();
    resultado.innerHTML = profissoes;
}
//Resultado: Pedreiro,Motorista,Faxineiro,Engenheiro,Balconista

//PUSH() - Adiciona novos elementos ao final de um array e retorna o novo comprimento.

