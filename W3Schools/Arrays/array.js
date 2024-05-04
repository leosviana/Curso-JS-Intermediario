

//Exercício 1 - Acessando um elemento do array
function ex1(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"];
    let posicaoDigitada = document.getElementById("id1").value;
    document.getElementById("resultado1").innerHTML = frutas[posicaoDigitada];
}

//Exercício 2 - Exibe um array completo
function ex2(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga", "Abacaxi"];
    document.getElementById("resultado2").innerHTML = frutas;
}

//Exercício 3 - Converte um array em uma string (separado por virgula)
function ex3(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"];
    document.getElementById("resultado3").innerHTML = frutas.toString();
}

//Exercício 4 - Exibe o último elemento do array
function ex4(){
    const carros = ["Passar", "Fusca", "Gol", "Porsche"];
    document.getElementById("resultado4").innerHTML = carros[carros.length -1];
}

//Exercício 5 - Exibe todos os elementos do array pelo laço FOR
function ex5(){
    const marcaCarros = ["BMW", "Volvo", "Fiat", "Volkswagen", "Chrysler"];
    let tamanhoArray = marcaCarros.length;
    let lista = "<ul>";

    for(let i = 0; i < tamanhoArray; i++){
        lista += "<li>" + marcaCarros[i] + "</li>";
        document.getElementById("resultado5").innerHTML = lista;
    }
    lista += "</ul>";
}

//Exercício 6 - Exibe todos os elementos do array pela função forEach()
function ex6(){
    const animais=["Cachorro", "Gato", "Periquito", "Tartaruga"];
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
    let texto = "";
    animais.forEach(animais => document.getElementById("resultado6").innerHTML += animais + " - ");
        
}