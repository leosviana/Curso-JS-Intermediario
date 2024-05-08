//SORT() - Classifica os elementos de um array em ordem crescente.
function metodoSort(){
    let resultado = document.getElementById("resultado-sort");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    resultado.innerHTML = profissoes.sort();
}
//Resultado: Balconista,Engenheiro,Faxineiro,Motorista,Pedreiro

//REVERSE() - Inverte a ordem de um array de trás para frente
function metodoReverse(){
    let resultado = document.getElementById("resultado-reverse");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    resultado.innerHTML = profissoes.reverse();
}
// Resultado: Motorista,Faxineiro,Balconista,Pedreiro,Engenheiro

//ORDEM DESCRESCENTE USANDO SORT() E REVERSE()
function ordemDecrescente(){
    let resultado = document.getElementById("resultado-decrescente");
    const profissoes = ["Engenheiro", "Pedreiro", "Balconista", "Faxineiro", "Motorista"];
    profissoes.sort();
    profissoes.reverse();
    resultado.innerHTML = profissoes;
}
//Resultado: Pedreiro,Motorista,Faxineiro,Engenheiro,Balconista

//PUSH() - Adiciona novos elementos ao final de um array e retorna o novo comprimento.
function metodoPush(){
    let resultado = document.getElementById("resultado-push");
    const animais =["Macaco", "Leão", "Elefante"];
    animais.push("Hipopótamo");
    resultado.innerHTML = animais;
}
//Resultado: Macaco,Leão,Elefante,Hipopótamo

//POP() - Remove o último elemento de um array e retorna esse elemento.
function metodoPop(){
    let resultado = document.getElementById("resultado-pop");
    const animais =["Macaco", "Leão", "Elefante", "Hipopótamo"];
    animais.pop();
    resultado.innerHTML = animais;
}
//Resultado: Macaco,Leão,Elefante. (Removido "Hipopótamo")

//CONCAT() - Une um ou mais arrays. Retorna um novo array contendo os arrays unidos.
function metodoConcat(){
    let resultado = document.getElementById("resultado-concat");
    const camisas = ["Manga Larga", "Cavada"];
    const calcados = ["Sapatenis", "Botina", "Chinelo"];
    let guardaRoupa = camisas.concat(calcados); //Está unindo o array "camisas" e "calcados"
    resultado.innerHTML = guardaRoupa;
}
//Resultado: Manga Larga,Cavada,Sapatenis,Botina,Chinelo

//SHIFT() - Remove o primeiro elemento de um array e retorna esse elemento
function metodoShift(){
    let resultado = document.getElementById("resultado-shift");
    const cores = ["Branco", "Vermelho", "Azul"];
    cores.shift();
    resultado.innerHTML = cores;
}
//Resultado: Vermelho,Azul

//UNSHIFT() - Adiciona novos elementos ao início de um array e retorna o novo comprimento
function metodoUnshift(){
    let resultado = document.getElementById("resultado-unshift");
    const cores = ["Branco", "Vermelho", "Azul"];
    cores.unshift("Preto", "Amarelo");
    resultado.innerHTML = cores;
}
//Resultado: Preto,Amarelo,Branco,Vermelho,Azul

//SLICE() - Seleciona uma parte de um array e retorna o novo array (Inicio para o fim).
function metodoSlice(){
    let resultado = document.getElementById("resultado-slice");
    const pizza = ["queijo", "pepperoni", "vegetais", "azeitonas", "Presunto", "Ovos"];
    let fatia = pizza.slice(1,3); 
    resultado.innerHTML = fatia;
    //Isso vai imprimir ["pepperoni"], porque é a fatia que vai do segundo ingrediente (índice 1) 
    //até o terceiro ingrediente (índice 2), mas sem incluir o terceiro ingrediente.
}
//Resultado: pepperoni,vegetais

//SLICE() - Seleciona uma parte de um array e retorna o novo array (Fim para o inicio).
function metodoSliceReverso(){
    let resultado = document.getElementById("resultado-slice-reverso");
    const pizza = ["queijo", "pepperoni", "vegetais", "azeitonas", "presunto", "ovos", "orégano"];
    let fatia = pizza.slice(-3,-1); 
    resultado.innerHTML = fatia;
    //A contagem se inicia pelo ultimo elemento até o primeiro.
    //Será impresso a partir do terceiro elemento (índice [4]) até o primeiro elemento (índice [5])
    //Mas sem incluir o primeiro ingrediente
}
//Resultado: presunto,ovos

//SPLICE - Adiciona ou remove elementos do array. Substituindo o array original por outros elementos.
function metodoSplice(){
    let resultado = document.getElementById("resultado-splice");
    let itens = ["poção de cura", "poção de magia", "armadura", "escudo"];
    itens.splice(2,0,"espada", "sapatos");
                 //itens.splice(índice, contagem(opcional), novos elementos(opcional))
    //Adiciona dois elementos a partir do índice 2
    resultado.innerHTML = itens;
}
//Resultado: poção de cura,poção de magia,espada,sapatos,armadura,escudo