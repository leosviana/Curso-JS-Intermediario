

//Exercício 1 - Acessando um elemento do array
function ex1(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"]; //array
    let posicaoDigitada = document.getElementById("id1").value; //capturado o valor digitado pelo usuário no input
    document.getElementById("resultado1").innerHTML = frutas[posicaoDigitada]; //Exibindo o array na tela
}

//Exercício 2 - Exibe um array completo
function ex2(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacaxi"]; //array
    document.getElementById("resultado2").innerHTML = frutas; //Exibindo o array na tela
}

//Exercício 3 - Converte um array em uma string (separado por virgula)
function ex3(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"]; //array
    document.getElementById("resultado3").innerHTML = frutas.toString(); //Exibindo o array na tela
}

//Exercício 4 - Exibe o último elemento do array
function ex4(){
    const carros = ["Passar", "Fusca", "Gol", "Porsche"]; //array
    document.getElementById("resultado4").innerHTML = carros[carros.length -1]; //Exibindo o array na tela
}

//Exercício 5 - Exibe todos os elementos do array pelo laço FOR
function ex5(){
    const marcaCarros = ["BMW", "Volvo", "Fiat", "Volkswagen", "Chrysler"]; //array
    let tamanhoArray = marcaCarros.length;
    let lista = "<ul>"; //Cria a lista

    for(let i = 0; i < tamanhoArray; i++){ //Laço de repetição FOR
        lista += "<li>" + marcaCarros[i] + "</li>"; //Exibe em formato lista
        document.getElementById("resultado5").innerHTML = lista; //Exibindo o array na tela
    }
    lista += "</ul>"; //Finaliza a lista
}

//Exercício 6 - Exibe todos os elementos do array pela função forEach()
function ex6(){
    const animais=["Cachorro", "Gato", "Periquito", "Tartaruga"]; //array
    /* FOREACH 1 */
    /*let texto = "<ul>";
    animais.forEach(minhaFuncao);
    texto += "</ul>";
    document.getElementById("resultado6").innerHTML = texto;

    function minhaFuncao(value){
        texto += "<li>" + value + "</li>";
    }*/
    
    /* FOREACH 2 - SIMPLIFICADO */
    /*let texto = "";
    animais.forEach(function(valor){
      texto += "<li>" + valor + "</li>";
      texto += "</ul>";
    });
    document.getElementById("resultado6").innerHTML = texto;*/

    /* FOREACH 3 - USANDO ARROW FUNCTION (FLECHA =>) */
    animais.forEach(animais => document.getElementById("resultado6").innerHTML += animais + " - "); //Exibindo o array na tela
        
}

//Exercício 7 - Adicionando elementos no array
function ex7(){
    const pessoas = ["Leonardo", "Rita", "Maria", "Reginaldo"]; //array
    let novaPessoa = document.getElementById("id7").value; //capturado o valor digitado pelo usuário no input
    pessoas.push(novaPessoa); //Adicionou o elemento ao final do array
    document.getElementById("resultado7").innerHTML = pessoas; //Exibindo o array na tela

    /* 
    //Outra forma de adicionar elementos na array
    pessoas[pessoas.length] = novaPessoa; //Usando a propriedade "length"
    document.getElementById("resultado7").innerHTML = pessoas; //Exibindo o array na tela
    */
}

//Exercício 8 - Buracos no array ficam como "Undefined" (Indefinido)
function ex8(){
    const camisetas = ["Nike", "Boss"];
    camisetas[6] = "Lacoste";
    let tamanhoArray = camisetas.length;
    let texto = "";

    for(i = 0; i < tamanhoArray; i++){
        texto += camisetas[i] + "<br>";
    }
    document.getElementById("resultado8").innerHTML = texto;
}