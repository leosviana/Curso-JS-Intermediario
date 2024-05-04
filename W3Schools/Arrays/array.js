

//Exercício 1 - Acessando um elementos do array
function ex1(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"];
    let posicaoDigitada = document.getElementById("id1").value;
    document.getElementById("resultado1").innerHTML = frutas[posicaoDigitada];
}

//Exercício 2 - Exibindo todos os elementos do array
function ex2(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"];
    document.getElementById("resultado2").innerHTML = frutas.toString();
}

//Exercício 3 - Adicionando elementos na array
function ex3(){
    const marcaCarros = ["BMW", "Volvo", "Fiat"];
    i = 3;
    let posicaoDigitada = document.getElementById("id3").value;
    document.getElementById("resultado3").innerHTML = marcaCarros.toString();
    i++;
}