//SORT() - Classifica os elementos de um array em ordem crescente.
function metodoSort(){
    resultado = document.getElementById("resultado-sort");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    resultado.innerHTML = profissoes.sort();
}
//Resultado: Balconista,Engenheiro,Faxineiro,Motorista,Pedreiro

//REVERSE() - Inverte a ordem de um array de trás para frente
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
function metodoPush(){
    resultado = document.getElementById("resultado-push");
    const animais =["Macaco", "Leão", "Elefante"];
    animais.push("Hipopótamo");
    resultado.innerHTML = animais;
}
//Resultado: Macaco,Leão,Elefante,Hipopótamo

//POP() - Remove o último elemento de um array e retorna esse elemento.
function metodoPop(){
    resultado = document.getElementById("resultado-pop");
    const animais =["Macaco", "Leão", "Elefante", "Hipopótamo"];
    animais.pop();
    resultado.innerHTML = animais;
}
//Resultado: Macaco,Leão,Elefante. (Removido "Hipopótamo")

//CONCAT() - Une um ou mais arrays. Retorna um novo array contendo os arrays unidos.
function metodoConcat(){
    resultado = document.getElementById("resultado-concat");
    const camisas = ["Manga Larga", "Cavada"];
    const calcados = ["Sapatenis", "Botina", "Chinelo"];
    let guardaRoupa = camisas.concat(calcados); //Está unindo o array "camisas" e "calcados"
    resultado.innerHTML = guardaRoupa;
}
//Resultado: Manga Larga,Cavada,Sapatenis,Botina,Chinelo



