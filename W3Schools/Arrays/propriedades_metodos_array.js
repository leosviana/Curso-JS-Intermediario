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
    const itens = ["poção de cura", "poção de magia", "armadura", "escudo"];
    itens.splice(2,0,"espada", "sapatos");
                 //itens.splice(índice, contagem(opcional), novos elementos(opcional))
    //Adiciona dois elementos a partir do índice 2
    resultado.innerHTML = itens;
}
//Resultado: poção de cura,poção de magia,espada,sapatos,armadura,escudo

//JOIN - Retorna um separador entre os elementos.
function metodoJoin(){
    const resultado = document.getElementById("resultado-join");
    let vitamina = ["Banana", "Leite", "Morango"];    
    
    resultado.innerHTML = vitamina.join(" + "); //Insere um "+" entre os elementos.
}

//MAP - Cria um novo array com o resultado de uma função executada em cada elemento do array. Esse método não altera o array original. Não executa a função para elementos vazios.
//Exemplo 1: Multiplica todos os elementos do array pelo número 2.
function metodoMapEx1(){
    resultado = document.getElementById("resultado-map-ex1");
    const numeros = [1, 2, 3, 4, 5];
    //Dobra o valor de cada número:
    let valorDobrado = numeros.map(function(numero){
        return numero * 2;
    });
    resultado.innerHTML = valorDobrado;
}

//Exemplo 2: Retorna os elementos de um objeto separando-os com um espaço (" ").
function metodoMapEx2(){
    resultado = document.getElementById("resultado-map-ex2");
    const pessoas = [
        {nome:"Airton", sobrenome:"Senna"},
        {nome:"Steve", sobrenome:"Jobs"},
        {nome:"Elon", sobrenome:"Musk"}
    ];

    resultado.innerHTML = pessoas.map(pegarNomeCompleto); 

    function pegarNomeCompleto(elementos){
        return nomes = [elementos.nome, elementos.sobrenome].join(" "); //Retorna o objeto acrescentando um " "(espaço) entre os elementos
    }
}

//FILTER - O método filter() cria um novo array preenchido com elementos que passam em um teste fornecido por uma função. Não executa a função para elementos vazios. Não altera o array original.
function metodoFilter(){
    resultado = document.getElementById("resultado-filter");
    const idade = [15, 16, 17, 18, 19, 20, 21];
    const TirarHabilitacao = idade.filter(adulto);

    function adulto(idade){
        return idade >= 18;
    }
    resultado.innerHTML = TirarHabilitacao;
}