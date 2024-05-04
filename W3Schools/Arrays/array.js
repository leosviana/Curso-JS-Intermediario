

//Exercício 1 - Acessando elemento do array
function ex1(){
    const frutas = ["Banana", "Laranja", "Maça", "Manga"];
    let posicaoDigitada = document.getElementById("id1").value;
    document.getElementById("resultado1").innerHTML = frutas[posicaoDigitada];

}