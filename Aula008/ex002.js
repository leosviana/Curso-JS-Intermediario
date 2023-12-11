//FUNÇÕES - COTAÇÃO DO DOLAR

//É como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída;
//Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo o código;
//Uma função JavaScript é executada quando algo a invoca (chama-a);

function realParaDolar(real, cotacaoDolar){ //Função para calcular valores
    return real * cotacaoDolar;
}

var valorReal = 7.90; //Valor em reais
var cotacao = 5.08; //Cotação do dolar atual
var total = realParaDolar(valorReal, cotacao); //Calculando valor e inserindo na variável "total"

alert("O valor em real é R$ " + valorReal + " o valor em dólar é U$ " + total); //Exibindo resultado em uma mensagem