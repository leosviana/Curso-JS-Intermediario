/* ARRAYS
Os arrays JavaScript são usados para armazenar vários valores em uma única váriavel. 
Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens
dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.
Ex.: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 0) vai conter o valor "feijão".
E assim por diante.

*/
              //0       //1       //2         //3
const lista1 = ["arroz", "feijão", "macarrão", "leite"]; //1º FORMA

const lista2 = [ //2º FORMA
    "arroz", 
    "feijão", 
    "macarrão", 
    "leite"]; 

const lista3 = []; //3º FORMA
    lista3[0] = "arroz";
    lista3[1] = "feijão";
    lista3[2] = "macarrão";
    lista3[3] = "leite";

const lista4 = new Array("arroz", "feijão", "macarrão", "leite"); //4º FORMA
    lista4[3] = "café"; //Alterando valor da matrix na posição 3

console.log(lista1, lista2 , lista3, lista4); //Exibindo o resultado

//DIFERENÇA DE ARRAY PARA OBJETO
//ARRAY:
const pessoaArray  = ["Dimitry", "Teixeira", 30]; //ARRAY - POSIÇÃO
pessoaArray[0]; //Carregando a posição 0 "Dimitry" do array "pessoaArray"
console.log(pessoaArray[0]); //Exibindo posição 0 array
//OBJETO:
const pessoaObjeto = {nome: "Dimitry", sobrenome: "Teixeira", idade: 30}; //OBJETO - PROPRIEDADES
pessoaObjeto.nome; //Carregando a propriedade "nome" do objeto "pessoaObjeto"
console.log(pessoaObjeto.sobrenome); //Exibindo propriedade "sobrenome" do objeto

//FORMAS DE TRAZER O TAMANHO DO ARRAY
console.log(pessoaArray.length); //Chamando o método "length" da propriedade para de trazer o tamanho do array
console.log(pessoaArray[pessoaArray.length -1]); //Trazendo sempre a última posição do array [tamanho do array -1]

//INSERINDO REGISTRO NO ARRAY
const pessoaArray2 = ["Ricardo", "Silveira", "44"];
pessoaArray2.push("Brasileiro"); //Chamando o método "push" para inserir um registro em uma nova posição no array.
pessoaArray2[pessoaArray2.length] = "Casado"; //Outra forma de inserir um registro em uma nova posição no array.
console.log(pessoaArray2);
console.log(Array.isArray(pessoaArray2)); //Exibindo se a variável é um array ou não (True ou False).