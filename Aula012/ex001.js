//JAVASCRIPT - MÉTODOS PARA ARRAYS
const pessoa = ["Leandro", "Silveira", "Ramos", "Teixeira", 30, "Professor"]; //ARRAY

//MÉTODO: POP - Remove o ultimo item do array.
pessoa.pop(); 

//MÉTODO: PUSH - Insere um valor ao final do array.
pessoa.push("Altura: 1,90"); 

//MÉTODO: SHIFT - Remove o primeiro item do array (Leandro). Os indices são reordenados.
pessoa.shift(); 

//MÉTODO: UNSHIFT - Insere um valor no inicio do array. Os indices são reordenados.
pessoa.unshift("ID da pessoa"); 

//MÉTODO: DELETE - Remove um valor da matriz. O índice continua fixo.
delete pessoa[2]; //                //0        //1         //2         //3       //4  //5
                  //const pessoa = ["Leandro", "Silveira", undefined, "Teixeira", 30, "Professor"]; 

//MÉTODO: SPLICE - Insere valores aonde quiser (POSIÇÃO, QUANTOS DESEJA REMOVER, QUANTOS DESEJA ADICIONAR)
pessoa.splice(1,0,"Souza", "Santos"); 

//MÉTODO: JOIN - Insere uma valor entre o registro.
pessoa.join(" - ");
document.getElementById("campo1").innerHTML = pessoa; //Exibindo resultado

//MÉTODO: CONCAT - CONCATENA ARRAYS
const lista1 = ["arroz", "feijão", "macarrão", "leite"];
const lista2 = ["suco", "refrigerante", "carne"];
const lista3 = ["salgadinhos"];
const superLista = lista1.concat(lista2, lista3); //Concatenando duas listas. Precisa atribuir sobre um outra variavel.
document.getElementById("campo2").innerHTML = superLista; //Exibindo resultado

//MÉTODO: SLICE - Fatiar a matriz a partir de uma posição
const jogadores = [
    "Biro Biro", 
    "Ribamar", 
    "Pelé", 
    "Maradona", 
    "Neymar", 
    "Cristiano Ronaldo", 
    "Vampeta", 
    "Dimitri"];
const craques = jogadores.slice(2,6); //Fatiar array a partir da posição 2 até posição 6
document.getElementById("campo3").innerHTML = craques;

//MÉTODO: SORT (PARA TEXTOS) - Ordenar array
const ordemJogadores = jogadores.sort();
document.getElementById("campo4").innerHTML = ordemJogadores;

//MÉTODO: SORT (PARA TEXTOS) - Ordenar array decrescente
const ordemJogadores2 = jogadores.reverse();
document.getElementById("campo5").innerHTML = ordemJogadores2;

//MÉTODO: SORT (PARA TEXTOS) - Ordenar array numérico
const numeros = [40, 100, 1, 5, 25, 10];
document.getElementById("campo6").innerHTML = numeros.sort(function(a,b){return a-b}); //Compara se o numero é maior ou menor que o anterior e deixa na ordem crescente

//MÉTODO: SORT (PARA TEXTOS) - Ordenar array numérico decrescente
const numeros2 = [40, 100, 1, 5, 25, 10];
document.getElementById("campo7").innerHTML = numeros2.sort(function(a,b){return b-a}); //Compara se o numero é maior ou menor que o anterior e deixa na ordem decrescente

//FUNÇÃO: Math.max.apply - Pegar o maior numero
const numeros3 = [40, 100, 1, 5, 25, 10];
function MaiorNumero(array){
    return Math.max.apply(null, array);
}
document.getElementById("campo8").innerHTML = MaiorNumero(numeros3);

//FUNÇÃO: Math.min.apply - Pegar o menor numero
const numeros4 = [40, 100, 1, 5, 25, 10];
function MenorNumero(array){
    return Math.min.apply(null, array);
}
document.getElementById("campo9").innerHTML = MenorNumero(numeros4);

//FUNÇÃO: filter - Filtrar numeros
const numeros5 = [40, 100, 1, 5 , 25, 10];
const maior20 = numeros5.filter(filtragem);
function filtragem(value, index, array){
    return value > 20;
}
document.getElementById("campo10").innerHTML = maior20;
